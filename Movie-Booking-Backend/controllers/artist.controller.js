const Artist = require('../models/artist.model');

exports.searchArtist = async(req, res, next) => {

    try {
        
        const artist = await Artist.find();
        res.status(200).json({
            success : true,
            artist
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};