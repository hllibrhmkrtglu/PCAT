const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const customDate = new Date(); // Belirli bir tarih oluşturduk

const PhotoSchema = new Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});


const Photo = mongoose.model("Photo", PhotoSchema)

module.exports = Photo