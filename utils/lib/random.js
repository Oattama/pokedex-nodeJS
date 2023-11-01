const pokemon = require("../../file/pokemon");

module.exports = {
  randomid: (length) => {
    var userId = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      userId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return userId;
  },

  randomPokemon: () => {
    const ranNum = Math.floor(Math.random() * (pokemon.length - 1)) + 1;
    return ranNum;
  },
};
