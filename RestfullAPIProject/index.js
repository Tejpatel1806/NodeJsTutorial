const express = require("express");
const app = express();
const fs = require("fs");
const jsondata = require("./mockdata.json");

//aama aapde get all users ma e /api/users karsu to e JSON ma data aapse jyare /users karsu to e HTML ma data aapse

//middleware/plugins
//aapdo je body ma data aave che tene lavva mate aa plugins use thay ene middleware kehvay
//built in body parser middleware request ma je body aave tene parse karva mate
app.use(express.urlencoded({ extended: false }));

//custom middleware
//aa niche je che e custom middleware kehvay have te next() ne call kare che etle tena niche je middleware hase te call thase ane jo tena niche koi middleware nai hoy to te actual function ne call karse
//middleware che te req-res ne end pan kari sake che jo aapde niche na middleware ma res.end("hello"); aam lakhi daie to e tya thi j end kari dese te middleware2 jode java j nai de ane main function jode pan nai java de
//aapde middleware ma request ane response object ne change pan kari sakie chie ane te change badhe dekhase
//gana badha built in middleware pan che aapde teno sidho use kari sakie chie
app.use((req, res, next) => {
  console.log("middleware1 called");
  next();
});
app.use((req, res, next) => {
  console.log("middleware2 called");
  next();
});

app.get("/api/users", (req, res) => {
  res.setHeader("X-myname", "tejpatel"); //aane custom Header kehvay matlab aapde response na Header ma key-value pair add kari ,request na Header ma add karva mate aapde postman ma add kari saksu reuqest Header ma jai ne
  //content Type ne eva builtin Header che pan custom Header banavie tyare tema aagad name ma X lakhvanu like X-myname to developer ne khabar pade ke aa custom Header che em
  res.json(jsondata);
});

app.get("/users", (req, res) => {
  const html = `<ul>
    ${jsondata.map((data) => `<li>${data.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const userwithid = jsondata.find((user) => user.id === id);
  res.json(userwithid);
});

//niche ni line no matlab kevo thay ke jo /api/user/:id ni request aave ane e get hoy to get vadu callback execute thase jo e put hoy to put vadu callback execute thase jo e delete hoy to delete vadu callback execute thase
app
  .route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const userwithid = jsondata.find((user) => user.id === id);
    res.json(userwithid);
  })
  .put((req, res) => {})
  .delete((req, res) => {});

//aapde browser ma jai ne localhost:8000/api/usernew karsu to e cannot GET em batavse karan ke bydefault e GET request hoy aapde post karvani che to e aapde nai kari sakie hamna browser ma without data to ena mate aapde postman use karsu test karva mate
app.post("/api/usersnew", (req, res) => {
  //create a new entry in database
  const body = req.body;
  console.log("body", body);
  jsondata.push({ ...body, id: jsondata.length + 1 });
  fs.writeFile("./mockdata.json", JSON.stringify(jsondata), (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Data successfully write in database");
    }
  });
});

app.listen(8000, (req, res) => {
  console.log("Server is listening from port 8000");
});
