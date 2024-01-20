const GameRule = require('../models/gameRule');

exports.getAllGameRules = async (req, res) => {
  try {
    const gameRules = await GameRule.find();
    res.json(gameRules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGameRuleById = async (req, res) => {
  try {
    const gameRule = await GameRule.findById(req.params.id);
    if (gameRule) {
      res.json(gameRule);
    } else {
      res.status(404).json({ message: 'Regla de juego no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGameRule = async (req, res) => {
  const gameRule = new GameRule({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newGameRule = await gameRule.save();
    res.status(201).json(newGameRule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateGameRule = async (req, res) => {
  try {
    const gameRule = await GameRule.findById(req.params.id);

    if (gameRule) {
      gameRule.name = req.body.name || gameRule.name;
      gameRule.description = req.body.description || gameRule.description;


      const updatedGameRule = await gameRule.save();
      res.json(updatedGameRule);
    } else {
      res.status(404).json({ message: 'Regla de juego no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteGameRule = async (req, res) => {
  try {
    const gameRule = await GameRule.findById(req.params.id);

    if (gameRule) {
      await gameRule.remove();
      res.json({ message: 'Regla de juego eliminada' });
    } else {
      res.status(404).json({ message: 'Regla de juego no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
