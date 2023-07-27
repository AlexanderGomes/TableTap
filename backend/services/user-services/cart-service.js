const { createCart } = require("../../database/repository/cart");
const Product = require("../../database/schemas/menu");

const addToCart = async (cartInfo) => {
  const { productId, quantity, userId } = cartInfo;
  try {
    const cart = await createCart(userId);
    const product = await Product.findById(productId);

    const existingCartItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.items.push({
        productId: product._id,
        quantity,
        price: product.price,
      });
    }

    cart.totalAmount = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const savedCart = await cart.save();
    return savedCart;
  } catch (error) {
    throw new error(error.message);
  }
};

const removefromCart = async (cartInfo) => {
  const { productId, userId, quantity } = cartInfo;
  const cart = await createCart(userId);

  try {
    const existingCartItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    existingCartItem.quantity -= quantity;

    if (existingCartItem.quantity <= 0) {
      cart.items = cart.items.filter(
        (item) => item.productId.toString() !== productId
      );
    }

    cart.totalAmount = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    const savedCart = await cart.save();
    return savedCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addToCart,
  removefromCart,
};
