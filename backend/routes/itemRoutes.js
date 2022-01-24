const express = require("express");
const { addItem } = require("../controllers/itemControllers");

const router = express.Router();

router.route("/").post(addItem);

module.exports = router;
