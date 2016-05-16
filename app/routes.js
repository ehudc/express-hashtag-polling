// app/router.js
var path = require('path');
var twitter = require('../api/twitter');

module.exports = function(router) {
  //.post(function(req,res) { console.log("GETTING TWEETS"); twitter.searchTweets(req,res); })


  router.route('/twitter').get(function(req, res) {
    //console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    twitter.searchTweets(req, res)
  });
  router.route('*').get(function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') }); // load our public/index.html file
  });

};