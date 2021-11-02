const express = require("express");
const router = express.Router();

const {  createNetflix, getAllNetflix  } = require("../controllers/netflix.controller");

router.post("/create", createNetflix);
router.get("/", getAllNetflix);

module.exports = router;