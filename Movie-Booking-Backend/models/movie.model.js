

const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    movieid : {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    published: {
        type: [Boolean]
    },
    released: {
        type: [Boolean]
    },
    poster_url: {
        type: String
    },
    release_date: {
        type: String,
    },
    publish_date: {
        type: String,
    },
    artists: [
        {
            first_name: {
                type: String,
            },
            last_name: {
                type: String
            },
            wiki_url: {
                type: String
            },
            profile_url: {
                type: String
            },
            movies: []
        }
    ],
    genres: [
        {
            type: String
        }
    ],
    duration: {
        type: Number
    },
    critic_rating: {
        type: Number
    },
    trailer_url: {
        type: String
    },
    wiki_url: {
        type: String
    },
    story_line: {
        type: String
    },
    shows: [
        {
            id: {
                type: Number
            },
            theatre: {
                language: {
                    type: String
                },
                show_timing: {
                    type: String
                },
                available_seats: {
                    type: Number
                },
                unit_price: {
                    type: Number
                }
            }
        }
    ]
});

module.exports = mongoose.model('Movies', moviesSchema);