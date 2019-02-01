"use strict";

var express = require('express');

var router = express.Router();
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('hello langley ; 3');
});
module.exports = router;