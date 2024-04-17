require('dotenv').config();
const ScrapingAntClient = require('@scrapingant/scrapingant-client');
const apiKey = process.env.SCRAPINGANT_API_KEY;



const client = new ScrapingAntClient({ apiKey: apiKey });

client.scrape('https://medium.com/illumination/5-habits-to-have-better-finances-than-99-of-people-55cd789bf399')
    .then(res => console.log(res))
    .catch(err => console.error(err.message));