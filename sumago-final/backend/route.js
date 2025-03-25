const express = require ('express')
const studcontroller = require('./controller')
const route = express.Router()

route.post('/register',studcontroller.adduser)
route.get('/findall',studcontroller.getdata)
route.put('/update/:email',studcontroller.updateuser)
route.delete('/delete/:email',studcontroller.deleteuser)
route.get('/findone/:email',studcontroller.finduserbyId)
route.post('/submission',studcontroller.addpaper)
route.get("/findpaper",studcontroller.getpaperdata)
route.delete("/del/:email",studcontroller.deletepaper)
module.exports= route
