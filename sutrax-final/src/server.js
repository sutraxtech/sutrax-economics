/**
 * SUTRAX ECONOMICS — Backend Server
 * Plataforma SaaS de Gestión Financiera Personal
 * Autor: Eric A. Diaz Gil | Sutrax Tech
 * UAPA — ISW410 Seminario de Proyecto I — Mayo-Julio 2026
 */

const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3001;

// ── MIDDLEWARE ───────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── ROUTES ───────────────────────────────────────────────
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/budgets',      require('./routes/budgets'));
app.use('/api/simulation',   require('./routes/simulation'));

// ── HEALTH CHECK ─────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status:    'OK',
    project:   'Sutrax Economics',
    version:   '1.0.0',
    author:    'Eric A. Diaz Gil',
    timestamp: new Date().toISOString()
  });
});

// ── ERROR HANDLER ────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ── START ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Sutrax Economics API → http://localhost:${PORT}`);
});

module.exports = app;
