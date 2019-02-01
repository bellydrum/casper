const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('hello langley ; 3')
})

module.exports = router