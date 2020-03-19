import { Schema } from 'mongoose';
import db from '../lib/db';

const featSchema = new Schema({
    nome: String,
    livro: String,
    tipo: String,
    preRequisito: { type: String, default: '' },
    beneficio: { type: String, default: '' },
    especial: { type: String, default: '' },
    normal: { type: String, default: '' },
});

const Feat = db.model('Feat', featSchema, 'Feat');

export default Feat;
