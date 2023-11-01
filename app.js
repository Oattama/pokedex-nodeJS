const express = require("express");

const app = express();

const parser = require("body-parser");

const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(parser.json());

app.use(cors());

const header = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.headers.authorization !== process.env.HEADER) {
    return res.send("No Connect");
  }
  next();
};

const auth = (req, res, next) => {
  const header = req.headers["authorization"];

  if (header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    return res.send("User Not Authentication");
  }
};

//function run every month
const update = require("./utils/lib/update");
update.updatePokemon();

const random = require("./utils/lib/random");
random.randomPokemon();

// service
const pokemon = require("./route/api/pokemon");
pokemon.pokemon(app, header, auth);

const item = require("./route/api/item");
item.item(app, header);

const register = require("./route/api/register");
register.register(app, header);

const login = require("./route/api/login");
login.login(app, header);

const user = require("./route/api/user");
user.user(app, auth);

app.listen(port, () =>
  console.log(`Server is running on ${port}, http://localhost:${port}`)
);
