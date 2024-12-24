import express from 'express';
import { PORT } from './config.js';
import personRouter from './routes/person.routes.js';

// Initialize app
const app = express();

app.use(personRouter);

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});