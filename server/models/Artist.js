import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    name: String,
    genres: String
})

module.exports = mongoose.model('Artist', ArtistSchema)