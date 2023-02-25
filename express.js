import express from 'express'
import cors from'cors'
import ProyectosApiRoute from './api/routes/proyectos.api.routes.js'

const app = express();
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/', express.static('public'));

app.use('/', ProyectosApiRoute)

app.listen(2023, function(){
    console.log('server started in http://localhost:2023');
})


