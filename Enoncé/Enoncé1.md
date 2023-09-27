# TP : Mise en Place d'un Serveur Minimaliste avec Connexion à MongoDB Atlas 🛠️

## Objectif du TP 🎯

Votre mission, si vous l'acceptez, est de corriger et d'optimiser un projet de serveur Node.js existant. Ce serveur doit se connecter à une base de données MongoDB Atlas. Le code de départ présente plusieurs inconvénients :  

- Manque de dépendances
- Absence de définition de la variable `PORT`
- Sécurisation insuffisante de l'URI de la base de données
- Absence du fichier `.env` pour la gestion des variables d'environnement
- Nom de la fonction de connexion à la base de données peu clair

## Étapes du TP 📝

### Étape 1: Installation des Dépendances Manquantes 📦

Votre premier défi est de trouver les dépendances manquantes. Voici quelques indices :

- Une dépendance pour créer un serveur web
- Une dépendance pour interagir avec MongoDB
- Une dépendance pour gérer les variables d'environnement

### Étape 2: Configuration du Fichier `.env` 🗝️

Créez un fichier `.env` et ajoutez-y les variables d'environnement nécessaires. Pensez notamment au port et à l'URI de la base de données.

### Étape 3: Modification de `app.js` 📝

1. Importez et configurez une dépendance pour gérer les variables d'environnement.
2. Utilisez la variable `PORT` depuis `.env`. Vous devrez utiliser le port `3333` mais il ne doit pas apparaître dans ce fichier sinon le `3030`.

### Étape 4: Modification de `database.js` 🛠️

1. Changez le nom de la fonction `bizareDB` pour quelque chose de plus explicite.
2. Utilisez l'URI de MongoDB depuis `.env`.
3. Réfléchissez à comment vous pouvez sécuriser cette URI.

### Étape 5: Structure du Projet 📂

Vous êtes habitués à utiliser `npx express-generator` pour générer la structure de votre projet. Pour cet exercice, nous allons faire simple. Voici les fichiers que vous devez avoir en dehors des fichiers d'initialisation et d'installation (package.json, node-modules, package-lock.json):

- `app.js`
- `database.js` (dans un dossier `config`)
- `.env`

## Conseil de notre Développeur Senior 👨‍💻

Lorsque vous travaillez avec des variables d'environnement, assurez-vous de ne jamais les pousser dans votre dépôt Git. Utilisez un fichier `.gitignore` pour exclure le fichier `.env`.

## Points à Vérifier ✅

- Avez-vous trouvé toutes les dépendances manquantes ?
- Le fichier `.env` est-il bien configuré ?
- Avez-vous sécurisé l'URI de MongoDB ?
- La variable `PORT` est-elle bien définie ?
- Le nom de la fonction de connexion à la base de données est-il clair et explicite ?

Si vous pouvez cocher toutes ces cases, félicitations ! Vous êtes sur la bonne voie pour devenir de véritables experts en Node.js ! 🎉🚀