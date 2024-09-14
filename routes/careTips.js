import express from 'express';
import CareTip from '../models/CareTip.js';

const router = express.Router();

// GET all care tips
router.get('/', async (req, res) => {
  try {
    const careTips = await CareTip.find().populate('plant');
    res.json(careTips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new care tip
router.post('/', async (req, res) => {
  const careTip = new CareTip({
    plant: req.body.plant,
    tip: req.body.tip
  });

  try {
    const newCareTip = await careTip.save();
    res.status(201).json(newCareTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH an existing care tip
router.patch('/:id', async (req, res) => {
  try {
    const careTip = await CareTip.findById(req.params.id);
    if (req.body.plant) careTip.plant = req.body.plant;
    if (req.body.tip) careTip.tip = req.body.tip;

    const updatedCareTip = await careTip.save();
    res.json(updatedCareTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a care tip
router.delete('/:id', async (req, res) => {
  try {
    await CareTip.findByIdAndDelete(req.params.id);
    res.json({ message: 'Care tip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
