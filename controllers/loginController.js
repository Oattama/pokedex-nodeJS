require("dotenv").config();
const dbConnection = require("../config/database");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var scToken = process.env.SECRET;

module.exports = {
  login: (req, res) => {
    dbConnection.query(
      "SELECT * FROM user WHERE email = ?",
      [req.query.email],
      (err, user) => {
        if (err) {
          res.json({ status: "error", msg: err });
          return;
        }
        if (user.length == 0) {
          res.json({ status: "error", msg: "User not found!!" });
          return;
        } else {
          bcrypt.compare(
            req.query.password,
            user[0].password,
            (err, isLogin) => {
              if (isLogin) {
                var Token = jwt.sign(
                  { uid: user[0].u_id, username: user[0].username },
                  scToken,
                  {
                    expiresIn: "1d",
                  }
                );
                const data = {
                  uId: user[0].u_id,
                  username: user[0].username,
                };
                res.json({ status: true, Token, data });
              } else {
                res.json({ status: false, msg: "Wrong password!!" });
              }
            }
          );
        }
      }
    );
  },
};
