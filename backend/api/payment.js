const { checkOut } = require("../services/user-services/payment-service");

module.exports = (app) => {
  app.post("/checkout", async (req, res) => {
    const { userId, restaurantId, tableId, partySize, time } = req.body;
    try {
      const order = await checkOut({
        userId,
        restaurantId,
        tableId,
        partySize,
        time,
      });
      res.json(order);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
