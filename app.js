var express = require('express');
const { bizareDB } = require('./config/database');
const PORT = process.env.PORT || '3030';
const twig = require('twig');
var app = express();
const User = require('./models/User');

// Importation du fichier de route user.js
const userRoutes = require('./routes/user');

// Connexion à la base de données
bizareDB();

// Configuration du moteur de template (twig)
app.set('view engine', 'twig');
app.set('views', './views');
app.use(express.static('public'));

//Ajouter le middleware 'body-parser'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration des routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Hello Twig!', name: 'Adrien'}, );
});

// Utilisation des routes définies dans user.js
app.use('/', userRoutes);

app.listen(3333, () => {
	console.log(`🚀🚀 Lancement avec succès du server`);
});

module.exports = app;