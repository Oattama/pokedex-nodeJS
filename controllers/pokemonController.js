require("dotenv").config();
const { default: fetch } = require("node-fetch");
const dbConnection = require("../config/database");
const pokemon = require("../file/pokemon");
const count = require("../utils/lib/count");

module.exports = {
  listPokemon: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 20;
    const calSkip = (page - 1) * size;
    let calPage = 0;
    let list = {};
    let data = {};
    const keyword = req.query.keyword;
    const type = req.query.type;
    if (keyword !== undefined || type !== undefined) {
      list = await count.filterPokemon(calSkip, size, keyword, type);
      calPage = Math.ceil(list.total / size);
      data = {
        currentPage: page,
        pages: calPage,
        currentCount: list.currentCount,
        totalCount: list.total,
        data: list.box,
      };
    } else {
      list = await count.countPokemon(calSkip, size);
      calPage = Math.ceil(pokemon.length / size);
      data = {
        currentPage: page,
        pages: calPage,
        currentCount: list.total,
        totalCount: pokemon.length,
        data: list.box,
      };
    }

    if (list.api == true) {
      try {
        res.json({ status: true, data });
      } catch (error) {
        res.json({ status: false, msg: "error" });
        console.log(error);
      }
    } else {
      res.json({ status: false });
    }
  },
  viewPokemon: async (req, res) => {
    const levelMove = [];
    const otherMove = [];
    let data = {};

    const api = await fetch(
      `${process.env.POKEMONAPI_HOST}/pokemon/${req.query.pokemonName}`
    );
    const pokeData = await api.json();

    for (let i = 0; i < pokeData.moves.length; i++) {
      let length = pokeData.moves[i].version_group_details.length - 1;
      if (
        pokeData.moves[i].version_group_details[length].level_learned_at !== 0
      ) {
        let move = {
          name: pokeData.moves[i].move.name,
          level:
            pokeData.moves[i].version_group_details[length].level_learned_at,
        };
        levelMove.push(move);
      } else {
        let move = {
          name: pokeData.moves[i].move.name,
          method:
            pokeData.moves[i].version_group_details[length].move_learn_method
              .name,
        };
        otherMove.push(move);
      }
    }
    //bubble Sort
    let temp = "";

    for (let i = 1; i < levelMove.length; i++) {
      for (let j = 0; j < levelMove.length - i; j++) {
        if (levelMove[j].level > levelMove[j + 1].level) {
          temp = levelMove[j];
          levelMove[j] = levelMove[j + 1];
          levelMove[j + 1] = temp;
        }
      }
    }

    data = {
      id: pokeData.id,
      name: pokeData.name,
      abilities: pokeData.abilities,
      base_experience: pokeData.base_experience,
      height: pokeData.height,
      weight: pokeData.weight,
      sprites: [
        {
          default: pokeData.sprites.other.home.front_default,
          shiny: pokeData.sprites.other.home.front_shiny,
        },
      ],
      stats: pokeData.stats,
      types: pokeData.types,
      moves: [
        {
          levelMove: levelMove,
          otherMove: otherMove,
        },
      ],
    };

    if (api.ok) {
      try {
        res.json({ status: true, data });
      } catch (error) {
        res.json({ status: false, msg: "error" });
      }
    } else {
      res.json({ status: false });
    }
  },
  addFavorite: async (req, res, decoded) => {
    const uId = decoded.uid;
    const pokeId = req.query.pokeId;
    const cmQuery = `SELECT * FROM favorite WHERE u_id = ?`;
    const cmInsert = `INSERT INTO favorite (u_id, poke_id) VALUES (?,?)`;
    const cmDelete = `DELETE FROM favorite WHERE u_id = ? AND poke_id = ?`;

    dbConnection.query(cmQuery, [uId], (err, result) => {
      if (err) {
        res.json({ status: false, msg: "error" });
      } else if (result.length == 0) {
        dbConnection.query(cmInsert, [uId, pokeId], (err) => {
          if (err) {
            res.json({ status: false, msg: "error" });
          } else {
            res.json({ status: true });
          }
        });
      } else {
        let checkDel = false;
        let delPoke = " ";
        for (let i = 0; i < result.length; i++) {
          if (result[i].poke_id == pokeId) {
            delPoke = pokeId;
            checkDel = true;
            break;
          } else {
            checkDel = false;
          }
        }
        if (checkDel !== true) {
          dbConnection.query(cmInsert, [uId, pokeId], (err) => {
            if (err) {
              res.json({ status: false, msg: "error" });
            } else {
              res.json({ status: true, msg: "add" });
            }
          });
        } else {
          dbConnection.query(cmDelete, [uId, pokeId], (err) => {
            if (err) {
              res.json({ status: false, msg: "error" });
            } else {
              res.json({ status: true, msg: "delete" });
            }
          });
        }
      }
    });
  },
  getFavorite: async (req, res, decoded) => {
    const uId = decoded.uid;
    const cmQuery = `SELECT poke_id FROM favorite WHERE u_id = ? ORDER BY poke_id ASC`;

    dbConnection.query(cmQuery, [uId], (err, results) => {
      if (err) {
        res.json({ status: false, err });
      } else {
        let list = [];
        for (let i = 0; i < results.length; i++) {
          list.push(results[i].poke_id);
        }
        const data = {
          list: list,
        };
        res.json({ status: true, data });
      }
    });
  },
  listFavorite: async (req, res, decoded) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 20;
    const calSkip = (page - 1) * size;
    let calPage = 0;
    let list = {};
    let data = {};
    const uId = decoded.uid;
    const cmQuery = `SELECT poke_id FROM favorite WHERE u_id = ? ORDER BY poke_id ASC`;

    dbConnection.query(cmQuery, [uId], async (err, result) => {
      const favorite = result;

      if (err) {
        res.json({ status: false, err });
      } else {
        list = await count.countFavorite(calSkip, size, favorite);
        calPage = Math.ceil(result.length / size);
        data = {
          currentPage: page,
          pages: calPage,
          currentCount: list.total,
          totalCount: favorite.length,
          data: list.box,
        };
      }

      if (list.api == true) {
        try {
          res.json({ status: true, data });
        } catch (error) {
          res.json({ status: false, msg: "error" });
          console.log(error);
        }
      } else {
        res.json({ status: false });
      }
    });
  },
};
/* 
exports.getRandomPokemon = async (req, res) => {
  const ranNum = (await Math.floor(Math.random() * (1154 - 1))) + 1;

  const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${ranNum}`);

  if (api.ok) {
    const data = await api.json();

    console.log(data);
    try {
      const info = {
        id: data.id,
        name: data.name,
        sprites: data.sprites.other.home.front_default,
      };

      res.json(info);
    } catch (error) {
      console.log(error);
    }
  }
};
 */
