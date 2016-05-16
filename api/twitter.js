var Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
  app_only_auth: true
});

module.exports.searchTweets = function(req, res) {
  T.get('search/tweets', {q: '%23' + req.query.tag + ' since:2016-05-11', count: 4}, function (err, data, response) {
    if (err) {
      res.send(err);
    }
    res.json({data: data.statuses});
  });
};