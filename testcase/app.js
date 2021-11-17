const express=require('express')
const app=express()
const authRouter=require('./routes/auth')

const bookRouter=require('./routes/book')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',authRouter)
app.use('/api',bookRouter)
app.use('/uploads',express.static('uploads'))
//  MongoDB connection 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testss', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
	console.log('Connected to MongoDB')
})
app.listen(5006,()=>{
	console.log('server is running on 5006 port')
})
module.exports=app;