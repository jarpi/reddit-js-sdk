const mocha = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const should = chai.should()
const opts = {
        userName: process.env.BOT_USERNAME,
        password: process.env.BOT_USERPWD,
        clientId: process.env.BOT_CLIENTID,
        clientSecret: process.env.BOT_SECRET
    }
const redditClient = require('../../index.js')(opts)

describe('Basic Request', function(){
    it('Query /r/programming.json', function(done) {
        const queryParams = {'limit': 100}
        redditClient.getProgrammingRedditPosts(queryParams).should.be.fulfilled
        .notify(done)
    })
})

