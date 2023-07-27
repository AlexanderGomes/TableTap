const User = require("../schemas/user");

const createUser = async (userInput) => {
  const { name, email, password } = userInput;

  try {
    const user = new User({
      name,
      email,
      password,
    });
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};
