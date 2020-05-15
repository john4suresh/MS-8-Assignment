const express = require('express');
const router = express.Router();
const Dress = require('../models/dresse');

// GETS ALL ELECTRONICS
router.get('/',async (req,res) => {
    try{
    const dressData = await Dress.find();
    res.json(dressData);
    }catch(err){
        res.json({message : err});
    }
    
})

// SUBMIT A POST
router.post('/',async (req,res) => {
    const dress = Dress({
        name : req.body.name,
        price : req.body.price,
        isAvailable : req.body.isAvailable
    })
    try{
        const dressData = await dress.save();
        res.json(dressData);
    }catch(err){
        res.json({message : err});
    }

})

// GETTING SPECIFIC POST

router.get('/:id',async (req,res) =>{
    try{
    const dress = await Dress.findById(req.params.id);
    res.json(dress);
    }catch(err){
        res.json({message : err});
    }
})

// DELETING A POST

router.delete('/:id', async (req,res) => {
    try{
        const removeDress = await Dress.remove({_id :req.params.id});
        res.json(removeDress);
    }catch(err){
        res.json({message : err});
    }
})

module.exports = router;