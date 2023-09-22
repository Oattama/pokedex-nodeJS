const dbConnection = require("../config/database");

module.exports = {
  getUser: (req, res, decoded) => {
    const uId = decoded.uid;
    const cmQuery = `SELECT u_id, username FROM user WHERE u_id = ?`;

    dbConnection.query(cmQuery, [uId], (err, results) => {
      if (err) {
        res.json({ status: false, err });
      } else {
        const result = results[0];
        data = {
          uId: result.u_id,
          username: result.username,
        };
        res.json({ status: true, data });
      }
    });
  },
};
