"use strict";

var _express = _interopRequireDefault(require("express"));

var _MainController = _interopRequireDefault(require("../controllers/MainController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _MainController.default.greet);
module.exports = router;