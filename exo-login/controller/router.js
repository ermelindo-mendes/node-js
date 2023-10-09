const express = require('express');
const bcrypt = require('bcrypt');

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


router.get('/inscription', (req, res) => {
    res.render('inscription');
  });
  
  router.post('/inscription', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
      // bonne pratique pour plus de securité rajouter une clé secrete par exemple hashedPassword + "clesecret";
  
      res.send(`Nom d'utilisateur : ${username}<br>Mot de passe hashé : ${hashedPassword}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Une erreur s\'est produite.');
    }
  });

module.exports = router;
