const mongoose = require("mongoose")

// making table 
const bookSchema = new mongoose.Schema({
    bookName: {
        type : String,
       
    },
    bookPrice:{
        type : String
    },
    isbnNumber : {
        type : Number
    },
    publishedAt:{
        type : Date
    },
    author :{
        type : String
    },
    publication : {
        type : String
    }
})


const Book = mongoose.model('Book',bookSchema)
module.exports = Book