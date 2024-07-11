const http = require("http");
const fs = require("fs");
const port = 9000;
const dirName = "/home/administrator/Desktop/node-class-10Am/user";
const fileName = "user.js";
const app = http.createServer(function (req, res) {
  fs.readdir(`${dirName}`, function (err, files) {
    if (err) {
      res.end(`${err}`);
    } else {
      files.forEach((file) => {
        fs.unlink(`${dirName}/${file}`, function (err, data) {
          if (err) {
            res.end(`${err}`);
          }
        });
      });
      fs.rmdir(`${dirName}`, function (err, data) {
        if (err) {
          res.end(`${err}`);
        } else {
          res.end(`directory deleted ${dirName} successfully`);
        }
      });
    }
  });
});
app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
