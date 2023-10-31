const fs = require('fs');
const collection = require('./Paystack.postman_collection');
const baseUrl = "https://api.paystack.co";
let parsedAPIs = {}
collection.item.forEach((APIObject) => {

    let command_name = APIObject.name.toLowerCase();
    command_name = command_name.replace(/ /g, '');
    if (command_name.includes('integration/')) {
        command_name = command_name.replace('integration/', '')
    }
    parsedAPIs[command_name] = [];
    if (!isAPIObject(APIObject)) {

        APIObject.item.forEach((subObject) => {
            let subcommand_name = subObject.name.toLowerCase();
            subcommand_name = subcommand_name.replace(/ /g, '');
            if (!isAPIObject(subObject)) {
                subObject.item.forEach((_subObject) => {
                    subcommand_name = _subObject.name.toLowerCase();
                    subcommand_name = subcommand_name.replace(/ /g, '');
                    if (isAPIObject(_subObject)) {
                        let formattedAPI = createAPIObject(_subObject, command_name);
                        parsedAPIs[command_name].push(formattedAPI);
                    } else {
                        // console.log('Naah', _subObject)
                    }
                })
            } else {
                //add to API collection
                let formattedAPI = createAPIObject(subObject, command_name);
                parsedAPIs[command_name].push(formattedAPI);
                // console.log(Object.keys(subObject))
            }
        })
    }
    else {
        //add to API collection
        let formattedAPI = createAPIObject(APIObject, command_name);
        parsedAPIs[command_name].push(formattedAPI);
        //  console.log(formattedAPI);
        // console.log(Object.keys(APIObject))
    }

})

fs.writeFile(`./APIs.json`, JSON.stringify(parsedAPIs), () => {
    console.log("done")
})

function isAPIObject(obj) {
    if (obj.item) {
        return false;
    }
    if (obj.request && obj.response) {
        return true;
    }
}
function createAPIObject(schema, parent) {

    // console.log(schema);
    let API = {
        baseUrl: "https://api.paystack.co",
        path: "/transaction/initialize",
        method: "POST",
        params: [{
            parameter: "email",
            required: true,
            type: "String",
            description: "Lorem ipsum"
        }],
        api: "initialize",
        parent: "transaction"
    }
    try {
        API.baseUrl = "https://api.paystack.co/";
        API.path = schema.request.url.path.join('/');
        API.method = schema.request.method;
        API.parent = parent;
        API.api = '';

        //Format command name
        let name = schema.name.toLowerCase();
        if (name.includes(parent + 's')) {
            API.api = name.replace(parent + 's', '');
        } else if (name.includes(parent)) {
            API.api = name.replace(parent, '');
        } else {
            if (noOfWords(name) === 2) {
                name = name.replace(' ', '_');
                API.api = name;
            } else {
                let words = name.split(' ');
                let lastTwo = words[words.length - 2] + words[words.length - 1];
                if (lastTwo == parent) {
                    API.api = words[0];
                } else if (lastTwo == parent + 's') {
                    API.api = words[0];
                }
                else {
                    API.api = "****" + name
                }

            }
        }
        API.api = API.api.replace('  ', ' ');
        API.api = API.api.trim();
        if (noOfWords(API.api) > 1) {
            API.api = API.api.replace(/ /g, '_');
            API.api = "****" + API.api
        }


        //Get parameters
        API.params = [];
        if (API.method == "GET") {
            let query = schema.request.url.query;
            if (query) {

                query.forEach((param) => {
                    let _p = {
                        parameter: param.key,
                        description: param.description,
                        required: false
                    }
                    API.params.push(_p)
                })
            } else {
                console.log(API.parent + ' - ' + API.name, "Shoout!")
            }
        } else if (API.method == "POST" || API.method == "PUT") {
            // console.log(Object.keys(schema.request))
            if (schema.request.body) {


                let body = schema.request.body.urlencoded;
                if (body) {
                    body.forEach((param) => {
                        let _p = {
                            parameter: param.key,
                            description: param.description,
                            required: false
                        }
                        if (_p.description.toLowerCase().includes('required')) {
                            _p.required = true;
                        }
                        API.params.push(_p)
                    })
                } else {
                    console.log(API.parent + ' - ' + API.name, "Shoout!!")
                }
            } else {
                console.log(API.parent + ' - ' + API.name, "why not");
            }
        }


        //GET variables
        if(schema.request.url.variable){
            API.variables = schema.request.url.variable
        }
    } catch (err) {
        console.error(err)
    }

    return API;
}

function noOfWords(str) {
    return str.split(' ').length;
}


/*
Highlight - New phone, new merch and stuff, Tomilola's birthday weekend. We have BPOs now!
Lowlight - Fuel, I'm tired, but I don't feel like I did plenty work
*/