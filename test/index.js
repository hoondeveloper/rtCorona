const axios = require("axios");
const cheerio = require("cheerio");

const get = async () => {
  try {
    return await axios.get("https://www.worldometers.info/coronavirus");
  } catch (error) {
    console.error(error);
  }
};

get()
  .then(html => {
    let data = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.container div:nth-child(2) div.col-md-8 div.content-inner");

    $bodyList.children("div#maincounter-wrap").each(function (i, elem) {
      data[i] = {
        title: $(this).find('div.maincounter-number span').text()
      };
    });
    $bodyList.children("div.table-responsive").children("table.table").then(function () {
      data[3] = ($(this).text())
    });
    return data;
  })
  .then(res =>
    console.log(res));