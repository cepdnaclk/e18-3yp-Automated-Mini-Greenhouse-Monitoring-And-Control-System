const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    minTemp:{
        type: String,
         required: [false, 'Please add the Minimum Temperature']
    },
    maxTemp:{
        type: String,
         required: [false, 'Please add the Maximum Temperature']
    },
    minHumidity:{
        type: String,
        required: [false, 'Please add the Minimum Humidity']
    },
    maxHumidity:{
        type: String,
        required: [false, 'Please add the Maximum Humidity'], 
    },
    minSoilMoisture:{
        type: String,
        required: [false, 'Please add Minimum Soil Moisture']
    },
    maxSoilMoisture:{
        type: String,
        required: [false, 'Please add Maximum Soil Moisture'], 
    },
    minLightingHours:{
        type: String,
        required: [false, 'Please add Minimum Lighting Hours Required']
    },
    maxLightingHours:{
        type: String,
        required: [false, 'Please add Maximum Lighting Hours Required']
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('PlantData',plantSchema);