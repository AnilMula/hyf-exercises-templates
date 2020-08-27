const fs = require("fs");
const path = require("path");
const { isBuffer } = require("util");

//create folder
/* fs.mkdir(path.join(__dirname, "./test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created");
});
 */
//create and write to file
fs.writeFile(
  path.join(__dirname, "./test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("file cfreated and written");
  }
);

// read file
fs.readFile(
  path.join(__dirname, "./test", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
