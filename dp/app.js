const express = require('express')
const app = express()


const connectToDatabase = require('./database')
const Book = require('./model/bookModel')


// alternative methods
// const app = require('express')

app.use(express.json())
connectToDatabase()

app.get("/", (req,res) =>{
   
    res.status(200).json({
        message : "sent successfully"
    })
})

// creat book
app.post('/book',async (req,res)=>{

const {bookPrice, bookName, author, isbnNumber,publishedAt,publication} = req.body
// to add specified feild in the database
await Book.create({
    bookName,
    bookPrice,
    author,
    isbnNumber,
    publishedAt,
    publication
})
res.status(201).json({
    message : "book created successfully"
})
})

// read all book
app.get('/book', async(req,res)=>{
    const books =  await Book.find() // arry ma return garxa
    res.status(200).json({
     message : 'book found successfully',
     data : books
    })
})

// read single book
app.get('/book/:id', async (req,res)=>{
    const id = req.params.id
    const book =await Book.findById(id) // object ma return garxa
    res.status(200).json({
        message : "single book read successfully",
        data : book
    })
})

// delete
app.delete('/book/:id', async(req,res) =>{
    await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message : "deleted successfully"
    })
})


// update book
app.patch('/book/:id',async (req,res)=>{
    const id = req.params.id;
    const {bookPrice, bookName, author, isbnNumber,publishedAt,publication} = req.body
    const books = await Book.findByIdAndUpdate(id,{
        bookName,
        bookPrice,
        author,
        isbnNumber,
        publishedAt,
        publication
    })
    res.status(200).json({
        message :'book updated successfully',
        data : books
    })
})



app.listen(3000,()=>{
    console.log("Nodejs server has started at the port 3000")
})