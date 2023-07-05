const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//DELETE request to the DB
router.delete('/delete/:id', (req, res)=>{
    const queryText = `DELETE FROM fridge WHERE id=$1;`;
    

    pool.query(queryText, [req.params.id])
        .then(response=>{
            res.sendStatus(200);
        }).catch(error=>{
            console.log('problems with delete on the server =>', error);
            res.sendStatus(500);
        })
});

//GET request to obtain the fridge for the user currently logged in
router.get('/', (req, res)=>{
    const queryText = `SELECT * FROM fridge WHERE user_id = $1;`;
    
    pool.query(queryText, [req.user.id])
        .then(response=>{
            //checking to see how the data is coming back from the DB
            // console.log(response.rows);
            res.send(response.rows);
        }).catch(error=>{
            console.log('problems SERVER SIDE with GET function =>', error);
            res.sendStatus(500);
        })
});

//post request to the DB to add a new item
router.post('/', (req, res)=>{
    const queryText = `
    INSERT INTO fridge (ingredient_name, food_group_id, amount, expiration, user_id)
    VALUES ($1, $2, $3, $4, $5);`;
    const values = [req.body.ingredient_name, req.body.food_group_id, req.body.amount, req.body.expiration, req.user.id];
    //checking the req.body to make sure it is what I expected it to be 
    console.log('REQ.BODYYYYYYYY => ',req.body);
    pool.query(queryText, values)
        .then(response=>{
            res.sendStatus(201);
        }).catch(error =>{
            console.log('problems in POST - server side', error);
            res.sendStatus(500);
        })
});

//put request to the DB to update the item the user is currently on
router.put('/put/:id', (req, res)=>{
    const queryText = `UPDATE fridge 
                        SET ingredient_name=$2, food_group_id=$3, amount=$4, expiration=$5
                        WHERE id = $1`;
    const values = [req.params.id, req.body.ingredient_name, req.body.food_group_id, req.body.amount, req.body.expiration];
    //making sure the correct values are being sent form the client.
    console.log(values);
    pool.query(queryText, values)
        .then(response=>{
            // console.log('SUCCESS!');
            res.sendStatus(201);
        }).catch(error=>{
            console.log('problems in PUT - server side', error);
            res.sendStatus(500);
        })
})
module.exports = router;

