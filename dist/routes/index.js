"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.send('Hey from bellydrum! Site coming soon.');
});
module.exports = router;