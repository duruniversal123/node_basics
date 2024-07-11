const http = require("http");
const fs=require("fs");
const port = 9000;
const dirName ="/home/administrator/Desktop/node-clas-10Am";
const fileName="notes.pdf";
const app = http.createServer(async function (req, res) {
      const data= fs.writeFileSync(`${dirName}/${fileName}`,"hey sadfsfsdfsdfsdfsdfsdfsfsdf, Ans: we are fine.");
      console.log("data: ",data);
});
app.listen(port, function () {
  console.log(`server listening on http://localhost:${port}`);
});
