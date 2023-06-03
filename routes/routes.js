const express = require("express");
const app = express();

const router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['description','ht:picture', 'ht:picture_source', 'ht:news_item'],
  }
});

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  '77e6a56444b50c0566f3553ad62e1c32',
  '92149bc982866de5f94075411b29024c',
);

// const requestTime = (async (req, res, next) => {
//   req.requestTime = await Date.now();
//   next();
// })

// app.use(requestTime);
//app.use(googleTrends);



  router.route('/trending/:country_code').get(async (req, res) => {
    let feed = await parser.parseURL(`https://trends.google.com/trends/trendingsearches/daily/rss?geo=${req.params.country_code}`);
    res.status(200).json({response : 'success', data: feed});
  });

  router.route('/sendmail').post((req, res) => {
    const request = mailjet.post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "info@vinayone.com",
            "Name": req.body.name
          },
          "To": [
            {
              "Email": "inbox@vinayone.com",
              "Name": "VINAY KUMAR"
            }
          ],
          "Subject": `Contact from ${req.body.name}`,
          "HTMLPart": `<h3>Dear Vinay,</h3><br />You have received a contact!<br />From: ${req.body.email}<br />Name: ${req.body.name}<br />Message: ${req.body.message}`
        }
  ]
})
request.then((result) => {
    res.json({message: result.body});
  })
  .catch((err) => {
    console.log(err.statusCode);
  })

  });

module.exports = router;