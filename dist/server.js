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

var _router = _interopRequireDefault(require("./routes/router"));

var _ServerHelper = _interopRequireDefault(require("./helpers/ServerHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var portVal = '3000';
var s = new _ServerHelper.default(portVal);
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

app.use('/', _router.default);
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
  res.send('500 Error.');
});

var server = _http.default.createServer(app);

app.set('port', s.port);
server.listen(s.port);
server.on('error', _ServerHelper.default.onError);
server.on('listening', _ServerHelper.default.onListening);