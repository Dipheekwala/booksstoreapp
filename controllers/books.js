const book = require('../models/book')
const bookModel = require('../models/book')

const getBooks = (req,res) => {
     
    bookModel.find()
    .then(books => {
        res.json(books)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getBookById = (req , res) => {
    const id =req.params.id
    // Use the bookModel to find a book by its id

bookModel.findById(id)
.then(book => {
    res.status(200).json(book)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postbook = (req,res) => {
    const book = req.body
    book.lastUpdateAt =new Date ()
    bookModel.create(book)
    .then(book => {
        res.status(201).json(book)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateBook = (req,res) => {
    const id = req.params.id
    const book = req.body

    book.lastUpdateAt = new Date()

    bookModel.findByIdAndUpdate( id, book, {new: true})
    .then(book => {
        res.status(200).json(book)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteBookById =(req,res)=> {
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
    .then(book => {
        res.status(200).json("book deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    getBooks,
    getBookById,
    postbook,
    updateBook,
    deleteBookById
}