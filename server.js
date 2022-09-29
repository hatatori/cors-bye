let http = require("http");

//localhost:8080/?link=https://api.gpa.digital/pa/categoria/ecom/alimentos?storeId=461&qt=20&s=&ftr=&p=1&rm=&gt=grid&isClienteMais=true
//localhost:8080/?link=https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    try {
      fetch(req.url.split("?link=")[1])
        .then((e) => e.json())
        .then((e) => res.end(JSON.stringify(e.content, null, e)));
    } catch (e) {
      res.end("Erro");
    }
  })
  .listen(8080);
