import express from 'express';
import cache from 'memory-cache';
import * as characterService from './characterService';

const router = express.Router();

router.get('/:hash', (req, res) => {
    const { hash } = req.params;
    characterService.getCharacter(hash, cache.get(hash)).then((char) => {
        cache.put(hash, char);
        res.status(200).send(char);
    }).catch((err) => {
        const { message } = err;
        res.status(400).send({ message });
    })
});

router.put('/:hash', (req, res) => {
    const { hash } = req.params;
    const { body: character } = req;
    characterService.updateCharacter(hash, character).then((char) => {
        cache.put(hash, char);
        res.status(200).send(char);
    }).catch((err) => {
        const { message } = err;
        res.status(400).send({ message });
    });
})

router.post('/', (req, res) => {
    const { body: character } = req;
    characterService.createCharacter(character).then((char) => {
        console.log('hey');
        cache.put(char.hash, char);
        res.status(201).send(char);
    }).catch((err) => {
        const { message } = err;
        res.status(400).send({ message });
    });
});

export default router;