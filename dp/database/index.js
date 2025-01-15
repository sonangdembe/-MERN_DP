const mongoose = require('mongoose')
const ConnectionString = "mongodb+srv://asonaxaviersm1:sona@cluster0.0nxoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase(){
    await  mongoose.connect(ConnectionString)
    console.log("Connected To DB Successfully")
 }

 module.exports = connectToDatabase