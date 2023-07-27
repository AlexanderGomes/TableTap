const mongoose = require("mongoose");

const Restaurant = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  profilePicture: String,
  backgroundPicture: String,
  description: String,
  upvote: Number,
  downvote: Number,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "address",
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "menu",
  },
  tables: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "tables",
  },
});

module.exports = mongoose.model("restaurant", Restaurant);
