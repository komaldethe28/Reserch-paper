
const mongoose=require('mongoose')

const paperSchema=mongoose.Schema({
    email:String,
    facultyname:String,
    deptname:String,
    ptitle:String,
    jname:String,
    pdate:String,
    type:String,
    level:String
})
//module.exports=mongoose.model('/studentdetails',studentSchema)
module.exports=mongoose.model('/paperdetails',paperSchema)