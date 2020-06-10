const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.getHtml = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const get = async () => {
      try {
        return await axios.get("https://ncov2019.live/data/world");
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then(html => {
        let data = new Object();
        const $ = cheerio.load(html.data);
        const $bodyList = $("body div div div.col.col-lg-9.tables div.row div#container_world table tbody tr:nth-child(1)");
          data.confirmed = $($bodyList).find('td:nth-child(2)').text().replace(/\s/g,'').replace(/\n/g,''),
          data.death = $($bodyList).find('td:nth-child(6)').text().replace(/\s/g,'').replace(/\n/g,'')
        return data;
      })
      .then(res => response.send(res));
  });
});

exports.getData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const get = async () => {
      try {
        return await axios.get("https://ncov2019.live/data/world");
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then(html => {
        let data = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("body div div div.col.col-lg-9.tables div.row div#container_world table tbody");

        $bodyList.children("tr").each(function (i) {

          if (i > 0) {
            data.push({
              country: $(this).find('td:nth-child(1)').text().replace(/★/g, '').replace(/^\s+|\s+$/g,'').replace(/\n/g,''),
              confirmed: $(this).find('td:nth-child(2)').text().replace(/\s/g,'').replace(/\n/g,''),
              death: $(this).find('td:nth-child(6)').text().replace(/\s/g,'').replace(/\n/g,'')
            });
          }

        });
        return data;
      })
      .then(res => response.send(res));
  });
});

// exports.getDeath = functions.https.onRequest((request, response) => {
//   cors(request, response, () => {
//     const get = async () => {
//       try {
//         return await axios.get("https://www.worldometers.info/coronavirus");
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     get()
//       .then(html => {
//         let data = [];
//         const $ = cheerio.load(html.data);
//         const $bodyList = $("div.container div:nth-child(3) div.col-md-8 div.tab-content .active");

//         $bodyList.children("div.main_table_countries_div").children("table.table").children("tbody:nth-child(1)").children("tr").each(function (i) {

//           data[i] = ({
//             country: $(this).find('td:nth-child(1)').text(),
//             count: $(this).find('td:nth-child(4)').text() === " " ? "0" : $(this).find('td:nth-child(4)').text()
//           })
//         });
//         let a_data = data.slice(1, data.length);
//         return a_data;
//       })
//       .then(res => response.send(res));
//   });
// });

exports.getDomestic = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const get = async () => {
      try {
        return await axios.get("http://ncov.mohw.go.kr");
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then(html => {
        let data = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.wrap div.mainlive_container div.container div div.liveboard_layout div.liveNumOuter div.liveNum ul.liveNum");

        $bodyList.children("li").each(function (i) {
          data[i] = ({
            count: $(this).find('span').text()
          })
        });
        return data;
      })
      .then(res => response.send(res));
  });
});

exports.getDomestic2 = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const get = async () => {
      try {
        return await axios.get("https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98");
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then(html => {
        let data = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $(".graph_view");

        $bodyList.children(".box").each(function (i) {
          data[i] = ({
            count: $(this).find('.num').text()
          })
        });
        return data;
      })
      .then(res => response.send(res));
  });
});