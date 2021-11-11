import express from 'express'
import morgan from 'morgan'
import alumnoRoutes from './routers/alumno.routers'
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Se ha establecido la Conexion , Bienvenido al Sistema!');
});
app.use('/alumnos', alumnoRoutes);


export default app;