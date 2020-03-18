import express from 'express';

import * as bookService from './bookService';

const router = express.Router();

router.get('/', (req, res) => {
    bookService.getBooks().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        const { message } = error;
        res.status(400).send(message);
    });
});

router.get('/health', (req, res) => {
    res.status(200).send({ status: 'Books Controller is up and running' });
})

export default router;
