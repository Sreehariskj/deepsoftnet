const Item = require("../models/itemModel");
const asyncHandler = require("express-async-handler");

// @create product
const addItem = asyncHandler(async (req, res) => {
  const { title, price, quantity, category } = req.body;

  const item = await Item.create({
    title,
    price,
    quantity,
    category,
  });

  if (item) {
    res.status(201).json({
      _id: item._id,
      title: item.title,
      price: item.price,
      quatity: item.quantity,
      category: item.category,
    });
  } else {
    res.status(400);
    throw new Error("Add product failed");
  }
});

module.exports = { addItem };
