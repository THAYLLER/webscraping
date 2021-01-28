const axios = require('axios');
const cheerio = require('cheerio');


async function scraping() {
  const base_url = "https://gcn.net.br/";

  const response = await axios.get(`${base_url}`);
  const $ = cheerio.load(response.data);

  const data = [];

  $('.titulo h1').each((i, element) => {
    if($(element).text() != undefined)  
      data.push($(element).text());
  })
  console.log(data)
  
}

scraping();
