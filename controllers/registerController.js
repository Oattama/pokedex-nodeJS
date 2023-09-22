require("dotenv").config();

const dbConnection = require("../config/database");
const add = require("../utils/lib/add");
const random = require("../utils/lib/random");

module.exports = {
  register: (req, res) => {
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password;

    if (username != null) {
      const u_ran = random.randomid(18);
      const cmQuery = `SELECT * FROM user WHERE email = ?`;

      dbConnection.query(
        "SELECT * FROM user WHERE u_id = ?",
        [u_ran],
        (err, u_id) => {
          if (err) {
            console.log("check error");
          }
          if (u_id.length > 0) {
            const new_ran = random.randomid(18);
            dbConnection.query(cmQuery, [email], (err, result) => {
              if (result.length !== 1) {
                add.addUser(new_ran, email, username, password, (result) => {
                  res.json({ status: result });
                });
              } else {
                res.json({ status: false, msg: "This email is already used" });
              }
            });
          } else {
            dbConnection.query(cmQuery, [email], (err, result) => {
              if (result.length !== 1) {
                add.addUser(u_ran, email, username, password, (result) => {
                  res.json({ status: result });
                });
              } else {
                res.json({ status: false, msg: "This email is already used" });
              }
            });
          }
        }
      );
    }
  },
};
