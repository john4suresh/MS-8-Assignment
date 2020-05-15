const express = require('express');
const router = express.Router();
const Electro = require('../models/electronic');

// GETS ALL ELECTRONICS
router.get('/',async (req,res) => {
   try{
const electrons = await Electro.find();
res.json(electrons);
   }catch(err){
    res.json({message : err});
   }
})

// SUBMIT A POST
router.post('/',async (req,res) => {
    const electron = Electro({
        name : req.body.name,
        price : req.body.price,
        isAvailable : req.body.isAvailable
    })
    try{
        const electronData =  electron.save();
        res.json(electronData);
    }catch(err){
        res.json({message : err});
    }

})

// GETTING SPECIFIC POST
router.get('/:id',async (req,res) =>{
    try{
        const electron = await Electro.findById(req.params.id);
        res.json(electron);
    }catch(err){
        res.json({message : err});
    }
    
})

// DELETING A POST

router.delete('/:id', async (req,res) => {
    try{
        const removeElectron = await Electro.remove({_id :req.params.id});
        res.json(removeElectron);
    }catch(err){
        res.json({message : err});
    }
})

// UPDATE A POST

router.patch('/:id', async (req,res) => {
    try{
        const updateElectron = await Electro.updateOne(
            {_id:req.params.id},
            {$set : { name : req.body.name}}
        );

        res.json(updateElectron);

    }catch(err){
        res.json({message : err});
    }
})

module.exports = router;