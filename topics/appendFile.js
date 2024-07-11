const http = require("http");
const fs=require("fs");
const port = 9000;
const dirName ="/home/administrator/Desktop/node-class-10Am";
const fileName="notes.pdf";
const app = http.createServer(function (req, res) {
      fs.appendFile(`${dirName}/${fileName}`,"\n we are from indore, (M.P.)",function(err,data){
        if(err){
            res.end(`${err}`);
        }
        else {
            res.end(`file data fetched successfully and data is ${data}`);
        }
      });
});
app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
