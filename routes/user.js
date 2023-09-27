const express = require('express');
const router = express.Router();
// Importation du contrôleur utilisateur
const userController = require('../controllers/userController');

// Définition des routes utilisateur
router.get('/register', userController.showRegisterPage);
router.post('/register', userController.registerUser);
router.get('/showusers', userController.listUsers);

// Route pour afficher la page de modification
router.get('/edit/:id', userController.showEditPage);

// Route pour modifier un utilisateur
router.post('/edit/:id', userController.editUser);

// Route pour supprimer un utilisateur
router.get('/delete/:id', userController.deleteUser);

// Exportation du routeur
module.exports = router;