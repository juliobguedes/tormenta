import express from 'express';
import dotenv from 'dotenv';

import router from '.';

dotenv.config();

const { PORT } = process.env;
if (!PORT) {
    throw Error('You should properly configure the .env file before running.');
}

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', router);
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'Up and Running' });
});

app.listen(PORT || 8081);

console.log(`App running on port ${PORT || 8081}`);
