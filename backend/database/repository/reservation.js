const Reservation = require("../schemas/reservation");

const createReservation = async (resInfo) => {
  const { userId, restaurantId, tableId, partySize, time } = resInfo;
  const alreadExistent = await Reservation.findOne({
    userId: userId,
    restaurantId: restaurantId,
  });
  try {
    if (alreadExistent) {
      return "user already has reservation";
    }


    const reservation = new Reservation({
      userId,
      restaurantId,
      tableId,
      partySize: partySize,
      time: time,
    });

    const saved = reservation.save();
    return saved;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createReservation,
};
