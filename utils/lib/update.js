require("dotenv").config();
const fs = require("fs");
const pokemon = require("../../file/pokemon");
const schedule = require("node-schedule");
const path = require("path");
const util = require("util");

module.exports = {
  updatePokemon: async () => {
    schedule.scheduleJob("0 0 0 1 * * ", async () => {
      const api = await fetch(`${process.env.POKEMONAPI_HOST}/pokemon`);

      const data = await api.json();

      const new_data = data.count - 275;

      if (api.ok) {
        try {
          if (pokemon.length < new_data) {
            let arrPokemon = [];
            let typePokemon = {};

            for (let i = 1; i <= new_data; i++) {
              const apiPoke = await fetch(
                `${process.env.POKEMONAPI_HOST}/pokemon/${i}`
              );

              const pokemon = await apiPoke.json();
              //loop slot type
              for (let j = 0; j < pokemon.types.length; j++) {
                typePokemon[`slot${pokemon.types[j].slot}`] =
                  pokemon.types[j].type.name;
              }

              arrPokemon.push({
                id: pokemon.id,
                name: pokemon.name,
                type: typePokemon,
              });
              //clear Obj
              typePokemon = {};
            }

            //writeFile
            var file = fs.createWriteStream(
              path.join(__dirname + "/../../file/pokemon.js")
            );

            file.on("error", (err) => {
              console.log(err);
            });

            file.write(`const pokemon = [ \r\n`);
            arrPokemon.forEach((value) =>
              file.write(util.inspect(value) + "," + "\r\n")
            );

            file.write(`]; \r\n \r\n module.exports = pokemon;`);
          } else {
            console.log("pokemon is already uptodate");
          }
        } catch (error) {
          console.log("updatePokemon error!!!");
        }
      }
    });
  },
};
