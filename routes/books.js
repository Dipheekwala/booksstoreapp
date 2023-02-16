const express = require ('express');
const {
    getBooks,
    getBookById,
    postbook,
    updateBook,
    deleteBookById
}= require ("../controllers/books");

const bookrouter = express.Router()

bookrouter.get("/", getBooks);
bookrouter.get("/:id", getBookById);
bookrouter.post("/", postbook);
bookrouter.patch("/:id", updateBook);
bookrouter.delete("/:id",deleteBookById)
module.exports = bookrouter
