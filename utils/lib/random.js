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
};
