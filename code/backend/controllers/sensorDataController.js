const asyncHandler = require('express-async-handler');
const SensorData = require('../models/sensorDataModel');
const User = require('../models/userModel');
const { use } = require('../routes/sensorDataRoutes');

// @desc Get sensorData
// @route GET /api/sensorData
// @access Private

const getReadings = asyncHandler(async(req,res) => {
    const sensorData = await SensorData.find({user:req.user.id});
    res.status(200).json(sensorData);
})

const getLatestReading = asyncHandler(async(req,res) => {
    const sensorData = await SensorData.find().limit(1).sort({$natural:-1})
    .exec({user:req.user.id});
    res.status(200).json(sensorData);
})

// @desc Set sensorData
// @route POST /api/sensorData
// @access Private

const setReading = asyncHandler(async(req,res) => {

    if(!req.body.temperature){
        res.status(400);
        throw new Error('Please add a Temperature Reading');
    }
    if(!req.body.humidity){
        res.status(400);
        throw new Error('Please add a Humidity Reading');
    }
    if(!req.body.soilmoisture){
        res.status(400);
        throw new Error('Please add a Soil Moisture Reading');
    }
    if(!req.body.plantHeight){
        res.status(400);
        throw new Error('Please add a Plant Height Reading');
    }
    if(!req.body.lightDuration){
        res.status(400);
        throw new Error('Please add a Light Duration Reading');
    }
    const sensorData = await SensorData.create({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        plantHeight: req.body.plantHeight,
        soilmoisture: req.body.soilmoisture,
        lightDuration: req.body.lightDuration,
        user: req.user.id
    })
    res.status(200).json(sensorData);
})


// @desc update sensorData
// @route PUT /api/sensorData/:id
// @access Private

const updateReading = asyncHandler(async(req,res) => {
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

const DeleteReading = asyncHandler(async(req,res) => {
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

    await sensorData.remove()
    
    res.status(200).json({id: req.params.id});
})



module.exports = {
    getReadings,
    getLatestReading,
    setReading,
    updateReading,
    DeleteReading
}