import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const MussicSchema = new Schema ({
    name: String,
    lyrics: String,
    artist: String,
    album: String,
    genres: String,
    artistid: String
})

module.exports = mongoose.model('Mussic', MussicSchema)