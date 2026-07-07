/**
 * SUTRAX ECONOMICS — Modelo de Transacción
 * Estructura de datos de ingresos y gastos en Firebase Firestore
 */
class Transaction {
  constructor({ id, userId, type, amount, category, description = '', date, createdAt = new Date().toISOString() }) {
    this.id          = id || Date.now().toString();
    this.userId      = userId;
    this.type        = type;        // 'income' | 'expense'
    this.amount      = amount;      // Monto en RD$
    this.category    = category;    // 'Salario', 'Alimentación', etc.
    this.description = description;
    this.date        = date || new Date().toISOString();
    this.createdAt   = createdAt;
  }

  toFirestore() {
    return {
      userId: this.userId, type: this.type, amount: this.amount,
      category: this.category, description: this.description,
      date: this.date, createdAt: this.createdAt
    };
  }

  static fromFirestore(doc) {
    return new Transaction({ id: doc.id, ...doc.data() });
  }
}

module.exports = Transaction;
