const {
  addToCart,
  removefromCart,
} = require("../services/user-services/cart-service");

module.exports = (app) => {
  app.post("/cart/add", async (req, res) => {
    const { userId, quantity, productId } = req.body;
    try {
      const cart = await addToCart({ productId, quantity, userId });
      res.json(cart);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  app.post("/cart/remove", async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      const cart = await removefromCart({ productId, userId, quantity });
      res.json(cart);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
