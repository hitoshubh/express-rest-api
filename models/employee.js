const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  experiance: {
    type: String,
    enum: {
      values: ["Low", "Mid", "High"],
    },
  },
});

module.exports = mongoose.model("Employee", empSchema);
