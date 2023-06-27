const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/delete/:id', (req, res)=>{
    const queryText = `DELETE FROM fridge WHERE id=$1;`;
    

    pool.query(queryText, [req.params.id])
        .then(response=>{
            res.sendStatus(200);
        }).catch(error=>{
            console.log('problems with delete on the server =>', error);
            res.sendStatus(500);
        })
})
module.exports = router;

