# TP : Destructuration d'une Page HTML avec les Partials Twig et Bootstrap 🛠️

## Objectif du TP 🎯

L'objectif de ce TP est de vous apprendre à décomposer une page HTML en utilisant les partials de Twig. Vous allez créer une page modèle avec Bootstrap, puis la découper en différentes parties (partials) pour faciliter la réutilisation des éléments.

## Prérequis 📚

- Avoir une connaissance de base de HTML, CSS, et Bootstrap.
- Avoir suivi les TP précédents sur la mise en place d'un serveur et l'intégration de Twig.

## Étapes du TP 📝

### Étape 1: Création du Dossier `public` et Configuration dans `app.js` 📂

1. Créez un dossier `public` à la racine de votre projet.
2. Configurez le middleware static d'Express dans `app.js` :

    ```javascript
    app.use(express.static('public'));
    ```

### Étape 2: Organisation des Dossiers pour les Vues 🗂️

1. Dans le dossier `views`, créez trois sous-dossiers :
    - `layout`
    - `pages`
    - `partials`

### Étape 3: Création de la Page Modèle avec Bootstrap 🎨

1. Dans le dossier `layout`, créez un fichier `base.twig`.
2. Ajoutez le code HTML de base et intégrez le CDN de Bootstrap.

    ```twig
    <!DOCTYPE html>
    <html>
    <head>
        <title>{% block title %}Mon site{% endblock %}</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
    </html>
    ```

### Étape 4: Création des Partials pour la Navbar et le Footer 🌐

1. Dans le dossier `partials`, créez deux fichiers : `navbar.twig` et `footer.twig`.
2. Dans `navbar.twig`, ajoutez le code HTML pour une navbar Bootstrap.
3. Dans `footer.twig`, ajoutez le code HTML pour un footer.

### Étape 5: Intégration des Partials dans `base.twig` 🧩

1. Ouvrez `base.twig` et intégrez les partials de la navbar et du footer en utilisant la syntaxe `include` de Twig.

    ```twig
    {% include 'partials/navbar.twig' %}
    {% block content %}{% endblock %}
    {% include 'partials/footer.twig' %}
    ```

### Étape 6: Création de la Page `home.twig` 🏠

1. Dans le dossier `pages`, créez un fichier `home.twig`.
2. Étendez `base.twig` et ajoutez du contenu spécifique à la page d'accueil.

    ```twig
    {% extends 'layout/base.twig' %}

    {% block title %}Accueil{% endblock %}

    {% block content %}
        <h1>Bienvenue sur la page d'accueil ! 🏠</h1>
    {% endblock %}
    ```

### Étape 7: Configuration du Routeur pour Afficher `home.twig` 🚀

1. Dans `app.js`, ajoutez une route pour la page d'accueil qui rend `home.twig`.

    ```javascript
    app.get('/', (req, res) => {
        res.render('pages/home');
    });
    ```

## Conseil de notre Développeur Senior 👨‍💻

L'utilisation de partials et de layouts est une excellente manière de réduire la duplication de code dans vos vues. Cela rend également la maintenance beaucoup plus facile. 🛠️

## Points à Vérifier ✅

- [ ] Le dossier `public` est-il bien configuré ?
- [ ] Les dossiers pour les vues sont-ils bien organisés ?
- [ ] Les partials sont-ils correctement intégrés dans `base.twig` ?
- [ ] La page `home.twig` s'affiche-t-elle correctement ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous avez réussi à décomposer une page HTML en utilisant les partials de Twig et à intégrer Bootstrap ! 🎉🚀