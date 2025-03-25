const express=require('express')
const cors=require('cors')

const app = express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017')
.then(console.log("mongodb connected"))
.catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())

const route=require('./route')
app.use('/abc',route)


app.get(('/'),(req,res)=>{
    res.send('running at port 8000')
})
app.listen(8000,()=>console.log("running at localhost:8000"))