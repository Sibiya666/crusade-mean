const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {},
  list: [{
      name: {
          type: String,
      },
      quantity: {
          type: Number,
      },
      cost: {
          type: Number,
      }
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
