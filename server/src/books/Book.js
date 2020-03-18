import { Schema } from 'mongoose';
import db from '../lib/db';

const bookSchema = new Schema({
    nome: String,
    qtdTalentos: Number,
    talentos: [{
        nome: String,
        id: String,
    }],
});

const Book = db.model('Book', bookSchema, 'Book');

export default Book;
