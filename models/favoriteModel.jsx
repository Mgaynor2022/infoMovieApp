const mongoose = require("mongoose")
const Schema = mongoose.Schema 

// Favorite BluePrint 
const favoriteSchema = new Schema(
    {
        Poster: String,
        Title: String,
        Year: String,
        Plot: String, 
        Awards: String,
        Actors: String

    }
)

module.exports = mongoose.model("Favorite", favoriteSchema)