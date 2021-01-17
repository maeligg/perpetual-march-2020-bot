require('dotenv').config();
const TwitterClient = require('twitter-api-client').TwitterClient;
const dayjs = require('dayjs');

const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

const status = `Today is March ${dayjs().diff('2020-03-01', 'days')}, 2020`;

twitterClient.tweets.statusesUpdate({status})
  .catch(err => console.log(err));