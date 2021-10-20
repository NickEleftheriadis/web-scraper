const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://kounelis.com.gr/hlektrika-ergaleia/tribeia.html";

axios(url)
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)
    const products = []
    $('.item-info', html).each(function () {
        const title = $(this).find('a').attr('title')
        const url = $(this).find('a').attr('href')
        products.push({
          title,
          url,
        })
      })
    
    console.log(products)
  })
  .catch((err) => console.log(err))

app.listen(PORT, () => console.log("server running on port 8000"))

