# TP : CRUD Complet sur la Liste des Utilisateurs 🛠️

## Objectif du TP 🎯

Dans ce TP, nous allons ajouter des fonctionnalités CRUD (Create, Read, Update, Delete) pour gérer la liste des utilisateurs dans notre application MVC.

## Prérequis 📚

- Avoir une connaissance de base de Node.js, Express, MongoDB et Mongoose.
- Avoir suivi les TP précédents sur la mise en place d'un serveur, la gestion des utilisateurs et l'architecture MVC.

## Étapes du TP 📝

### Étape 1: Mise à Jour du Contrôleur `userController.js` 🎮

1. Ajoutez les méthodes pour gérer les fonctionnalités CRUD dans `userController.js`.

    ```javascript
    // Affichage de la page de modification d'un utilisateur
    exports.showEditPage = async (req, res) => {
        const user = await User.findById(req.params.id);
        res.render('pages/edit', { user });
    };

    // Modification d'un utilisateur
    exports.editUser = async (req, res) => {
        const { username, email, password } = req.body;
        await User.findByIdAndUpdate(req.params.id, { username, email, password });
        res.redirect('/user/users');
    };

    // Suppression d'un utilisateur
    exports.deleteUser = async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/user/users');
    };
    ```

### Étape 2: Mise à Jour du Fichier `routes/user.js` 📂

1. Ajoutez les nouvelles routes pour les fonctionnalités CRUD dans `user.js`.

    ```javascript
    // Route pour afficher la page de modification
    router.get('/edit/:id', userController.showEditPage);

    // Route pour modifier un utilisateur
    router.post('/edit/:id', userController.editUser);

    // Route pour supprimer un utilisateur
    router.get('/delete/:id', userController.deleteUser);
    ```

### Étape 3: Création de la Vue pour la Modification 📝

1. Créez un nouveau fichier `edit.twig` dans le dossier `views/pages`.
2. Ajoutez un formulaire pour la modification des utilisateurs.


    {% extends 'layout/base.twig' %}

    {% block title %}Modifier l'Utilisateur{% endblock %}

    {% block content %}
        <div class="container">
            <h1 class="mt-5 mb-3">Modifier l'Utilisateur 🛠️</h1>
            <form action="/user/edit/{{ user._id }}" method="post">
                <div class="mb-3">
                    <label for="username" class="form-label">Nom d'utilisateur</label>
                    <input type="text" class="form-control" id="username" name="username" value="{{ user.username }}" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{ user.email }}" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Mettre à jour</button>
            </form>
        </div>
    {% endblock %}



### Étape 4: Mise à Jour de la Vue pour la Liste des Utilisateurs 📝

1. Dans `users.twig`, ajoutez des boutons pour la modification et la suppression à côté de chaque utilisateur.


    {% extends 'layout/base.twig' %}

    {% block title %}Liste des Utilisateurs{% endblock %}

    {% block content %}
        <div class="container">
            <h1 class="mt-5 mb-3">Liste des Utilisateurs 📋</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nom d'utilisateur</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {% for user in users %}
                        <tr>
                            <td>{{ user.username }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <a href="/user/edit/{{ user._id }}" class="btn btn-warning">Modifier</a>
                                <a href="/user/delete/{{ user._id }}" class="btn btn-danger">Supprimer</a>
                            </td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    {% endblock %}



### Étape 5: Testez Votre Application 🧪

1. Exécutez votre application et assurez-vous que toutes les fonctionnalités CRUD fonctionnent comme prévu.

## Conseil de notre Développeur Senior 👨‍💻

Lors de la manipulation des données sensibles comme la suppression ou la modification, assurez-vous d'ajouter des mesures de sécurité supplémentaires, comme la vérification des rôles ou des permissions. 🛡️

## Points à Vérifier ✅

- [ ] Les méthodes CRUD ont-elles été ajoutées dans `userController.js` ?
- [ ] Les nouvelles routes ont-elles été ajoutées dans `routes/user.js` ?
- [ ] La vue pour la modification a-t-elle été créée ?
- [ ] La vue pour la liste des utilisateurs a-t-elle été mise à jour ?
- [ ] Les fonctionnalités CRUD fonctionnent-elles comme prévu ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous avez réussi à ajouter des fonctionnalités CRUD complètes pour la gestion des utilisateurs ! 🎉🚀