import express from 'express';

import bookRouter from './books/bookController';
import featRouter from './feats/featController';

const router = express.Router();

router.use('/book', bookRouter);
router.use('/feat', featRouter);

export default router;
