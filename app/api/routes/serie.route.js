const express = require("express");
const router = express.Router();
const { isAuth } = require("../../../middlewares/auth.middleware");


const{getSerieById,getAllSerie,createSerie}=require("../controllers/serie.controller");

router.post("/create",[isAuth], createSerie);
router.get("/", getAllSerie);
router.get("/:serieId",[isAuth], getSerieById);

module.exports = router;