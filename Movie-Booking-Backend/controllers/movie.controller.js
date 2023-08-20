
const Movies = require('../models/movie.model');

exports.searchMovies = async (req, res, next) => {

    try {

        const { direction = "asc", sortBy = "_id" } = req.query;

        const movies = await Movies.find().sort({ [sortBy]: direction });
        res.status(200).json({
            success: true,
            movies
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
 
    }

}

exports.searchMoviesById = async(req, res, next) => {
    try {
        let movie = await Movies.findById(req.params.id);

        if(!movie){
            res.status(404).send(`movie with id ${req.params.id} not found!`);
            return;
        }
        res.status(200).json({
            success: true,
            movie
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}