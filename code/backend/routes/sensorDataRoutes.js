const express = require('express')
const router = express.Router()
const {getReadings,getLatestReading, setReading, updateReading, DeleteReading} = require('../controllers/sensorDataController')

const {protect} = require('../middleware/authMiddleware')  

router.route('/').get(protect,getReadings).post(protect,setReading)
router.route('/latest').get(protect,getLatestReading)
router.route('/:id').put(protect,updateReading).delete(protect,DeleteReading)


module.exports = router;