const express = require('express')
const router = express.Router()
const {getPlants,setPlants, updatePlants, DeletePlants} = require('../controllers/plantController')

const {protect} = require('../middleware/authMiddleware')  

router.route('/').get(protect,getPlants).post(protect,setPlants)
router.route('/:id').put(protect,updatePlants).delete(protect,DeletePlants)


module.exports = router;