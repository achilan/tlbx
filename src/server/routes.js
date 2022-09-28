const fetch = require("node-fetch");
const express = require("express");
const Data = require("../resources/Data");
const routes = express.Router();
const csv = require("csvtojson");
const fetchData = async (url) => {
  let body;
  let response;
  response = await fetch(Data.ENDPOINT + url, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: Data.API_KEY },
  });
  body = await response.json();
  return body;
};
const fetchData2 = async (url) => {
  let body;
  let response;
  response = await fetch(Data.ENDPOINT + url, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: Data.API_KEY },
  });
  body = await response.text();
  return body;
};
routes.get("/files/data", (req, res) => {
  (async () => {
    var data = await fetchData(Data.GETALLFILE);
    var arrayn = [];
    var frontend = req.query.frontend;
    var filename = req.query.fileName;
    var lengthHeader = 0;
    for (i = 0; i < data.files.length; i++) {
      var url = Data.GETFILE + "/" + data.files[i];
      await fetchData2(url).then((stringdata) => {
        (async () => {
          await csv()
            .fromString(stringdata)
            .on("header", (header) => {
              lengthHeader = header.length;
            })
            .then((jsonObj) => {
              var formatArray = [];
              if (filename != null) {
                jsonObj = jsonObj.filter(function (el) {
                  return el.file == filename;
                });
              }
              var title = null;
              jsonObj.map((item) => {
                if (Object.keys(item).length == lengthHeader) {
                  var dataform = {};
                  title = item.file;
                  if (frontend != null) {
                    dataform = {
                      file: item.file,
                      text: item.text,
                      number: item.number,
                      hex: item.hex,
                    };
                  } else {
                    dataform = {
                      file: item.file,
                      text: item.text,
                      number: item.number,
                      hex: item.hex,
                    };
                  }
                  formatArray.push(dataform);
                }
              });
              if (formatArray.length > 0) {
                var pk = {
                  file: title,
                  lines: formatArray,
                };
                arrayn.push(pk);
              }
            });
        })();
      });
    }
    res.json(arrayn);
  })();
});
module.exports = routes;
