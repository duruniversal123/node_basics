const http = require("http");
const fs=require("fs");
const port = 9000;
const dirName ="/home/administrator/Desktop/node-class-10Am/user";
const fileName="notes.pdf";
const app = http.createServer(function (req, res) {
      fs.readdir(`${dirName}`,function(err,files){
        if(err){
            res.end(`${err}`);
        }
        else {
            console.log("files: ",files);
            res.end(`total files are ${files.length}`);
        }
      });
});
app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
