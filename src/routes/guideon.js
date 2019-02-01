const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('guideon loves dad dicks')
})

module.exports = router