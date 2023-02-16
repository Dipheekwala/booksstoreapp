const express = require ('express');
const {
    getusers,
    getusersById,
    postuser,
    updateuser,
    deleteuserById,
    
}= require ("../controllers/users");

const userrouter = express.Router()

userrouter.get("/", getusers);
userrouter.get("/:id", getusersById);
userrouter.post("/", postuser);
userrouter.patch("/:id", updateuser);
userrouter.delete("/:id",deleteuserById)

module.exports = userrouter
