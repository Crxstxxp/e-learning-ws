const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/User');

const router = express.Router();
const secretKey = 'your_secret_key'; // Cambia esto a una clave secreta segura

// Ruta de registro
router.post('/register', async (req, res) => {
    try {
        const { nombre, email, password, tipo } = req.body;
        const usuario = new Usuario({ nombre, email, password, tipo });
        await usuario.save();
        res.status(201).send('Usuario registrado exitosamente');
    } catch (error) {
        res.status(400).send('Error al registrar usuario: ' + error.message);
    }
});

// Ruta de login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).send('Usuario no encontrado');
        }
        const isMatch = await usuario.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send('Contraseña incorrecta');
        }
        const token = jwt.sign({ id: usuario._id, tipo: usuario.tipo }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send('Error al iniciar sesión: ' + error.message);
    }
});

module.exports = router;
