const Restaurant = require("../schemas/restaurant");

const createrestaurant = async (userInput) => {
  const { name, email, password } = userInput;

  try {
    const restaurant = new Restaurant({
      name,
      email,
      password,
    });
    const savedRestaurant = await restaurant.save();
    return savedRestaurant;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createrestaurant,
};
