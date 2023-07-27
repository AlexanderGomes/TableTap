const mongoose = require("mongoose");

const Restaurant = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: String,
  backgroundPicture: String,
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
});

module.exports = mongoose.model("restaurant", Restaurant);
