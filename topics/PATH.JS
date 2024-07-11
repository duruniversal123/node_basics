const path=require("path");

const base=path.basename("path/user/hello/durgesh");

console.log("base",base);

const dirName=path.dirname("user/name.js");

console.log("dirName",dirName);

const extName=path.extname("user/name.ts");

console.log("extName",extName);

const joinPath=path.join("user","hello","name.ts");

console.log("joinPath",joinPath);

const pathObj={dir:"user",base:"name.js"}

const newPath=path.format(pathObj);

console.log("newPath",newPath);//user/name.js
