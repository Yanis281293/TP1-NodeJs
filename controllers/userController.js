// Importation du modèle User
const User = require('../models/User');

// Importation du module multer
const multer = require('multer');

// Configuration de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Affichage de la page d'inscription
exports.showRegisterPage = (req, res) => {
    res.render('pages/register');
};

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
        res.redirect('/showusers');
    } catch (error) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
        res.status(500).send("Erreur lors de l'enregistrement de l'utilisateur.");
    }
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
        res.redirect('/showusers');
    } catch (error) {
        // Log d'erreur
        console.error("Erreur lors de la modification de l'utilisateur :", error);

        // Envoie une réponse d'erreur
        res.status(500).send("Erreur lors de la modification de l'utilisateur.");
    }
};

// Suppression d'un utilisateur
exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/showusers');
};