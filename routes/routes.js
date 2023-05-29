const express = require("express");
const app = express();
const router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['description','ht:picture', 'ht:picture_source', 'ht:news_item'],
  }
});

let trends = [];
let newsKeywords = [];
let countryLocation;

const requestTime = (async (req, res, next) => {
  req.requestTime = await Date.now();
  next();
})
  
// const googleTrends = (async (req, res, next) => {
//   let feed = await parser.parseURL('https://trends.google.com/trends/trendingsearches/daily/rss?geo=US');

//   console.log('feed: ', feed);

//   //setTimeout(() => {
//     feed.items.forEach(item => {
//       trends.push(item.title);
//     });
    
//     trends.forEach(word => {
//         let words = word.split(' ').join('+');
//         newsKeywords.push(words);
//     //}, 1000);
//   });

//   next();
// });

app.use(requestTime);
//app.use(googleTrends);


// (async () => {
//     let feed = await parser.parseURL('https://trends.google.com/trends/trendingsearches/daily/rss?geo=GB');
//     trends.push(feed);
//     //let feedtext = feed.toString();
//     //let jsonData = await xmlParser.toJson(feedtext, options);
    
//     //console.log(feed);
    
//     // feed.items.forEach(item => {
//     //   trends.push({title: item.title, description: item.description, link: item.link, pubDate: item.pubDate});
//     // });
    
//     // trends.forEach(word => {
//     //     let words = word.split(' ').join('+');
//     //     newsKeywords.push(words);
//     // })
//   })();



  router.route('/trending/:country_code').get(async (req, res) => {
    let feed = await parser.parseURL(`https://trends.google.com/trends/trendingsearches/daily/rss?geo=${req.params.country_code}`);
    res.status(200).json({response : 'success', requested: req.requestTime, data: feed});
  })

module.exports = router;