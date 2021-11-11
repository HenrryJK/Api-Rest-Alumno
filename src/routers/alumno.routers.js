import { Router } from 'express';
const router = Router();

import * as AlumnoCtr from '../controllers/alumno.controller'

router.get('/list/', AlumnoCtr.readAlumnos); 
router.get('/list/:id', AlumnoCtr.readAlumnoid);
router.post('/add/', AlumnoCtr.createAlumno); 
router.delete('/delete/:id', AlumnoCtr.deleteAlumno); 
router.put('/update/:id', AlumnoCtr.updateAlumno); 

export default router;