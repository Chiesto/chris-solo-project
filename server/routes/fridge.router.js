const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/delete/:id', (req, res)=>{
    

    pool.query(queryText, [req.params])
        .then(response=>{
            res.sendStatus(200);
        }).catch(error=>{
            console.log('problems with delete on the server =>', error);
            res.sendStatus(500);
        })
})
module.exports = router;