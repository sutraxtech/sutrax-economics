/**
 * SUTRAX ECONOMICS — Rutas de Autenticación
 */
const express = require('express');
const router  = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, error: 'Todos los campos son requeridos' });
    if (password.length < 6)
      return res.status(400).json({ success: false, error: 'La contraseña debe tener mínimo 6 caracteres' });
    // En producción: crear usuario en Firebase Auth
    res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', user: { name, email } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, error: 'Email y contraseña requeridos' });
    // En producción: verificar con Firebase Auth
    res.json({ success: true, message: 'Login exitoso', token: 'firebase-id-token' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
