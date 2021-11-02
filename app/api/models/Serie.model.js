const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SerieSchema = new Schema(
    {
        name: { type: String, require: true },
        genre: { type: String, require: true },
        poster: { type: String, require: true },
        year: { type: Number, require: true }
    },
    { timestamps: true }
);

const Serie = mongoose.model("serie", SerieSchema);
module.exports = Serie;