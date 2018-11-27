const express = require('express')

const UserController = require('./app/controllers/UserController')
const SessionCOntroller = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionCOntroller.store)
routes.get('/teste', authMiddleware, (req, res) => {
  res.json({ ok: true })
})

module.exports = routes
