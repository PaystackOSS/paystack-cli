const fs = require('fs');
fs.readFile('./apis.json', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = JSON.parse(data);

    processFile(content);
});

function processFile(content) {
    let commands = {};
    content.requests.forEach((request) => {
        let command = getCommand(request.url);
        let schema = {
            api: request.name.split(' ')[0].toLowerCase(),
            endpoint: cleanUrl(request.url),
            method: request.method,
            params: getParamsFromDescription(request.description),
            description: request.description
        }
        if (!commands[command]) {
            commands[command] = [
                schema
            ]
        } else {
            commands[command].push(schema)
        }

    });
    let data = JSON.stringify(commands);
    fs.writeFileSync('./formattedAPIs.json', data);
    // getParamsFromDescription(content.requests[1].description);
    // console.log(content.requests[60])
    // getCommand(content.requests[60].url)
}

function getParamsFromDescription(desc) {
    if (!desc) return []

    desc = desc.replace(/-/g, '')
    let words = desc.split('\n');
    words.splice(0, 1)
    let params = [];
    words.forEach((w) => {
        params.push({
            parameter: w.slice(w.indexOf('**') + 2, w.lastIndexOf('**')),
            required: w.toLowerCase().indexOf('required') > 0,
            type: guessType(w.slice(w.indexOf('**') + 2, w.lastIndexOf('**')))
        })
    })

    return params;

}

function guessType(name) {
    name = name.toLowerCase();
    let type;
    switch (name) {
        case 'amount':
            type = 'Number'
            break;
        case 'page':
            type = 'Number'
            break;
        case 'perPage':
            type = 'Number'
            break;
        default:
            type = 'String';
    }
    return type;
}

function getCommand(endpoint) {
    let path = endpoint.replace('https://api.paystack.co/', '');
    path = path.split('/')
    return path[0]
}

function cleanUrl(url) {
    if (url.indexOf('?') > 0) {
        url = url.slice(url.indexOf('?'));
    }
    if (url.indexOf('{') > 0) {
        url = url.slice(url.indexOf('{'));
    }
    if (url.indexOf(':id') > 0) {
        url = url.slice(url.indexOf(':id'));
    }
    return url;
}