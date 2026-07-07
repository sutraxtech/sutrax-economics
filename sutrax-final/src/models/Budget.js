/**
 * SUTRAX ECONOMICS — Modelo de Presupuesto
 * Límites de gasto por categoría en Firebase Firestore
 */
class Budget {
  constructor({ id, userId, category, limit, spent = 0, month }) {
    this.id       = id || Date.now().toString();
    this.userId   = userId;
    this.category = category;  // 'Alimentación', 'Transporte', etc.
    this.limit    = limit;     // Límite en RD$
    this.spent    = spent;     // Gasto actual en RD$
    this.month    = month || new Date().toISOString().slice(0, 7); // 'YYYY-MM'
  }

  get percentage() {
    return Math.min(100, Math.round((this.spent / this.limit) * 100));
  }

  get status() {
    const p = this.percentage;
    if (p >= 90) return 'danger';
    if (p >= 60) return 'warning';
    return 'ok';
  }

  toFirestore() {
    return {
      userId: this.userId, category: this.category,
      limit: this.limit, spent: this.spent, month: this.month
    };
  }

  static fromFirestore(doc) {
    return new Budget({ id: doc.id, ...doc.data() });
  }
}

module.exports = Budget;
