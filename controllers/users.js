const users = require('../models/users')
const user = require('../models/users')
const usersModel = require('../models/users')

const getusers = (req,res) => {
     
    usersModel.find()
    .then(users => {
        res.json(users)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getusersById = (req , res) => {
    const id =req.params.id
    // Use the bookModel to find a book by its id

usersModel.findById(id)
.then(users => {
    res.status(200).json(users)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postuser = (req,res) => {
    const user = req.body
    user.lastUpdateAt =new Date ()
    usersModel.create(user)
    .then(users => {
        res.status(201).json("user posted successfully")
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateuser = (req,res) => {
    const id = req.params.id
    const user = req.body

    user.lastUpdateAt = new Date()

    usersModel.findByIdAndUpdate( id, users, {new: true})
    .then(user => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteuserById =(req,res)=> {
    const id = req.params.id
    usersModel.findByIdAndRemove(id)
    .then(users => {
        res.status(200).json("user deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}


module.exports={
    getusers,
    getusersById,
    postuser,
    updateuser,
    deleteuserById,
    
}