const http = require("http");
const port = 9000;
var i = 0;
const app = http.createServer(function (req, res) {
  console.log("req", req.url);

  if (req.url == "/") {
    i = i + 1;
    res.end(`Welcome you are at / page, you changes route ${i} time!`);
  } else if (req.url == "/home") {
    i = i + 1;
    res.end(`Welcome you are at home page,you changes route ${i} time!`);
  } else if (req.url == "/about") {
    i = i + 1;
    res.end(`Welcome you are at about page,you changes route ${i} time!`);
  } else if (req.url == "/contact") {
    i = i + 1;
    res.end(`Welcome you are at contact page,you changes route ${i} time!`);
  } else if (req.url == "/login") {
    i = i + 1;
    res.end(`Welcome you are at login page,you changes route ${i} time!`);
  } else {
    i = i + 1;
    res.end(`url not found 404,you changes route ${i} time!`);
  }
});

app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
