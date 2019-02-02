import express from 'express'
import MainController from '../controllers/MainController'

const router = express.Router()

router.get('/', MainController.greet)

module.exports = router