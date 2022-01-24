const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now(),
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
