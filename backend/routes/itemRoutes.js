const express = require("express");
const { addItem, getItem } = require("../controllers/itemControllers");

const router = express.Router();

router.route("/").post(addItem);
router.route("/").get(getItem);

module.exports = router;
