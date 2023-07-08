const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

//request the recipe list with the user's fridge items.
router.get('/:items', (req, res)=>{
    // console.log('items in our fridge', req.params.items);
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=eb33f5119c8f40f59e4dbfe44e590e49&ingredients=${req.params.items}&ranking=1&number=10`)
        .then(response=>{
            // console.log(response.data)
            res.send(response.data);
        }).catch(error=>{
            console.log('problems in our API GET router', error);
            res.sendStatus(500);
        })
})

module.exports = router;