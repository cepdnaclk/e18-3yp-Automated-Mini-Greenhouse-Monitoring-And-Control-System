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
    if(!req.body.name){
        res.status(400);
        throw new Error('Please add Name of the Plant');
    }
    if(!req.body.temperature){
        res.status(400);
        throw new Error('Please add a Temperature Requirement');
    }
    if(!req.body.humidity){
        res.status(400);
        throw new Error('Please add a Humidity Requirement');
    }
    if(!req.body.soilmoisture){
        res.status(400);
        throw new Error('Please add a Soil Moisture Reading');
    }
    if(!req.body.soiltype){
        res.status(400);
        throw new Error('Please add Soil Type Requirement');
    }
    if(!req.body.nutrition){
        res.status(400);
        throw new Error('Please add Nutrition Requirement');
    }
    const sensorData = await SensorData.create({
        name: req.body.name,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        soilmoisture: req.body.soilmoisture,
        soiltype: req.body.soiltype,
        nutrition: req.body.nutrition,
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

const DeletePlants = asyncHandler(async(req,res) => {
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
    getPlants,
    setPlants,
    updatePlants,
    DeletePlants
}