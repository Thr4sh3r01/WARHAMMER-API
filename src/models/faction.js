const mongoose = require('mongoose');

const factionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Faction = mongoose.model('Faction', factionSchema);

module.exports = Faction;
