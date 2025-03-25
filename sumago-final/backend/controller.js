const studentmodal = require('./modal')
const papermodal = require('./modal1')
const adduser = async(req,res)=>{
    const { name,email,pass}=req.body;
    try{
        const userdata = new studentmodal({
            name, email ,pass
        })
        const data = await userdata.save()

        res.status(200).send({data})
    }
    catch(err){
            console.log(err)
            res.status(400).send({err})

    }
}

const getdata=async (req,res)=>
{
    try
    {
    const userdata=await studentmodal.find()
    res.status(200).send({userdata})
    }
    catch(err){
        res.status(400).send({err})
    }
}
const updateuser = async(req,res)=>{
    
    try{
        const {email}=req.params;
        const {name,pass}=req.body;
    
        const data = await studentmodal.updateOne(
            {email},
            {
                $set:{name,pass}
            }
        )
        if(data.modifiedCount > 0){
            res.status(200).send({msg:"Data updated sucessfully"})
        }
        else{
            res.status(400).send({msg:"Data not updated"})
        }
    }
    catch(err){
            console.log(err)
            res.status(500).send({msg:"user not found"})

    }
}
const deleteuser = async(req,res)=>{
    try{
        const {email}=req.params;
        //const deldata = new studentmodal.deleteOne({email})
        const data = await studentmodal.deleteOne({email})

        if(data.deletedCount > 0){
            res.status(200).send({msg:"Data deleted sucessfully"})
        }
        else{
            res.status(400).send({msg:"Data not updated"})
        }
    }
    catch(err){
            console.log(err)
            res.status(500).send({msg:"user not found"})

    }
}
const finduserbyId=async(req,res)=>{
    try{
        const {email}=req.params;
        const {name,pass}=req.body;
    
        const data = await studentmodal.findOne({email})
        res.status(200).send({data,msg:"User found"})
    }
    catch(err){
        res.status(500).send({msg:"user not found"})

}

}

const addpaper = async(req,res)=>{
    const { email,facultyname,deptname,ptitle,jname,pdate,type,level}=req.body;
    try{
        const userdata = new papermodal({
            email,facultyname,deptname,ptitle,jname,pdate,type,level
        })
        const data = await userdata.save()

        res.status(200).send({data})
    }
    catch(err){
            console.log(err)
            res.status(400).send({err})

    }
}
const getpaperdata=async (req,res)=>
{
    try
    {
    const userdata=await papermodal.find()
    res.status(200).send({userdata})
    }
    catch(err){
        res.status(400).send({err})
    }
}
//??
const deletepaper = async(req,res)=>{
    try{
        const {email}=req.params;
        //const deldata = new studentmodal.deleteOne({email})
        const data = await papermodal.deleteOne({email})

        if(data.deletedCount > 0){
            res.status(200).send({msg:"Data deleted sucessfully"})
        }
        else{
            res.status(400).send({msg:"Data not updated"})
        }
    }
    catch(err){
            console.log(err)
            res.status(500).send({msg:"user not found"})

    }
}

module.exports={adduser,getdata,updateuser,deleteuser,finduserbyId,addpaper,getpaperdata,deletepaper}