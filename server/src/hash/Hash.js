import uniqueValidator from 'mongoose-unique-validator';
import { Schema, Types } from 'mongoose';
import db from '../lib/db';

const hashSchema = new Schema({
    hash: {
        type: String,
        unique: true,
        required: true,
    },
});

hashSchema.plugin(uniqueValidator, { type: 'is already taken.' });
const Hash = db.model('Hash', hashSchema, 'Hash');

export default Hash;
