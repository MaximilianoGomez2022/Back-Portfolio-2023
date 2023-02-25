import express from "express"
import *as ProyectosApiController from '../controllers/proyectos.api.controllers.js'

const route = express.Router()

route.route('/api/proyectos')
.get(ProyectosApiController.findall)
.post(ProyectosApiController.crearPelicula)

route.route('/api/proyectos/:id')
.get(ProyectosApiController.findById)
.patch(ProyectosApiController.editById)
.put(ProyectosApiController.replaceById)
.delete(ProyectosApiController.deleteById)

export default route
