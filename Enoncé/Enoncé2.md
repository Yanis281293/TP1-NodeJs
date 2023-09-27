# TP : Intégration de Twig et Mise en Place d'un Routeur 🛠️

## Objectif du TP 🎯

Après avoir mis en place un serveur minimaliste avec une connexion à MongoDB Atlas, nous allons maintenant ajouter une couche de présentation en utilisant Twig. Vous allez apprendre à intégrer Twig dans votre projet Node.js et à utiliser son système de routage pour afficher une page `home.twig`.

## Prérequis 📚

- Avoir suivi le TP précédent sur la mise en place d'un serveur et la connexion à MongoDB Atlas.
- Avoir une connaissance de base de HTML.

## Étapes du TP 📝

### Étape 1: Installation de Twig.js 📦

1. Installez la dépendance Twig.js en utilisant npm :

    ```bash
    npm install twig
    ```

### Étape 2: Configuration de Twig dans `app.js` 🛠️

1. Importez Twig dans votre fichier `app.js` :

    ```javascript
    const twig = require('twig');
    ```

2. Configurez Express pour utiliser Twig comme moteur de template :

    ```javascript
    app.set('view engine', 'twig');
    ```

3. Définissez le dossier où seront stockés vos fichiers Twig :

    ```javascript
    app.set('views', './views');
    ```

### Étape 3: Création du Dossier et du Fichier `home.twig` 📂

1. Créez un dossier nommé `views` à la racine de votre projet.
2. Dans ce dossier, créez un fichier `home.twig`.
3. Ajoutez un peu de HTML pour tester :

    ```twig
    <!DOCTYPE html>
    <html>
    <head>
        <title>Accueil</title>
    </head>
    <body>
        <h1>Bienvenue sur la page d'accueil !</h1>
    </body>
    </html>
    ```

### Étape 4: Configuration du Routeur 🚀

1. Dans votre fichier `app.js`, ajoutez une route pour la page d'accueil :

    ```javascript
    app.get('/', (req, res) => {
        res.render('home');
    });
    ```

2. Redémarrez votre serveur et accédez à `http://localhost:3333/` (ou le port que vous avez défini) pour voir si la page `home.twig` s'affiche correctement.

### Étape 5: Testez Votre Application 🧪

1. Assurez-vous que votre serveur est en cours d'exécution.
2. Ouvrez un navigateur et accédez à `http://localhost:3333/`.
3. Vous devriez voir le message "Bienvenue sur la page d'accueil !" s'afficher.

## Conseil de notre Développeur Senior 👨‍💻

Lorsque vous travaillez avec des moteurs de templates comme Twig, assurez-vous de bien organiser vos fichiers de vues pour faciliter la maintenance et la collaboration.

## Points à Vérifier ✅

- [ ] Twig est-il correctement installé et configuré ?
- [ ] Le dossier `views` et le fichier `home.twig` sont-ils en place ?
- [ ] Le routeur est-il correctement configuré pour afficher `home.twig` ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous avez réussi à intégrer Twig dans votre projet Node.js ! 🎉🚀 Vous êtes maintenant prêts à créer des applications web plus complexes avec des vues dynamiques. Bravo ! 👏