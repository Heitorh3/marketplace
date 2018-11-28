const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')
const validators = require('./app/validators')

const routes = express.Router()

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

/**
 * Ads
 */
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete(
  '/ads/:id',
  validate(validators.Ad),
  controllers.AdController.destroy
)

/**
 * Purchaase
 */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
