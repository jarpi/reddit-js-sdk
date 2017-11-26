const request = require('request')

const sendRequest = ( opts ) => {
    return new Promise((resolve, reject) =>{
        if (!opts.headers) reject('request:missing_headers')
        request(opts, (error, response, body) => {
            if (error) return reject(error)
            let res;
            try {
                res = JSON.parse(body)
            } catch (e) {
                return reject(e)
            }
            if (res.error) return reject(res)
            return resolve(res)
        })
    })
}

module.exports = sendRequest
