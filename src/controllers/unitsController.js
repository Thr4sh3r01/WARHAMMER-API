const Unit = require('../models/unit');

exports.getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUnitById = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);
    if (unit) {
      res.json(unit);
    } else {
      res.status(404).json({ message: 'Unidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUnit = async (req, res) => {
  const unit = new Unit({
    name: req.body.name,
    type: req.body.type,
  });

  try {
    const newUnit = await unit.save();
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUnit = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);

    if (unit) {
      unit.name = req.body.name || unit.name;
      unit.type = req.body.type || unit.type;


      const updatedUnit = await unit.save();
      res.json(updatedUnit);
    } else {
      res.status(404).json({ message: 'Unidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUnit = async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);

    if (unit) {
      await unit.remove();
      res.json({ message: 'Unidad eliminada' });
    } else {
      res.status(404).json({ message: 'Unidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
