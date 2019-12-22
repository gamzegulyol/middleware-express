const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/',(req,res,next)=>{
    fetch('http://localhost:5000/api/userList')
    .then(res=>res.JSON())
    .then(data=> {
        res.send(data);
    })
    .catch(err=>res.send("Oopss"));
});

module.exports = router;
