module.exports = {
    bakery: {
        name: 'Bakerr',
        description: 'Lorem ipsum dolor sit amet',
        git:'https://github.com/lukman008/Bakerr-Pay.git',
        config: {
            path:'config.js', // this should be the full path of where the file should be,
            model: {
                logo: {
                    type: String,
                    required: false,
                    default: '',
                    description: ''
                },
                title: {
                    type: String,
                    default: '',
                    required: false,
                    description: ''
                },
                tagline: {
                    type: String,
                    required: false,
                    default: '',
                    description: ''
                },
                primaryColor: {
                    type: String,
                    required: false,
                    default: '',
                    description: 'Lorem ipsum dolor sit amet'
                },

            }
        }
    },
    gift_store:{
        name: 'sample-gift-store',
        description: 'Lorem ipsum dolor sit amet',
        git: 'https://github.com/PaystackOSS/sample-gift-store',
        config:{}
    }
}