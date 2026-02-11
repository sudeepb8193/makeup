const express=require('express')
const connectDb=require('./database/db')
require('dotenv').config()
const cors=require('cors')

const productrouter=require('./routers/productrouter')
const productNavrouter=require('./routers/productNavrouter')

const app=express()
connectDb()
app.use(express.json())
app.use(cors())
app.use('/productapi',productrouter)
app.use('/productnavapi',productNavrouter)


const PORT=process.env.PORT

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is ready:http://localhost:${PORT}`)
})