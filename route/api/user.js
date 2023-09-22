const jwt = require("jsonwebtoken");

const scToken = process.env.SECRET;

module.exports = {
  user: (app, auth) => {
    app.get("/getUser", auth, (req, res) => {
      jwt.verify(req.token, scToken, (err, decoded) => {
        if (!err) {
          const userController = require("../../controllers/userController");
          userController.getUser(req, res, decoded);
        } else {
          res.send(" User not Authentication! ");
        }
      });
    });
  },
};
