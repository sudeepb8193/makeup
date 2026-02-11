const mongoose=require("mongoose")
require('dotenv').config()


const URL=process.env.URL
let connectDb=async()=>{
    try {
       await mongoose.connect(URL) 
       console.log('Database is connected')
    } catch (error) {
       console.log(`Data base is not connected`) 
    }
}

module.exports=connectDb