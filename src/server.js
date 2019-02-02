#!/usr/bin/env node

/**
 * Entry point for casper.
 */

/** Import various tools. */
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'

import indexRouter from './routes/index'
import langRouter from './routes/lang'
import guideonRouter from './routes/guideon'

const port = normalizePort(process.env.PORT || '3000')

/** Create app object. */
const app = express()

/** Set up various tools. */
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

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
  res.send('500 Error.')
})

const server = http.createServer(app)
app.set('port', port)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)


/**
 * Helper functions.
 */

/** Normalize a port into a number, string, or false. */
function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/** Event listener for HTTP server "error" event. */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/** Event listener for HTTP server "listening" event. */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
  console.log(`\nNow listening on port ${port}...`)
}
