const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type: String,
        required: [true, 'Please add the Plant Name']
    },
    temperature:{
        type: String,
        required: [true, 'Please add a Temperature Requirement']
    },
    humidity:{
        type: String,
        required: [true, 'Please add a Humidity Requirement']
    },
    soilmoisture:{
        type: String,
        required: [true, 'Please add soil Moisture Requirement'], 
    },
    soiltype:{
        type: String,
        required: [true, 'Please add Soil Type Requirement']
    },
    nutrition:{
        type: String,
        required: [true, 'Please add Nutrition Requirement']
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('PlantData',plantSchema);