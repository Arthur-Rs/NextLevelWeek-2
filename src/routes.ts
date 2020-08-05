import { Router } from 'express'

// => Controllers
import ClassesController from './controller/classes.controller'
import ConnectionsController from './controller/connections.controller'

const routes = Router()

routes.get('/classes', ClassesController.index)
routes.post('/classes', ClassesController.store)

routes.get('/connections', ConnectionsController.index)
routes.post('/connections', ConnectionsController.store)

export default routes