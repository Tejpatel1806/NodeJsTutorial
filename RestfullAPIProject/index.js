const express = require("express");
const app = express();
const fs = require("fs");
const jsondata = require("./mockdata.json");

//aama aapde get all users ma e /api/users karsu to e JSON ma data aapse jyare /users karsu to e HTML ma data aapse

//middleware/plugins
//aapdo je body ma data aave che tene lavva mate aa plugins use thay ene middleware kehvay
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
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
