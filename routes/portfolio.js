const express=require('require')
const { sendemail } = require('../controllers/portfoliocontroller')

//router
const router = express.Router()



router.post('/sendemail',sendemail)

module.exports=router