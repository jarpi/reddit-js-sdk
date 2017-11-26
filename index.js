module.exports = function(opts){
    console.dir(opts)
    return require('./lib/RedditSdk.js')(opts)
}
