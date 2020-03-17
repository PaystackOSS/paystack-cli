
const axios = require('axios');
const instance = axios.create({
    baseURL: 'https://api.paystack.co',
    timeout: 5000,
    headers: {'Authorization': 'Bearer sk_test_02df9413ed474f26fd3e4ba3a2289cff3f6b39ba'}
  });
module.exports = {
    fetchx(n=5){
       
        return new Promise((resolve, reject)=>{
            instance.get('/transaction?perPage='+n).then((response)=>{
                resolve(response.data.data)
            }).catch((e)=>{
                reject(e.response.data.data.message)
            })
        })

    }
}