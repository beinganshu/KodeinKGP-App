var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');
const Quote = require('../models/quote');

router.get('/',bodyParser.urlencoded({extended:false}),async (req, res) => {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
})

router.post('/',bodyParser.urlencoded({extended:false}), async (req,res) =>{
    const quote= new Quote({
        author : req.body.author,
        quote: req.body.quote
    })
    try{
        const newQuote= await quote.save();
        res.status(201).json(newQuote);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}
)
module.exports= router;