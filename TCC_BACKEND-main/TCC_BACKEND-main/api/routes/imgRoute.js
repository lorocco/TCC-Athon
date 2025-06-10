const {Router} = require('express')
const ImgController = require('../controllers/ImgController.js')

const router = Router()


router.post('/img', ImgController.upload)


module.exports = router