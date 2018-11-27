const express = require('express')

const UserController = require('./app/controllers/UserController')
const SessionCOntroller = require('./app/controllers/SessionController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionCOntroller.store)

module.exports = routes
