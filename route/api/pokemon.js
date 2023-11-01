require("dotenv").config();
const jwt = require("jsonwebtoken");
const scToken = process.env.SECRET;

module.exports = {
  pokemon: (app, header, auth) => {
    app.get("/pokemon", header, (req, res) => {
      const pokemonController = require("../../controllers/pokemonController");
      pokemonController.listPokemon(req, res);
    });
    app.get("/viewPokemon", header, (req, res) => {
      const pokemonController = require("../../controllers/pokemonController");
      pokemonController.viewPokemon(req, res);
    });
    app.get("/randomPokemon", (req, res) => {
      const pokemonController = require("../../controllers/pokemonController");
      pokemonController.randomPokemon(req, res);
    });
    app.post("/addFavPokemon", auth, (req, res) => {
      jwt.verify(req.token, scToken, (err, decoded) => {
        if (!err) {
          const pokemonController = require("../../controllers/pokemonController");
          pokemonController.addFavorite(req, res, decoded);
        } else {
          res.send(" User not Authentication! ");
        }
      });
    });
    app.get("/getFavPokemon", auth, (req, res) => {
      jwt.verify(req.token, scToken, (err, decoded) => {
        if (!err) {
          const pokemonController = require("../../controllers/pokemonController");
          pokemonController.getFavorite(req, res, decoded);
        } else {
          res.send(" User not Authentication! ");
        }
      });
    });
    app.get("/listFavPokemon", auth, (req, res) => {
      jwt.verify(req.token, scToken, (err, decoded) => {
        if (!err) {
          const pokemonController = require("../../controllers/pokemonController");
          pokemonController.listFavorite(req, res, decoded);
        } else {
          res.send(" User not Authentication! ");
        }
      });
    });
  },
};
