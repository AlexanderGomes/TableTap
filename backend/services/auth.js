const { createrestaurant } = require("../database/repository/restaurant");
const { createUser, findUserByEmail } = require("../database/repository/user");

const signIn = async (userInput) => {
  const { email, password } = userInput;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return "user not found";
    }
    
    if (user.password !== password) {
      return "wrong password";
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUp = async (userInput) => {
  const { name, email, password, isRestaurant } = userInput;
  let data;
  const isTaken = await findUserByEmail(email);

  if (isTaken) {
    return "email is taken";
  }

  try {
    if (isRestaurant) {
      data = await createrestaurant({ name, email, password });
      return data;
    }
    data = await createUser({ name, email, password });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  signUp,
  signIn,
};
