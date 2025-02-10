const express = require('express')
require('dotenv').config()
const port = process.env.PORT||5000
const app = express();

app.use(express.json())

app.listen(port,()=>{
    console.log(`You Connected Successfully: ${port}`)
})

app.get('/item',(req,res)=>{
res.status(200).json({message:'HELLO BHAVI'})
})

app.post('/item',(req,res)=>{
    const {Username,Email,Password,Dateofbirth} = (res,req)

    if(Username=="")
        return res.status(400).json({message:'Username cannot be empty'})
    else if(!Username)
        return res.status(400).json({message:'Username not found'})   

    if(Email=="")
        return res.status(400).json({message:'Email cannot be empty'})
    else if(!Email)
        return res.status(400).json({message:'Email not found'})
    
    if(Password<8 ||Password>16)
        return res.status(400).json({message:'Password Verified'})
    else if(!(Password<8 || Password>16))
        return res.status(400).json({message:'Password length should be greater than 8 or lesser than or equal to 16'})

    if(!Dateofbirth)
        return res.status(400).json({message:'Date of Birth not found'})

    return res.status(200).json({message:'Everything entered correct'})
})

