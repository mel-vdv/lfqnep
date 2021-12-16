var mongoose = require('mongoose');

const schema = mongoose.Schema({
    pseudo: String,
    email: String,
    titre: String,
    accroche : String,
   // genre: Array,
    pitch: String,
    note: String,
    casting: String,
    starsPublic: Number,
    starsAdmin: Number,
    etoiles: Number,
    nbVotesPublic: Number,
    published: Boolean
   // affiche: Buffer
});

const FilmModel = mongoose.model("films", schema);

module.exports = FilmModel;