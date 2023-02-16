//import mongoose and the dotenv module
// const mongoose = require('mongoose');
// require ('dotenv').config();

// //load the MongoDb URI from the environment variables
// const MONGODB_URI =process.env.MONGODB_URI;


// //Function to connect to MongoDB
// function connectToMongoDB() {
// //Connect to  MongoDB using the URI
// mongoose.connect(MONGODB_URI);

// //Log a message if the connection is successful
// mongoose.connection.on('connected', () =>  {
//     console.log('connected to MongoDB successfully');
// });
// }

// //export the 'connecToMongoDB' function
// module.exports ={ connectToMongoDB };
const mongoose= require('mongoose')
require('dotenv').config()

const MONGODB_URI=process.env.MONGODB_URI;

function connectToMongoDB() {

    mongoose.connect(
        MONGODB_URI,
        {
            dbName: "bookStore",
            useNewUrlparser:true,
            useUnifiedTopology: true,

        },
        (err) =>
            err ? console.log(err) : console.log(
                "connected to bookstore database"
            )
     
    )
}
module.exports= {connectToMongoDB};