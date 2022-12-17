const express = require('express')
const router = express.Router()
const {getPlants,setPlants, updatePlants} = require('../controllers/plantController')

const {protect} = require('../middleware/authMiddleware')  

router.route('/').get(protect,getPlants).post(protect,setPlants)
router.route('/:id').put(protect,updatePlants)


module.exports = router;