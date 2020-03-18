import { Schema } from 'mongoose';
import db from '../lib/db';

const featSchema = new Schema({
    nome: String,
    livro: String,
    tipo: String,
    preRequisito: String,
    beneficio: String,
    especial: String,
    normal: String,
}, {
    collection: 'tormenta',
});

const Feat = db.model('Feat', featSchema, 'tormenta');

export default Feat;
