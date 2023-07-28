const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "restaurant",
    },
    partySize: {
      type: Number,
      required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "table",
      required: true,
    },
    time: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("reservation", reservationSchema);
