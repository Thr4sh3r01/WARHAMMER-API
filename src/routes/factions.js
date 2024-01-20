const express = require('express');
const router = express.Router();
const factionsController = require('../controllers/factionsController');

// Rutas para las facciones
router.get('/factions', factionsController.getAllFactions);
router.get('/factions/:id', factionsController.getFactionById);
router.post('/factions', factionsController.createFaction);
router.put('/factions/:id', factionsController.updateFaction);
router.delete('/factions/:id', factionsController.deleteFaction);

module.exports = router;
