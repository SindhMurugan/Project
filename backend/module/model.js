
const mongoos = require("mongoose")

const scheme = mongoos.Schema({
    mail:{type:String , required:true , unique:true},
    FirstName:String,
    lastName:String,
    phoneNo:{type:String , required:true , unique:true},
    cardItem:Array
})


module.exports = mongoos.model("Login" , scheme)