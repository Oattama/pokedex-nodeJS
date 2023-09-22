module.exports = {
  item: (app, header) => {
    app.get("/listItems", header, (req, res) => {
      const itemController = require("../../controllers/itemController");
      itemController.listItems(req, res);
    });
  },
};
