const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

//request the recipe list with the user's fridge items.
router.get('/:oneRecipe', (req, res)=>{
    console.log('here\'s our recipe ID =>', req.params.oneRecipe);
    axios.get(`https://api.spoonacular.com/recipes/${req.params.oneRecipe}/information?apiKey=${process.env.API_KEY}`)
        .then(response=>{
            console.log(response.data);
            res.send(response.data);
        }).catch(error=>{
            console.log('problems in our API GET router', error);
            res.sendStatus(500);
        })
})

module.exports = router;