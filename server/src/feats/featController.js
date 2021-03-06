import express from 'express';
import cache from 'memory-cache';
import * as featService from './featService';

const router = express.Router();

router.get('/', (req, res) => {
    featService.getFeats(cache.get('allFeats')).then((feats) => {
        cache.put('allFeats', feats);
        res.status(200).send(feats);
    }).catch((error) => {
        const { message } = error;
        res.status(400).send({ message });
    });
});

router.get('/:id', (req, res) => {
    const { id: featId } = req.params;
    featService.getFeatById(featId, cache.get(featId)).then((feat) => {
        cache.put(featId, feat);
        res.status(200).send(feat);
    }).catch((error) => {
        const { message } = error;
        res.status(400).send({ message });
    });
});

router.get('/health', (req, res) => {
    res.status(200).send({ status: 'Feat Controller is up and running' });
})

export default router;
