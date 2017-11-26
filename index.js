const opts = {
    userName: process.env.BOT_USERNAME,
    password: process.env.BOT_USERPWD,
    clientId: process.env.BOT_CLIENTID,
    clientSecret: process.env.BOT_SECRET
}
const redditClient = require('./lib/RedditSdk.js')(opts)
const queryParams = {'limit': 100}
redditClient.getProgrammingRedditPosts(queryParams)
.then(v => {console.dir(v)})
    .catch(e => {console.dir(e)})
module.exports = redditClient
