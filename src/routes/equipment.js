const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

// Rutas para los equipos
router.get('/equipment', equipmentController.getAllEquipment);
router.get('/equipment/:id', equipmentController.getEquipmentById);
router.post('/equipment', equipmentController.createEquipment);
router.put('/equipment/:id', equipmentController.updateEquipment);
router.delete('/equipment/:id', equipmentController.deleteEquipment);

module.exports = router;
