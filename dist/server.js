#!/usr/bin/env node

/**
 * Entry point for casper.
 */

/** Import various tools. */
"use strict";

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _http = _interopRequireDefault(require("http"));

var _index = _interopRequireDefault(require("./routes/index"));

var _lang = _interopRequireDefault(require("./routes/lang"));

var _guideon = _interopRequireDefault(require("./routes/guideon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = normalizePort(process.env.PORT || '3000');
/** Create app object. */

var app = (0, _express.default)();
/** Set up various tools. */

app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.static(_path.default.join(__dirname, 'public')));
/** Set up routers. */

app.use('/', _index.default);
app.use('/lang', _lang.default);
app.use('/guideon', _guideon.default);
/** Set up views and view engine. */

app.set('views', _path.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
/** Set up 404 error handler. */

app.use(function (req, res, next) {
  next((0, _httpErrors.default)(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});

var server = _http.default.createServer(app);

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Helper functions.
 */

/** Normalize a port into a number, string, or false. */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/** Event listener for HTTP server "error" event. */


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages

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
}
/** Event listener for HTTP server "listening" event. */


function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log("\nNow listening on port ".concat(port, "..."));
}