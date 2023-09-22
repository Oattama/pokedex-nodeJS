const { countItem } = require("../utils/lib/count");

module.exports = {
  listItems: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 20;
    const calSkip = (page - 1) * size;
    let calPage = 0;
    let list = {};
    let data = {};
    const keyword = req.query.keyword;
    const category = req.query.category;
    if (keyword !== undefined || category !== undefined) {
    } else {
      list = await countItem(calSkip, size);
      calPage = Math.ceil(2050 / size);
      data = {
        currentPage: page,
        pages: calPage,
        currentCount: list.total,
        totalCount: 2050,
        data: list.box,
      };
    }

    if (list.api !== false) {
      try {
        res.json({ status: true, data });
      } catch (err) {
        res.json({ status: false, msg: "error" });
      }
    } else {
      res.json({ status: false });
    }
  },
};
