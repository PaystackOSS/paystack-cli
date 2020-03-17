module.exports = {
    list: {
        endpoint: '/transactions',
        method:'GET',
        allowedFlags: [{
            flag: '-n',
            type: Number,
            required: false
        },
        {
            flag: '--customer',
            type: String,
            required: false
        }, {
            flag: '--status',
            type: String,
            required: false
        }, {
            flag: '--from',
            type: String,
            required: false
        }, {
            flag: '--to',
            type: String,
            required: false
        },]
    },
    verify: {

    }
}