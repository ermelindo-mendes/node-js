const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
    const username = req.session.user;
    if (username) {
        res.render('index', { username });
    } else {
        res.render('form'); 
    }
});


router.post('/', (req, res) => {
    const { username } = req.body;
    req.session.user = username; 
    res.redirect('/'); 
});

module.exports = router;
