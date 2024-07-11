const http = require("http");
const port = 9000;
const app = http.createServer(function (req, res) {
  const name = "durgesh";
  res.write(`hello ${name}!`);
  res.end();
});

app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
