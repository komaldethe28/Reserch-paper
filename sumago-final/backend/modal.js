
const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
})

module.exports=mongoose.model('/studentdetails',studentSchema)
//module.exports=mongoose.model('/paperdetails',paperSchema)