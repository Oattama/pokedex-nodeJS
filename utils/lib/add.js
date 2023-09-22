require("dotenv").config();
const bcrypt = require("bcrypt");
const random = require("./random");
const dbConnection = require("../../config/database");
const saltround = process.env.SALT;

module.exports = {
  addUser: (randomId, email, username, password, callback) => {
    var reStatus = "";

    bcrypt.genSalt(Number(saltround), (err, salt) => {
      if (err) {
        console.log("salt error");
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            console.log("hash error");
          } else {
            dbConnection.query(
              "INSERT INTO user (u_id, status, email, username, password) VALUES (?,1,?,?,?)",
              [randomId, email, username, hash],
              (err) => {
                if (err) {
                  reStatus = false;

                  callback(reStatus);
                } else {
                  reStatus = true;

                  callback(reStatus);
                }
              }
            );
          }
        });
      }
    });
  },
};
