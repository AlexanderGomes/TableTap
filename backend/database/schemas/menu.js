const mongoose = require("mongoose");

const MenuItem = mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "restaurant",
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("menu", MenuItem);
