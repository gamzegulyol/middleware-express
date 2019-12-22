const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res, next) => {
    try {
        const response = await fetch('http://localhost:5000/api/userList');
        const data = await response.json();
        res.render('index', {
            userList: data,
            title: "Kullanıcı Bilgileri"
        });

        res.send(data);
    } catch (error) {
        res.send("Oopss");
    }
});

module.exports = router;
