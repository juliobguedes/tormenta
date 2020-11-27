import { Schema, Types } from 'mongoose';
import Hash from '../hash/Hash';
import db from '../lib/db';

const characterSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
    talentosAdicionados: {
        type: [Types.ObjectId],
        default: [],
    },
});

const Character = db.model('Character', characterSchema, 'Character');

export default Character;
