/** Import various tools. */
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

/** Create app object. */
const app = express()

/** Set up various tools. */
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/** Create routers. */
const indexRouter = require('./routes/index')
const langRouter = require('./routes/lang')
const guideonRouter = require('./routes/guideon')

/** Set up routers. */
app.use('/', indexRouter)
app.use('/lang', langRouter)
app.use('/guideon', guideonRouter)

/** Set up views and view engine. */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

/** Set up 404 error handler. */
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
