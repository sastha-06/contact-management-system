const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const contactRoutes = require("./routes/contactRoute");
mongoose.connect(process.env.MONGO_URI,{
    dbName:"contact_management"
})
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((error)=>{
    console.log("MongoDB connection failed:", error);
});
app.use(express.json());
app.use("/contacts", contactRoutes);
app.get("/",(req,res)=>{
    res.json({
        message:"Contact Management System"
    });
});
app.listen(5000,()=>{
    console.log("server running on port 5000");

});
