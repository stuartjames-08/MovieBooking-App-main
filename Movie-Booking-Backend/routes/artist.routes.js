const express = require('express');
const router = express.Router();

const {searchArtist} = require('../controllers/artist.controller');

router.route("/artist").get(searchArtist);

module.exports = router;
