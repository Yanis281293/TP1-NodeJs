# TP : Ajout d'un Avatar au Modèle User 📸

## Objectif du TP 🎯

Dans ce TP, nous allons ajouter une fonctionnalité pour permettre aux utilisateurs d'ajouter un avatar à leur profil. Nous mettrons à jour notre modèle `User`, notre contrôleur `userController`, nos routes et nos vues.

## Prérequis 📚

- Avoir une connaissance de base de Node.js, Express, MongoDB, Mongoose et Twig.
- Avoir suivi les TP précédents sur la mise en place d'un serveur, la gestion des utilisateurs et l'architecture MVC.

## Étapes du TP 📝

### Étape 1: Mise à Jour du Modèle `User.js` 📋²

1. Mettez à jour votre modèle `User` pour inclure un champ `avatar` qui contiendra les données de l'image et son type.

    ```javascript
    // Ajoutez ces lignes dans votre modèle User
    avatar: {
        data: Buffer,
        contentType: String
    }
    ```

### Étape 2: Installation et Configuration de Multer 📦

1. Installez le package `multer` pour gérer le téléchargement de fichiers.

    ```bash
    npm install multer
    ```

2. Configurez Multer dans `userController.js` et `routes/user.js`.

    ```javascript
    // Importation du module multer
    const multer = require('multer');

    // Configuration de multer
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });
    ```

### Étape 3: Mise à Jour de `userController.js` 🎮

1. Modifiez la méthode `registerUser` pour inclure le téléchargement de l'avatar.

    ```javascript
    // Enregistrement d'un nouvel utilisateur
    exports.registerUser = async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const newUser = new User({
                username,
                email,
                password,
                avatar: {
                    data: req.file.buffer,
                    contentType: req.file.mimetype
                }
            });
            await newUser.save();
            res.redirect('/users');
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
            res.status(500).send("Erreur lors de l'enregistrement de l'utilisateur.");
        }
    };

    ```

2. Mettez à jour la méthode `editUser` pour permettre la modification de l'avatar.

    ```javascript
    // Modification d'un utilisateur
    exports.editUser = async (req, res) => {
        try {
            // Log pour vérifier les données reçues
            console.log("Données du formulaire reçues:", req.body);
            console.log("Fichier reçu:", req.file);

            const { username, email, password } = req.body;
            const updateData = { username, email, password };

            // Vérifie si un fichier a été envoyé
            if (req.file) {
                updateData.avatar = {
                    data: req.file.buffer,
                    contentType: req.file.mimetype
                };
            } else {
                console.log("Aucun fichier envoyé");
            }

            // Met à jour l'utilisateur
            await User.findByIdAndUpdate(req.params.id, updateData);

            // Redirige vers la liste des utilisateurs
            res.redirect('/users');
        } catch (error) {
            // Log d'erreur
            console.error("Erreur lors de la modification de l'utilisateur :", error);

            // Envoie une réponse d'erreur
            res.status(500).send("Erreur lors de la modification de l'utilisateur.");
        }
    };

    ```

### Étape 4: Mise à Jour des Routes 🛣️

1. Mettez à jour `routes/user.js` pour inclure le middleware Multer.

    ```javascript
    //// Ajoutez ces lignes pour gérer l'avatar///

    // Route pour enregistrer un nouvel utilisateur
    router.post('/register', upload.single('avatar'), userController.registerUser);

    // Route pour modifier un utilisateur
    router.post('/edit/:id', upload.single('avatar'), userController.editUser);

    ```

    2. Mettez à jour la route pour modifier le user

    ```javascript
    // Route pour modifier un utilisateur
    router.post('/edit/:id', upload.single('avatar'), userController.editUser);

    ```


3. Ajoutez une nouvelle route pour servir les images d'avatar.

    ```javascript
    // Route pour servir les images (avatar)
    router.get('/avatar/:id', async (req, res) => {
        try {
            console.log("Requête pour l'avatar reçue"); // Log
            const user = await User.findById(req.params.id);
            console.log("Utilisateur trouvé :", user); // Log
            res.set('Content-Type', user.avatar.contentType);
            res.send(user.avatar.data);
        } catch (error) {
            console.error("Erreur :", error); // Log d'erreur
            res.status(400).send("Erreur lors de la récupération de l'avatar");
        }
    });
    ```

### Étape 5: Mise à Jour des Vues Twig 🎨

1. Dans `users.twig`, ajoutez un élément `<img>` pour afficher l'avatar en l'insérant dans le même <td> que {{ user.username }}.

    ```html
    <td>
        <img src="/avatar/{{ user._id }}" alt="{{ user.username }}" width="50">
        {{ user.username }}
    </td>
    ```

2. Dans `reister.twig`, ajoutez un champ pour le téléchargement de l'avatar.
        
        ```html
    <div class="mb-3">
        <label for="avatar" class="form-label">Avatar</label>
        <input type="file" class="form-control" id="avatar" name="avatar">
    </div>
    ```

3. Dans `edit.twig`, modifier les attributs de <form> et ajoutez un champ pour le téléchargement de l'avatar.

    ```html
    <form action="/edit/{{ user._id }}" method="post" enctype="multipart/form-data">

        ......

    <div class="mb-3">
        <label for="avatar" class="form-label">Avatar</label>
        <input type="file" class="form-control" id="avatar" name="avatar">
    </div>
    ```

## Conseil de notre Développeur Senior 👨‍💻

N'oubliez pas de valider le type et la taille de l'image avant de l'enregistrer dans la base de données. C'est une bonne pratique pour la sécurité et l'optimisation. 🛡️

## Points à Vérifier ✅

- [ ] Le modèle `User` a-t-il été mis à jour ?
- [ ] Multer est-il installé et configuré ?
- [ ] Les méthodes `registerUser` et `editUser` ont-elles été mises à jour ?
- [ ] La route `user.js` a-t-elle été mise à jour ?
- [ ] Les vues Twig `register, edit et users` ont-elles été mises à jour ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous avez réussi à ajouter une fonctionnalité d'avatar à votre application ! 🎉🚀