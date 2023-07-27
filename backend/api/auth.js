const { signUp, signIn } = require("../services/auth");
const Menu = require("../database/schemas/menu");
const Table = require("../database/schemas/table");

module.exports = (app) => {
  app.post("/signup", async (req, res) => {
    try {
      const { name, email, password, isRestaurant } = req.body;
      const data = await signUp({
        name,
        email,
        password,
        isRestaurant,
      });
      return res.json(data);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await signIn({
        email,
        password,
      });
      return res.json(data);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  // personal use to add menu items, delete later
  app.post("/menu", async (req, res) => {
    try {
      const menu = new Menu(req.body);
      const savedMenu = await menu.save();
      res.json(savedMenu);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  // personal use to add menu items, delete later
  app.post("/table", async (req, res) => {
    try {
      const table = new Table(req.body);
      const savedtable = await table.save();
      res.json(savedtable);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
