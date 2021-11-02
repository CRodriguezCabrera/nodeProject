const Netflix = require("../models/Netflix.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createNetflix = async (req, res, next) => {
    try {
        const newNetflix = new Netflix();
        newNetflix.name = req.body.name;
        newNetflix.sub = req.body.sub;
        newNetflix.price = req.body.price;
        newNetflix.series = req.body.series;
        const NetflixDb = await newNetflix.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { netflix: NetflixDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllNetflix = async (req, res, next) => {
    try {
        const netflix = await Netflix.find().populate("netflix");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { netflix: netflix }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createNetflix, getAllNetflix }