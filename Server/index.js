const http = require("http");
const fs = require("fs");
const url = require("url");
//user aapda server par request kare tyare eni date ane time aapde log.txt file ma store karavie chie
//req object contains all the information about request like ip address ,user name
//req object contains all the meta data about request
//whenever any request is coming the call back function that we provide to the createServer is executed.
const myserver = http.createServer((req, res) => {
  // console.log(req.headers);

  //aapde jo koi query parameter mokalsu like localhost:8000/about?name=tej to aama req.url ma /about?name=tej aavse etla mate aapde niche if ma req.url==="/about" aam na lakhi sakie ena mate aapde url ek package che eno use karsu tene aapde npm i url kari ne install kari saksu
  console.log(req.url);

  const log = ` Time is:- ${new Date().toLocaleDateString()} ,URL is:- ${
    req.url
  },Methos is:- ${req.method}  New Request Received\n`;
  //aavu(niche mujab) karva thi aapdi req.url ne parse kari dese ane ene print karai ne tame badhi value joi sako cho
  //ane second parameter ma aapde true lakhyu che eno matlab aapde query parameter ne pan parse karavie chie
  const parsedata = url.parse(req.url, true);
  console.log(parsedata);
  if (parsedata.pathname === "/") {
    fs.appendFile("./log.txt", log, (err) => {
      res.end("hello from server main");
    });
  } else if (parsedata.pathname === "/about") {
    const name = parsedata.query.name;
    console.log(name);
    fs.appendFile("./log.txt", log, (err) => {
      res.end(`hello from server about and name is ${name}`);
    });
  } else {
    fs.appendFile("./log.txt", log, (err) => {
      res.end("page not found");
    });
  }

  console.log(" New Request Received");
  //res.end() kari aapde response aapyo reuqest ne te page par dekhase
});

//server 8000 port par listen karse ane callback function che te jo server start thai jase to e execute thay jase
myserver.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is listening from port 8000");
  }
});
