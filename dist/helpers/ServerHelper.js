"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Helper for src/server.js.
 */
var ServerHelper =
/*#__PURE__*/
function () {
  function ServerHelper(port) {
    _classCallCheck(this, ServerHelper);

    this.port = port;
  }
  /** Normalize a port into a number, string, or false. */


  _createClass(ServerHelper, null, [{
    key: "normalizePort",
    value: function normalizePort(val) {
      var port = parseInt(val, 10);

      if (isNaN(port)) {
        return val;
      }

      if (port >= 0) {
        return port;
      }

      return false;
    }
    /** Event listener for HTTP server "error" event. */

  }, {
    key: "onError",
    value: function onError(error, port, process) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;

        default:
          throw error;
      }
    } // /**
    //  * Helper functions.
    //  */
    //
    // /** Normalize a port into a number, string, or false. */
    // function normalizePort(val) {
    //     const port = parseInt(val, 10)
    //
    //     if (isNaN(port)) {
    //         // named pipe
    //         return val
    //     }
    //
    //     if (port >= 0) {
    //         // port number
    //         return port
    //     }
    //
    //     return false
    // }
    // /** Event listener for HTTP server "error" event. */
    // function onError(error) {
    //     if (error.syscall !== 'listen') {
    //         throw error
    //     }
    //
    //     const bind = typeof port === 'string'
    //         ? 'Pipe ' + port
    //         : 'Port ' + port
    //
    //     // handle specific listen errors with friendly messages
    //     switch (error.code) {
    //         case 'EACCES':
    //             console.error(bind + ' requires elevated privileges')
    //             process.exit(1)
    //             break
    //         case 'EADDRINUSE':
    //             console.error(bind + ' is already in use')
    //             process.exit(1)
    //             break
    //         default:
    //             throw error
    //     }
    // }
    //
    // /** Event listener for HTTP server "listening" event. */
    // function onListening() {
    //     const addr = server.address()
    //     const bind = typeof addr === 'string'
    //         ? 'pipe ' + addr
    //         : 'port ' + addr.port
    //     console.log(`\nNow listening on port ${port}...`)
    // }

    /** Event listener for HTTP server "listening" event. */

  }, {
    key: "onListening",
    value: function onListening() {
      console.log("\nNow listening on port ".concat(this.port, "..."));
    }
  }]);

  return ServerHelper;
}();

exports.default = ServerHelper;