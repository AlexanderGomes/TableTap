const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "restaurant",
    },
    tableNumber: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "reservation",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("table", tableSchema);
