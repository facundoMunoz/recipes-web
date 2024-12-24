import { Router } from 'express';
import { pool } from '../db.js';

const personRouter = Router();

personRouter.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM person;');

    res.json(rows);
});

personRouter.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM person WHERE id = ' + id + ';');

    res.json(rows);
});

personRouter.post('/users', async (req, res) => {
    const response = await pool.query('INSERT INTO person VALUES (' + id + ';');
});

personRouter.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send("borrando usuario " + id);
});

personRouter.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send("actualizando usuario " + id);
});

export default personRouter;