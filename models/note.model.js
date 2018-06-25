const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxlength: 280
    },
    favourite: {
        type: Boolean,        
        default: false
    }    
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;