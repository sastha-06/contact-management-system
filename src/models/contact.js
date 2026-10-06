const mongoose= require("mongoose")
const contactSchema= new mongoose.Schema({
    contactId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        match:[/^[0-9]{10}$/,"Phone must be exactly 10 digits"]

    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter a valid email"]
    }
    
});
const Contact=mongoose.model("Contact",contactSchema);
module.exports= Contact;
