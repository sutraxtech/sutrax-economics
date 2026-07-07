/**
 * SUTRAX ECONOMICS — API de Transacciones
 * Gestión de ingresos y gastos del usuario
 */
const express = require('express');
const router  = express.Router();

// GET /api/transactions — Listar transacciones del usuario
router.get('/', async (req, res) => {
  try {
    // En producción: consultar Firebase Firestore por userId
    res.json({ success: true, data: [] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/transactions — Registrar nueva transacción
router.post('/', async (req, res) => {
  try {
    const { type, amount, category, description, date } = req.body;
    if (!type || !amount || !category)
      return res.status(400).json({ success: false, error: 'Tipo, monto y categoría son requeridos' });
    if (!['income', 'expense'].includes(type))
      return res.status(400).json({ success: false, error: 'Tipo debe ser income o expense' });
    if (amount <= 0)
      return res.status(400).json({ success: false, error: 'El monto debe ser mayor a 0' });

    const transaction = {
      id:          Date.now().toString(),
      type,           // 'income' | 'expense'
      amount,         // en RD$
      category,
      description:    description || '',
      date:           date || new Date().toISOString(),
      createdAt:      new Date().toISOString()
    };
    // En producción: await db.collection('transactions').add(transaction)
    res.status(201).json({ success: true, data: transaction });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/transactions/:id — Eliminar transacción
router.delete('/:id', async (req, res) => {
  try {
    // En producción: await db.collection('transactions').doc(req.params.id).delete()
    res.json({ success: true, message: `Transacción ${req.params.id} eliminada` });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
