const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticationMiddleware = (req, res, next) => {
  // Obtén el token de autorización del encabezado
  const token = req.header('Authorization');

  // Verifica si el token existe
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Verifica y decodifica el token usando la clave secreta
    const decoded = jwt.verify(token, config.secret);

    // Agrega el usuario decodificado al objeto de solicitud para uso posterior en rutas protegidas
    req.user = decoded.user;
    next(); // Continúa con la siguiente función de middleware o controlador
  } catch (error) {
    res.status(401).json({ message: 'Token no válido' });
  }
};

module.exports = authenticationMiddleware;
