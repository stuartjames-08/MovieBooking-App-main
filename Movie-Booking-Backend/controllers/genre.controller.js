const Genre = require('../models/genre.model');

exports.searchGenre = async (req, res, next) => {

    try {
       
        const genre = await Genre.find();

        res.status(200).json({
            success: true,
            genre
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message  : 'Internal Server Error'
        })
    }
}