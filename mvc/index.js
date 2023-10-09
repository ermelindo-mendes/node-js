const express = require('express');
const path = require('path');
const routes = require('./controller/router');
let app = express();

// dire a node que l'on utilise ejs comme moteur de templates
app.set('view engine', 'ejs');
// definir le fichier des vues 
app.set('views', path.join(__dirname,'views'));

//let routes = require('./controller/routes')
//app.use('/', routes)

app.use('/', routes)

app.listen(3000)