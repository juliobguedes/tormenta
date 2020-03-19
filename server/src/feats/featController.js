import express from 'express';
import * as featService from './featService';

const router = express.Router();

router.get('/', (req, res) => {
    featService.getFeats().then((feats) => {
        res.status(200).send(feats);
    }).catch((error) => {
        const { message } = error;
        res.status(400).send(message);
    });
});

router.get('/health', (req, res) => {
    res.status(200).send({ status: 'Feat Controller is up and running' });
})

export default router;
