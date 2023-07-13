import 'dotenv/config';

import { Client } from 'twitter-api-sdk';

const twitterClient = new Client(process.env.TWITTER_TOKEN);

async function main() {
  const tweet = await twitterClient.tweets
    .findTweetById('1672270630266306569')
    .then(({ data }) => {
      console.log('tweet: ', data?.text);
    })
    .catch((e) => {
      console.log('e: ', e);
    });
}

main();
