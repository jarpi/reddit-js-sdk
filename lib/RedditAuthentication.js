const sendRequest = require('./SendRequest.js')
const config = require('../.config.json')
let token = null;
let credentials = null;

const getAccessToken = () => {
  return new Promise((resolve,reject) => {
    if (token && token.access_token) return resolve(token)
    return resolve(authenticate())
  })
}

const setToken = retrievedToken => {
  token = retrievedToken
  return retrievedToken
}

const authenticate = () => {
  const userName = credentials.userName
  const pwd = credentials.password
  const grantType = 'password'
  const clientId = credentials.clientId
  const secret = credentials.clientSecret
  const apiUrl = config.authBaseUrl + config.authEndpoint
  const userAgent = eval(config.defaultUserAgent)

  const opts = {
      'method': 'post',
      'auth': {
          'user': clientId,
          'password': secret
      },
      'url': apiUrl,
      'form': {
          'grant_type': grantType,
          'username': userName,
          'password': pwd

      },
      'headers': {
          'User-Agent': userAgent
      }
  }

  return sendRequest(opts)
  .then(setToken)
}

module.exports = (opts) => {
  credentials = opts;
  return {
    getToken: getAccessToken,
    rebuildToken: authenticate
  }
}
