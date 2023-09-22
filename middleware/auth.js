var jwt = require("jsonwebtoken");
const dbConnection = require("../config/database");
const scToken = process.env.SECRET;

exports.auth = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, scToken);
  } catch {
    res.json({ status: "error", msg: err });
  }
  const username = JSON.parse(JSON.stringify(decoded.username));
  if (username != null) {
    dbConnection.query(
      "SELECT u_id, name FROM user WHERE username = ?",
      [username],
      (err, result) => {
        if (err) {
          res.json({ status: "error", msg: err });
        } else {
          res.json({ status: "ok", result });
        }
      }
    );
  }
};
