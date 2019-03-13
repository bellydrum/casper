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
import router from './routes/router'
import { ServerHelper, port } from './helpers/ServerHelper'

/** Create app object. */
const app = express()

/** Set up various tools. */
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/** Set up routers. */
app.use('', router)
app.use('/', router)

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
// server.on('error', ServerHelper.onError)
server.on('listening', ServerHelper.onListening)
