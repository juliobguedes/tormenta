import express from 'express';

import characterRouter from  './character/characterController';
import featRouter from './feats/featController';

const router = express.Router();

router.use('/feat', featRouter);
router.use('/character', characterRouter);

export default router;
