const { findCart } = require("../../database/repository/cart");
const { createOder } = require("../../database/repository/order");
const { createReservation } = require("../../database/repository/reservation");

const checkOut = async (paymentInfo) => {
  const { userId, restaurantId, tableId, partySize, time } = paymentInfo;
  const cart = await findCart(userId);

  try {
    const order = await createOder({ userId, restaurantId, tableId, cart });
    if (order) {
      const reservation = await createReservation({ userId, restaurantId, tableId, partySize, time,});
      return reservation;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  checkOut,
};
