const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    return res.send("index page");
})

module.exports = router;
