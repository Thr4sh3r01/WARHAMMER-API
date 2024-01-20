const Equipment = require('../models/equipment');

exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (equipment) {
      res.json(equipment);
    } else {
      res.status(404).json({ message: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEquipment = async (req, res) => {
  const equipment = new Equipment({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newEquipment = await equipment.save();
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);

    if (equipment) {
      equipment.name = req.body.name || equipment.name;
      equipment.description = req.body.description || equipment.description;


      const updatedEquipment = await equipment.save();
      res.json(updatedEquipment);
    } else {
      res.status(404).json({ message: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);

    if (equipment) {
      await equipment.remove();
      res.json({ message: 'Equipo eliminado' });
    } else {
      res.status(404).json({ message: 'Equipo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
