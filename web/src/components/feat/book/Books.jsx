import React, { useState, useEffect } from 'react';

import Booklist from './Booklist';
import axios from '../../../lib/axiosInstance';
import data from '../../../lib/feats.json';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('/book').then(response => {
            console.log(response);
            setBooks(response.data);
        });
    }, []);
    return (
        <div>
            {books.map(book => <Booklist key={book._id} book={book} />)}
        </div>
    );
};

export default Books;
