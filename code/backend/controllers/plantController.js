const asyncHandler = require('express-async-handler');
const SensorData = require('../models/plantModel');
const User = require('../models/userModel');
const { use } = require('../routes/plantRoutes');

// @desc Get sensorData
// @route GET /api/sensorData
// @access Private

const getPlants = asyncHandler(async(req,res) => {
    const sensorData = await SensorData.find({user:req.user.id});
    res.status(200).json(sensorData);
})



// @desc Set sensorData
// @route POST /api/sensorData
// @access Private

const setPlants = asyncHandler(async(req,res) => {
    if(!req.body.minTemp){
        res.status(400);
        throw new Error('Please add the Minimum Temperature');
    }
    if(!req.body.maxTemp){
        res.status(400);
        throw new Error('Please add the Maximum Temperature');
    }
    if(!req.body.minHumidity){
        res.status(400);
        throw new Error('Please add the Minimum Humidity');
    }
    if(!req.body.maxHumidity){
        res.status(400);
        throw new Error('Please add the Maximum Humidity');
    }
    if(!req.body.minSoilMoisture){
        res.status(400);
        throw new Error('Please add Minimum Soil Moisture');
    }
    if(!req.body.maxSoilMoisture){
        res.status(400);
        throw new Error('Please add Maximum Soil Moisture');
    }
    if(!req.body.minLightingHours){
        res.status(400);
        throw new Error('Please add Minimum Lighting Hours Required');
    }
    if(!req.body.maxLightingHours){
        res.status(400);
        throw new Error('Please add Maximum Lighting Hours Required');
    }
    const sensorData = await SensorData.create({
        minTemp: req.body.minTemp,
        maxTemp: req.body.maxTemp,
        minHumidity: req.body.minHumidity,
        maxHumidity: req.body.maxHumidity,
        minSoilMoisture: req.body.minSoilMoisture,
        maxSoilMoisture: req.body.maxSoilMoisture,
        minLightingHours: req.body.minLightingHours,
        maxLightingHours: req.body.maxLightingHours,
        user: req.user.id
    })
    res.status(200).json(sensorData);
})


// @desc update sensorData
// @route PUT /api/sensorData/:id
// @access Private

const updatePlants = asyncHandler(async(req,res) => {
    const sensorData = await SensorData.findById(req.params.id);

    if(!sensorData){
        res.status(400);
        throw new Error('Data not found')
    }

    const user =await User.findById((req.user.id))

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User Not found')
    }
    if(sensorData.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized')
    }

    const updatedData = await SensorData.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
    })
    res.status(200).json(updatedData);
})


// @desc Delete sensorData
// @route DELETE /api/sensorData/:id
// @access Private

// const DeletePlants = asyncHandler(async(req,res) => {
//     const sensorData = await SensorData.findById(req.params.id);

//     if(!sensorData){
//         res.status(400);
//         throw new Error('Data not found')
//     }

//     const user =await User.findById((req.user.id))

//     //Check for user
//     if(!user){
//         res.status(401)
//         throw new Error('User Not found')
//     }
//     if(sensorData.user.toString() !== user.id){
//         res.status(401)
//         throw new Error('User not Authorized')
//     }

//     await sensorData.remove()
    
//     res.status(200).json({id: req.params.id});
// })



module.exports = {
    getPlants,
    setPlants,
    updatePlants,
}