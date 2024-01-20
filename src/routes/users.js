const express = require('express');
const router = express.Router();
const usersController = require('../models/user');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

// Rutas para usuarios
router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);

// Ruta protegida por autenticación
router.get('/profile', authenticationMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida. Usuario autenticado:', user: req.user });
});

module.exports = router;
