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
        res.redirect('showusers');
    };

    // Liste des utilisateurs
    exports.listUsers = async (req, res) => {
        const users = await User.find();
        res.render('pages/showusers', { users });
    };

    // Affichage de la page de modification d'un utilisateur
    exports.showEditPage = async (req, res) => {
        const user = await User.findById(req.params.id);
        res.render('pages/edit', { user });
    };

    // Modification d'un utilisateur
    exports.editUser = async (req, res) => {
        const { username, email, password } = req.body;
        await User.findByIdAndUpdate(req.params.id, { username, email, password });
        res.redirect('/showusers');
    };

    // Suppression d'un utilisateur
    exports.deleteUser = async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/showusers');
    };