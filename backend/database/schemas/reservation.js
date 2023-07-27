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
    customerName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    partySize: {
      type: Number,
      required: true,
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "table",
      required: true,
    },
    time: String,
  },
  { timestamps: true }
);

const Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;
