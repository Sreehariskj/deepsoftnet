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

// @get all items
const getItem = asyncHandler(async (req, res) => {
  try {
    const items = await Item.find({});

    res.json({ items });
  } catch (error) {
    console.log(error, "product controller get item error");
    res.status(500);
    throw new Error("Try again later");
  }
});
module.exports = { addItem, getItem };
