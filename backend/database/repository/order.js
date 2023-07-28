const Order = require("../schemas/order");

const createOder = async (orderInfo) => {
  const { userId, restaurantId, tableId, cart } = orderInfo;
  try {
    const items = cart.items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    const order = new Order({
      userId,
      restaurantId,
      tableId,
      items,
      totalAmount: cart.totalAmount,
    });
    const saved = await order.save();
    return saved;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOder,
};
