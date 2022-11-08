const http = require("http");
const fs = require("fs");
const port = 2000;
let pathOption = "";

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        pathOption = "public/";
        break;
      case "/cars_page":
        req.url = "cars.html";
        pathOption = "public/";
        break;
      case "/cars":
        req.url = "cars.json";
        pathOption = "data/";
        break;
      case "/people":
        req.url = "people.json";
        pathOption = "public/scripts/";
        break;
      case "/js":
        req.url = "bundle.js";
        pathOption = "public/";
        break;
      case "/car_class":
        req.url = "car.js";
        pathOption = "public/scripts/";
        break;
    }
    console.log("pathOption: " + pathOption);
    let path = pathOption + req.url;
    console.log(path);
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, "localhost", () => {
    console.log("Server sudah berjalan, silahkan buka http://localhost:2000");
  });
