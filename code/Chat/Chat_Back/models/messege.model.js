const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messegeSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        minlength:3
    },
    messege:{
        type: String,
        required: true
    }
},{
    timestamps:true,
});

const Messege = mongoose.model('Messege',messegeSchema);
module.exports = Messege;