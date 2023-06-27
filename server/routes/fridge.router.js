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

//GET request to obtain 
router.get('/', (req, res)=>{
    const queryText = `SELECT * FROM fridge;`;
    
    pool.query(queryText)
        .then(response=>{
            //checking to see how the data is coming back from the DB
            console.log(response.rows);
            res.send(response.rows);
        }).catch(error=>{
            console.log('problems SERVER SIDE with GET function =>', error);
            res.sendStatus(500);
        })
})
module.exports = router;

