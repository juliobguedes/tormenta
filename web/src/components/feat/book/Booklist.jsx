import React from 'react';

import './Booklist.css';

const Booklist = ({ book }) => {
    return (
        <div>
            <h1>{book.nome}</h1>
            <div className="feat-list">
                {book.talentos.map(talento => <p>{talento.nome}</p>)}
            </div>
            <hr />
        </div>
    );
};

export default Booklist;
