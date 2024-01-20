const mongoose = require('mongoose');

const gameRuleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Otros campos relevantes para tu modelo de regla de juego
});

const GameRule = mongoose.model('GameRule', gameRuleSchema);

module.exports = GameRule;
