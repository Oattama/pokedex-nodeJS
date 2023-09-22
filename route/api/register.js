module.exports = {
  register: (app, header) => {
    app.post("/register", header, (req, res) => {
      const registerController = require("../../controllers/registerController");
      registerController.register(req, res);
    });
  },
};
