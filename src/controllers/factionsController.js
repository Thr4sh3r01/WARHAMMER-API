const Faction = require('../models/faction');

exports.getAllFactions = async (req, res) => {
  try {
    const factions = await Faction.find();
    res.json(factions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFactionById = async (req, res) => {
  try {
    const faction = await Faction.findById(req.params.id);
    if (faction) {
      res.json(faction);
    } else {
      res.status(404).json({ message: 'Facción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFaction = async (req, res) => {
  const faction = new Faction({
    name: req.body.name,
    description: req.body.description,
    // Otros campos según sea necesario
  });

  try {
    const newFaction = await faction.save();
    res.status(201).json(newFaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFaction = async (req, res) => {
  try {
    const faction = await Faction.findById(req.params.id);

    if (faction) {
      faction.name = req.body.name || faction.name;
      faction.description = req.body.description || faction.description;

      // Actualiza otros campos según sea necesario

      const updatedFaction = await faction.save();
      res.json(updatedFaction);
    } else {
      res.status(404).json({ message: 'Facción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteFaction = async (req, res) => {
  try {
    const faction = await Faction.findById(req.params.id);

    if (faction) {
      await faction.remove();
      res.json({ message: 'Facción eliminada' });
    } else {
      res.status(404).json({ message: 'Facción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
