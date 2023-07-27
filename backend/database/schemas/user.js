const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "reservation",
    },
  ],
});

module.exports = mongoose.model("user", User);
