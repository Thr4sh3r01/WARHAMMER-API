const express = require('express');
const router = express.Router();
const gameRulesController = require('../controllers/gameRulesController');

// Rutas para las reglas de juego
router.get('/gameRules', gameRulesController.getAllGameRules);
router.get('/gameRules/:id', gameRulesController.getGameRuleById);
router.post('/gameRules', gameRulesController.createGameRule);
router.put('/gameRules/:id', gameRulesController.updateGameRule);
router.delete('/gameRules/:id', gameRulesController.deleteGameRule);

module.exports = router;
