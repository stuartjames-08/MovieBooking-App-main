
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = 8085;

app.use(cors());
app.use(cookieParser());

const connectToDB = require('./config/db.config');


// connecting to database
connectToDB();
// Middelware
app.use(express.json());       // parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Upgrad Movie booking application development.')
})

// import all routes here
const user = require('./routes/user.routes');
const movies = require('./routes/movie.routes');
const genres = require('./routes/genre.routes');
const artist = require('./routes/artist.routes');

app.use('/api',user);
app.use('/api',movies);
app.use('/api',genres);
app.use('/api',artist);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} http://localhost:${PORT}`)
});

