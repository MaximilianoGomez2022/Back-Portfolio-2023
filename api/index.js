import express from 'express'
import cors from'cors'
import ProyectosApiRoute from './routes/proyectos.api.routes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', ProyectosApiRoute)

export default app