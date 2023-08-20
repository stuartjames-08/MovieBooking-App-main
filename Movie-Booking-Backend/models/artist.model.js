
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    artistid : {
        type : Number,
    },
    first_name:{
        type:String,
        required : true
    },
    last_name:{
        type:String,
        required : true
    },
    wiki_url:{
        type:String
    },
    profile_url:{
        type:String
    },
    movies:{
        type : Array
    }
    
});

module.exports = mongoose.model('Artist', artistSchema);