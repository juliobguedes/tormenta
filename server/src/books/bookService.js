import Book from './Book';

const getBooks = async () => {
    const books = await Book.find();
    return books;
};

export {
    getBooks,
};
