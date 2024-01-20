const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/config/config'); // Asegúrate de tener tu archivo de configuración
const usersRoutes = require('./src/routes/users'); // Importa las rutas de usuario u otras rutas necesarias

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
mongoose.connection.once('open', () => console.log('Conexión exitosa a MongoDB'));

// Middleware para procesar datos JSON en las solicitudes
app.use(bodyParser.json());

// Rutas
app.use('/api/users', usersRoutes); // Monta las rutas de usuarios bajo el prefijo /api/users

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
