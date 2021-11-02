const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NetflixSchema = new Schema({
    name: { type: String, required: true },
    sub:{ type: String, required: true },
    price: { type: Number, required: true },
    series: [{ type: Schema.Types.ObjectId, ref: "serie", required: true }]
});

const Netflix = mongoose.model("netflix", NetflixSchema);
module.exports = Netflix;