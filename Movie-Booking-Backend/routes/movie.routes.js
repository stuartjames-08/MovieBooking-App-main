const express = require('express');
const router = express.Router();

const {searchMovies, searchMoviesById} = require('../controllers/movie.controller');

router.route("/movies").get(searchMovies);
router.route("/movies/:id").get(searchMoviesById);

module.exports = router;