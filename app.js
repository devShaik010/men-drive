const express = require('express')
const morgan = require('morgan')
const app = express()
const userRouter = require('./Routes/user.routes')
const connectToDB = require('./config/db')
connectToDB();
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(morgan)
app.use('/user',userRouter);




app.listen(8080)