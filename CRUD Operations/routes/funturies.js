const express = require('express');
const router = express.Router();
const Fun = require('../models/funt');

// GETS ALL ELECTRONICS
router.get('/',async (req,res) => {
    try{
    const funData = await Fun.find();
    res.json(funData);
} catch(err){
        res.json({message : err});
    }
})

// SUBMIT A POST
router.post('/',async (req,res) => {
    const fun = Fun({
        name : req.body.name,
        price : req.body.price,
        isAvailable : req.body.isAvailable
    })
    try{
const funData = await fun.save()
res.json(funData);
    }catch(err){
        res.json({message :  err})
    }
})

// GETTING SPECIFIC POST
router.get('/:id',async (req,res) =>{
    try{
    const fun = await Fun.findById(req.params.id);
    res.json(fun);
    }catch(err){
        res.json({message : err});
    }
})

// DELETING A POST

router.delete('/:id', async (req,res) => {
    try{
        const removeFun = await Fun.remove({_id : req.params.id});
        res.json(removeFun);
    }catch(err){
        res.json({message : err});
    }
})

module.exports = router;