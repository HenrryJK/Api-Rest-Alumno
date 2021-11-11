import {pool} from '../database'
import { response } from 'express'

export const readAlumnos = async (req, res) => {
    try {
        const response = await pool.query('select a.idalumno, a.nombres, a.apellidos, a.direccion, a.telefono, a.idescuela, e.escuela from alumnos a, escuelas e where a.idescuela = e.idescuela;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

export const readAlumnoid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select a.idalumno, a.nombres, a.apellidos, a.direccion, a.telefono, a.idescuela, e.escuela from alumnos a, escuelas e where a.idescuela = e.idescuela and a.idalumno=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

export const createAlumno = async (req, res) => {
    try {
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        await pool.query('insert into  alumnos(nombres, apellidos, direccion, telefono, idescuela) values ( $1, $2, $3, $4, $5);',
            [nombres, apellidos, direccion, telefono, idescuela]);
        return res.status(200).json(
            `El alumno ${nombres}  ha sido regisrado!.`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error!');
    }
}

export const updateAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        const response = await pool.query('update alumnos set nombres = $1, apellidos = $2, direccion = $3, telefono = $4, idescuela = $5 where idalumno = $6',
            [nombres, apellidos, direccion, telefono, idescuela, id]);
        return res.status(200).send(`El registro ${id} se ha sifo modificado.`);
            
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}


export const deleteAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM alumnos where idalumno=$1', [id]);
        return res.status(200).json(
            `El registro  ${id} se ha eliminado correctamente.`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}
