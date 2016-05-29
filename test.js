var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('39cdf11c905d3f439ad717cc68f2f6f772c17300');
alchemy.emotions('I prithee, Tom, beat Cut\'s saddle, put a few flocksin the point; poor jade, is wrung in the withers outof all cess.', {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/html-api-1 for format of returned object
  console.log(response);
  var emotions = response.docEmotions;

  // Do something with data
});
