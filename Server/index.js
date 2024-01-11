const http = require("http");
const fs = require("fs");
//user aapda server par request kare tyare eni date ane time aapde log.txt file ma store karavie chie
//req object contains all the information about request like ip address ,user name
//req object contains all the meta data about request
//whenever any request is coming the call back function that we provide to the createServer is executed.
const myserver = http.createServer((req, res) => {
  console.log(req.headers);
  const log = `${Date.now()} : New Request Received\n`;
  if ((req.url === "/")) {
    fs.appendFile("./log.txt", log, (err) => {
      res.end("hello from server main");
    });
  } else if ((req.url === "/about")) {
    fs.appendFile("./log.txt", log, (err) => {
      res.end("hello from server about");
    });
  }

  console.log(" New Request Received");
  //res.end() kari aapde response aapyo reuqest ne
});

//server 8000 port par listen karse ane callback function che te jo server start thai jase to e execute thay jase
myserver.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is listening from port 8000");
  }
});
