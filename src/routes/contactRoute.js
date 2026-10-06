const express = require('express');
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
    try {
        const contact = new Contact(req.body);

        const savedContact = await contact.save();

        res.status(201).json({
            message: "Contact created successfully",
            contact: savedContact
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create contact",
            error: error.message
        });
    }
});

router.get("/",async(req,res)=>{
    try{
        const contacts=await Contact.find();
        res.status(200).json(contacts);

    }
    catch(error){
        res.status(400).json({
            message:"error occured",error:error
        });
    }
  
});
router.get("/:id",async(req,res)=>{
    try{
        const contacts=await Contact.findOne({contactId:req.params.id});
        res.status(200).json(contacts);

    }
    catch(error){
        res.status(400).json({
            message:"error occured",error:error
        });
    }
  
});

router.put("/:id", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { contactId: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact updated successfully",
            contact: contact
        });

    } catch (error) {
        res.status(400).json({
            message: "Error occurred",
            error: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedContact = await Contact.findOneAndDelete({
            contactId: req.params.id
        });

        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact deleted successfully",
            contact: deletedContact
        });

    } catch (error) {
        res.status(500).json({
            message: "Error occurred",
            error: error.message
        });
    }
});

module.exports = router;
