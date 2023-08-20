const express = require('express');
const router = express.Router();

const {searchGenre} = require('../controllers/genre.controller');

router.route("/genres").get(searchGenre);

module.exports = router;
