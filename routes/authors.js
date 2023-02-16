const express = require ('express');
const {
    getAuthor,
    getAuthorById,
    postAuthor,
    updateAuthor,
    deleteAuthorById
}= require ("../controllers/authors");

const authorrouter = express.Router()

authorrouter.get("/", getAuthor);
authorrouter.get("/:id", getAuthorById);
authorrouter.post("/", postAuthor);
authorrouter.patch("/:id", updateAuthor);
authorrouter.delete("/:id",deleteAuthorById)
module.exports = authorrouter
