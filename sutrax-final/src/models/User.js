/**
 * SUTRAX ECONOMICS — Modelo de Usuario
 * Estructura de datos del usuario en Firebase Firestore
 */
class User {
  constructor({ uid, name, email, plan = 'freemium', createdAt = new Date().toISOString() }) {
    this.uid       = uid;
    this.name      = name;
    this.email     = email;
    this.plan      = plan;      // 'freemium' | 'pro' | 'corporate'
    this.createdAt = createdAt;
  }

  toFirestore() {
    return { uid: this.uid, name: this.name, email: this.email, plan: this.plan, createdAt: this.createdAt };
  }

  static fromFirestore(doc) {
    return new User({ uid: doc.id, ...doc.data() });
  }
}

module.exports = User;
