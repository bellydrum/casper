"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainService =
/*#__PURE__*/
function () {
  function MainService() {
    _classCallCheck(this, MainService);
  }

  _createClass(MainService, null, [{
    key: "greet",

    /**
     *
     * @param req
     * @param res
     * @about returns a temporary greeting
     */
    value: function greet(req, res) {
      res.send("Hey from bellydrum! /swagger page coming soon.");
    }
  }]);

  return MainService;
}();

exports.default = MainService;