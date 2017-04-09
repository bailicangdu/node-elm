import express from 'express';
import db from './mongodb/db.js';
import config from 'config-lite';
import router from './routes/index.js';
const app = express();

app.use(express.static('./public'))

router(app);

app.listen(config.port)