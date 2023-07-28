const Cart = require("../schemas/shoppingCart");

const findCart = async (userId) => {
  try {
    let cart;
    const findCart = await Cart.findOne({ userId: userId });
    if (!findCart) {
      const create = new Cart({
        userId: userId,
        items: [],
        totalAmount: 0,
      });
      cart = await create.save();
      return cart;
    }
    cart = findCart;
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  findCart,
};
