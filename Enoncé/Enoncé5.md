Bien sûr, voici une version annotée du TP avec les modifications nécessaires dans `app.js` pour supprimer les routes qui sont maintenant gérées dans `routes/user.js`.

# TP : Passage à une Architecture MVC 🏗️

## Objectif du TP 🎯

L'objectif de ce TP est de restructurer votre application en suivant le modèle MVC (Modèle-Vue-Contrôleur) pour améliorer la modularité et la maintenabilité du code.

## Prérequis 📚

- Avoir une connaissance de base de Node.js, Express, MongoDB et Mongoose.
- Avoir suivi les TP précédents sur la mise en place d'un serveur et la gestion des utilisateurs.

## Étapes du TP 📝

### Étape 1: Création du Dossier `routes` 📂

1. Créez un nouveau dossier appelé `routes` à la racine de votre projet.
2. Dans ce dossier, créez un fichier `user.js`.

### Étape 2: Création du Dossier `controllers` 🎮

1. Créez un nouveau dossier appelé `controllers` à la racine de votre projet.
2. Dans ce dossier, créez un fichier `userController.js`.

### Étape 3: Remplissage des Fichiers `user.js` et `userController.js` 🖋️

1. Dans `userController.js`, ajoutez les contrôleurs pour gérer les utilisateurs.

    ```javascript
    // Importation du modèle User
    const User = require('../models/User');

    // Affichage de la page d'inscription
    exports.showRegisterPage = (req, res) => {
        res.render('pages/register');
    };

    // Enregistrement d'un nouvel utilisateur
    exports.registerUser = async (req, res) => {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.redirect('/user/users');
    };

    // Liste des utilisateurs
    exports.listUsers = async (req, res) => {
        const users = await User.find();
        res.render('pages/users', { users });
    };
    ```

2. Dans `user.js`, ajoutez les routes relatives aux utilisateurs.

    ```javascript
    const express = require('express');
    const router = express.Router();
    // Importation du contrôleur utilisateur
    const userController = require('../controllers/userController');

    // Définition des routes utilisateur
    router.get('/register', userController.showRegisterPage);
    router.post('/register', userController.registerUser);
    router.get('/users', userController.listUsers);

    // Exportation du routeur
    module.exports = router;
    ```

### Étape 4: Mise à Jour du Fichier `app.js` 📝

1. Importez le fichier de route `user.js` dans `app.js`.

    ```javascript
    // Importation du fichier de route user.js
    const userRoutes = require('./routes/user');
    ```

2. Utilisez ce fichier de route dans votre application.

    ```javascript
    // Utilisation des routes définies dans user.js
    app.use('/user', userRoutes);
    ```

3. Supprimez les routes qui sont maintenant gérées dans `routes/user.js`.

    ```javascript
    // Supprimez ces lignes car elles sont maintenant gérées dans routes/user.js
    // app.get('/register', ...);
    // app.post('/register', ...);
    // app.get('/users', ...);
    ```

### Étape 5: Testez Votre Application 🧪

1. Exécutez votre application et assurez-vous que tout fonctionne comme prévu.

## Conseil de notre Développeur Senior 👨‍💻

L'architecture MVC est un excellent moyen de structurer votre application pour la rendre plus maintenable et évolutive. Cependant, assurez-vous de bien comprendre chaque composant (Modèle, Vue, Contrôleur) avant de plonger dans le code. 📘

## Points à Vérifier ✅

- [ ] Le dossier `routes` a-t-il été créé avec le fichier `user.js` ?
- [ ] Le dossier `controllers` a-t-il été créé avec le fichier `userController.js` ?
- [ ] Le fichier `app.js` a-t-il été mis à jour pour utiliser ces nouveaux fichiers ?
- [ ] L'application fonctionne-t-elle comme prévu ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous avez réussi à restructurer votre application en suivant le modèle MVC ! 🎉🚀