/**
 * SUTRAX ECONOMICS — Motor de Simulación Macroeconómica
 * Variables oficiales del Banco Central de la República Dominicana (BCRD)
 * Este módulo es el diferenciador técnico principal de la plataforma.
 */
const express = require('express');
const router  = express.Router();

// Variables BCRD — Junio 2026
const MACRO = {
  inflacion_anual:    0.042,   // 4.2% BCRD 2026
  tasa_cambio_dop_usd: 58.64, // RD$58.64/USD Banco Central Jun 2026
  tasa_interes_bnr:   0.075,   // 7.5% BNR 2026
  itbis:              0.18,    // 18% DGII
};

// GET /api/simulation/macro-variables — Variables BCRD actuales
router.get('/macro-variables', (req, res) => {
  res.json({
    success: true,
    data: MACRO,
    actualizadoEl: '2026-06-01',
    fuente: 'Banco Central de la República Dominicana',
    url: 'https://www.bancentral.gov.do'
  });
});

// POST /api/simulation/inflation-impact — Impacto de inflación en costos
router.post('/inflation-impact', async (req, res) => {
  try {
    const { montoCostoFijo, meses = 12, tasaInflacionCustom } = req.body;
    if (!montoCostoFijo || montoCostoFijo <= 0)
      return res.status(400).json({ success: false, error: 'montoCostoFijo requerido y positivo' });

    const tasa = tasaInflacionCustom || MACRO.inflacion_anual;
    const tasaMensual = tasa / 12;
    let costoActual = montoCostoFijo;
    const proyeccion = [];

    for (let mes = 1; mes <= meses; mes++) {
      costoActual *= (1 + tasaMensual);
      proyeccion.push({
        mes,
        costo:              Math.round(costoActual * 100) / 100,
        incremento:         Math.round((costoActual - montoCostoFijo) * 100) / 100,
        porcentajeAcumulado: Math.round(((costoActual - montoCostoFijo) / montoCostoFijo) * 10000) / 100
      });
    }

    res.json({
      success: true,
      data: {
        costoInicial: montoCostoFijo,
        costoFinal:   Math.round(costoActual * 100) / 100,
        incrementoTotal: Math.round((costoActual - montoCostoFijo) * 100) / 100,
        tasaUsada: tasa,
        meses,
        proyeccion,
        fuente: 'BCRD — 2026'
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/simulation/currency-conversion — Conversión DOP/USD
router.post('/currency-conversion', async (req, res) => {
  try {
    const { monto, de, a } = req.body;
    if (!monto || !de || !a)
      return res.status(400).json({ success: false, error: 'monto, de y a son requeridos' });

    let resultado;
    if (de === 'DOP' && a === 'USD')      resultado = monto / MACRO.tasa_cambio_dop_usd;
    else if (de === 'USD' && a === 'DOP') resultado = monto * MACRO.tasa_cambio_dop_usd;
    else return res.status(400).json({ success: false, error: 'Conversión no soportada' });

    res.json({
      success: true,
      data: {
        montoOriginal: monto, monedaOrigen: de, monedaDestino: a,
        resultado: Math.round(resultado * 100) / 100,
        tasaUsada: MACRO.tasa_cambio_dop_usd,
        fuente: 'Banco Central de la RD — Junio 2026'
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/simulation/roi — Cálculo de ROI
router.post('/roi', async (req, res) => {
  try {
    const { beneficioNeto, inversionTotal } = req.body;
    if (!beneficioNeto || !inversionTotal || inversionTotal === 0)
      return res.status(400).json({ success: false, error: 'beneficioNeto e inversionTotal requeridos' });

    const roi = ((beneficioNeto - inversionTotal) / inversionTotal) * 100;
    res.json({
      success: true,
      data: {
        beneficioNeto, inversionTotal,
        roi: Math.round(roi * 100) / 100,
        formula: 'ROI (%) = ((Beneficio Neto - Inversión Total) / Inversión Total) × 100',
        interpretacion: roi > 0 ? 'Rentable ✅' : 'No rentable ❌'
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
