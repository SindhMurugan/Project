const express = require("express")
const app = express()
const Login = require('./module/model')
const mongoose = require('mongoose')
// const mongoClient = require("/mongodb")



mongoose.connect("mongodb://127.0.0.1:27017/bigbasket").then(()=> console.log("connected succesfully")).catch(()=>console.log("connection failed"))


app.use((req , res , next)=>{
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Headers" ,  "Origin,X-Requested-With , Content-Type , Accept")
    res.setHeader("Access-Control-Allow-Methods" , "GET,POST,DELETE,PATCH,OPTIONS")
    // console.log("my first express")
    next()
} )

app.use(express.json());


app.post("/addUserDeatils" , async (req,res,next)=>{

    console.log(req.body.firstName,"user details")
    // next()
    const addData = new Login({
        mail:req.body.email,
        FirstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNo:req.body.phoneNo
    })
    const mongo = await addData.save()
    console.log(mongo , "mongo")
    res.status(200).json({
    message:"data successfully added to the table"
    })
})


app.post("/checkPhoneNo" , async(req , res , next)=>{

    const result = await Login.find(req.body)
    const len =Object.entries(result).length
    res.status(200).json({
        message:"successfully called api",
        output:len > 0 ? true:false,
        userDeatils:result
    })
  
})


app.post("/addToCard" , async(req,res,next)=>{


    // try{
    //     if(req.body.mail != ""){
    // console.log("99999999999" ,req.body , req.body.mail)


            const getUserDetails = await Login.findById(req.body.id)

            console.log("8888888" ,  getUserDetails)

            getUserDetails.cardItem.push(req.body.cardItem)
        
          
        
            await getUserDetails.save()
        
            console.log("uuuuu" , getUserDetails)
            res.status(201).json({message:"Card Item Added" , data:getUserDetails.cardItem})
    
        // }

    // }
    // catch{
    //     res.status(400)

    // }

    

   

    // const updateOne = Login.updateOne({
    //     email:req.body.email,
    //     cardItem:req.body.product
    // })

    // console.log("99999999" , collection)

    // const data = new Login(req.body)


  

})


module.exports = app