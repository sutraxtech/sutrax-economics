/**
 * SUTRAX ECONOMICS — API de Presupuestos
 * Control de límites de gasto por categoría
 */
const express = require('express');
const router  = express.Router();

const DEFAULT_BUDGETS = {
  'Alimentación': 8000,
  'Transporte':   4000,
  'Servicios':    5000,
  'Entretenimiento': 3000,
  'Salud':        6000,
  'Educación':    4000
};

// GET /api/budgets — Obtener presupuestos del usuario
router.get('/', async (req, res) => {
  res.json({ success: true, data: DEFAULT_BUDGETS });
});

// PUT /api/budgets/:category — Actualizar límite de una categoría
router.put('/:category', async (req, res) => {
  try {
    const { limit } = req.body;
    const { category } = req.params;
    if (!limit || limit <= 0)
      return res.status(400).json({ success: false, error: 'Límite debe ser mayor a 0' });
    res.json({ success: true, data: { category, limit } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
