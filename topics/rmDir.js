const http = require("http");
const fs=require("fs");
const port = 9000;
const dirName ="/home/administrator/Desktop/node-class-10Am/user";
const fileName="notes.pdf";
const app = http.createServer(function (req, res) {
      fs.rmdir(`${dirName}`,function(err,data){
        if(err){
            res.end(`${err}`);
        }
        else {
            res.end(`directory deleted ${dirName} successfully`);
        }
      });
});
app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
