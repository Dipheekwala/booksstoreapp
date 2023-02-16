const author = require('../models/author')
const Author = require('../models/author')
const AuthorModel = require('../models/author')

const getAuthor = (req,res) => {
     
    AuthorModel.find()
    .then(Author => {
        res.json(Author)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getAuthorById = (req , res) => {
    const id =req.params.id
    // Use the AuthorModel to find a book by its id

AuthorModel.findById(id)
.then(Author => {
    res.status(200).json(Author)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postAuthor = (req,res) => {
    const Author = req.body
    Author.lastUpdateAt =new Date ()
    AuthorModel.create(Author)
    .then(Author => {
        res.status(201).json(Author)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateAuthor = (req,res) => {
    const id = req.params.id
    const Author = req.body

    Author.lastUpdateAt = new Date()

    AuthorModel.findByIdAndUpdate( id, Author, {new: true})
    .then(Author => {
        res.status(200).json(Author)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteAuthorById =(req,res)=> {
    const id = req.params.id
    AuthorModel.findByIdAndRemove(id)
    .then(Author => {
        res.status(200).json("Author deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    getAuthor,
    getAuthorById,
    postAuthor,
    updateAuthor,
    deleteAuthorById
}