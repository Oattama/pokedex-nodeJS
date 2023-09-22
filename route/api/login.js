module.exports = {
  login: (app, header) => {
    app.post("/login", header, (req, res) => {
      const loginController = require("../../controllers/loginController");
      loginController.login(req, res);
    });
  },
};
