const Serie=require("../models/Serie.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");


const createSerie = async (req, res, next) => {
    try {
        const newSerie = new Serie();
        newSerie.name = req.body.name;
        newSerie.genre = req.body.genre;
        newSerie.poster = req.body.poster;
        newSerie.year = req.body.year;
        const SerieDb = await newSerie.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { serie: SerieDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllSerie = async (req, res, next) => {
    try {

            const serie = await Serie.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { serie:serie }
            });
        } catch (error) {
        return next(error)
    }
}


const getSerieById = async (req, res, next) => {
    try {
        const { serieId } = req.params;
        const serieById = await Serie.findById(serieId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { serie: serieById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports={getSerieById,getAllSerie,createSerie};