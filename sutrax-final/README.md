# 💰 Sutrax Economics

<div align="center">

![Sutrax Economics](https://img.shields.io/badge/Sutrax-Economics-8B5CF6?style=for-the-badge&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0.0-0FD4A0?style=for-the-badge)
![Estado](https://img.shields.io/badge/Estado-Funcional-3B82F6?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-A78BFA?style=for-the-badge)

**Plataforma digital de gestión y simulación financiera personal para emprendedores, estudiantes y PyMEs dominicanas.**

</div>

---

## 📋 Tabla de Contenidos

- [Nombre del Proyecto](#1-nombre-del-proyecto)
- [Descripción del Sistema](#2-descripción-del-sistema)
- [Objetivo](#3-objetivo)
- [Tecnologías Utilizadas](#4-tecnologías-utilizadas)
- [Estructura del Proyecto](#5-estructura-del-proyecto)
- [Instrucciones de Instalación y Ejecución](#6-instrucciones-de-instalación-y-ejecución)
- [Capturas de Pantalla](#7-capturas-de-pantalla)
- [Evidencia Funcional](#8-evidencia-funcional)
- [Información Académica](#9-información-académica)
- [Licencia](#10-licencia)

---

## 1. Nombre del Proyecto

**Sutrax Economics**  
Plataforma SaaS de Gestión y Simulación Financiera Personal

Proyecto Final — **ISW410 Seminario de Proyecto I**  
Universidad Abierta para Adultos (UAPA) · Trimestre Mayo–Julio 2026  
Fecha de entrega: **8 de julio de 2026**

---

## 2. Descripción del Sistema

Sutrax Economics es una aplicación web SaaS (Software as a Service) que resuelve la ausencia de herramientas tecnológicas accesibles para la gestión financiera en la República Dominicana.

### Funcionalidades Implementadas

| Módulo | Descripción | Archivo |
|--------|-------------|---------|
| 🌐 **Landing Page** | Presentación del producto con todas las secciones | `index.html` |
| 🔐 **Login / Registro** | Autenticación de usuarios con persistencia local | `app.html` |
| 📊 **Dashboard** | Balance, ingresos, gastos y gráfico en tiempo real | `app.html` |
| 💳 **Transacciones** | Registro de ingresos y gastos por categoría | `app.html` |
| 🎯 **Presupuestos** | Barras de progreso con alertas por categoría | `app.html` |
| 📈 **Simulador** | Inflación BCRD + conversión DOP/USD en tiempo real | `app.html` |
| ✉️ **Contacto** | Formulario funcional con validación | `app.html` |

### Modelo de Negocio SaaS

| Plan | Precio | Dirigido a |
|------|--------|-----------|
| Freemium | RD$0 | Usuarios básicos |
| Pro B2C | RD$590/mes | Estudiantes y emprendedores |
| Corporativo B2B | RD$4,200/mes | PyMEs y consultoras |

---

## 3. Objetivo

### Objetivo General
Desarrollar una plataforma digital de gestión y simulación financiera personal que permita a emprendedores, estudiantes y PyMEs dominicanas registrar, categorizar y analizar sus finanzas, con un motor de simulación macroeconómica basado en variables reales del BCRD.

### Objetivos Específicos
1. Implementar un sistema de autenticación con login y registro de usuarios.
2. Desarrollar un dashboard financiero con balance en tiempo real.
3. Crear un motor de simulación con inflación y tipo de cambio DOP/USD del BCRD.
4. Diseñar una interfaz dark mode estilo fintech profesional.
5. Establecer un modelo SaaS con payback proyectado menor a 18 meses.

---

## 4. Tecnologías Utilizadas

### Frontend (Implementado)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Backend (Arquitectura)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=flat-square)

### Infraestructura Proyectada
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat-square&logo=Firebase&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)

### App Móvil Proyectada
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)

### Gestión del Proyecto
![Trello](https://img.shields.io/badge/Trello-026AA7?style=flat-square&logo=Trello&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)

---

## 5. Estructura del Proyecto

```
sutrax-economics/
│
├── 📄 index.html                          # Landing page completa
├── 📄 app.html                            # Aplicación web funcional
├── 📄 README.md                           # Este archivo
├── 📄 .gitignore                          # Archivos excluidos
├── 📄 LICENSE                             # Licencia MIT
│
├── 📁 src/                                # Código fuente backend
│   ├── 📄 server.js                       # Servidor Node.js + Express
│   ├── 📄 package.json                    # Dependencias
│   ├── 📄 .env.example                    # Plantilla de variables de entorno
│   ├── 📁 routes/
│   │   ├── 📄 transactions.js             # API de transacciones
│   │   ├── 📄 budgets.js                  # API de presupuestos
│   │   └── 📄 simulation.js              # Motor de simulación BCRD
│   ├── 📁 middleware/
│   │   └── 📄 auth.middleware.js          # Autenticación Firebase
│   ├── 📁 config/
│   │   └── 📄 firebase.js                 # Configuración Firebase Admin
│   └── 📁 models/
│       ├── 📄 User.js                     # Modelo de usuario
│       ├── 📄 Transaction.js              # Modelo de transacción
│       └── 📄 Budget.js                   # Modelo de presupuesto
│
├── 📁 client/                             # Frontend React (proyectado)
│   └── 📄 README.md
│
├── 📁 mobile/                             # App Flutter Android (proyectado)
│   └── 📄 README.md
│
│
└── 📁 screenshots/                        # Capturas de pantalla
    ├── 📄 01
    ├── 📄 02
    ├── 📄 03
    ├── 📄 04
    ├── 📄 05
    └── 📄 06

---

## 6. Instrucciones de Instalación y Ejecución

### ✅ Opción A — Ver sin instalación (Recomendado)

No necesitas instalar nada. Solo abre los archivos directamente en tu navegador:

**Landing Page:**
```
Doble clic en → index.html
```

**Aplicación web funcional (login + dashboard):**
```
Doble clic en → app.html
```

**Credenciales demo:**
```
Email:    demo@sutrax.com
Password: demo123
```

---

### ⚙️ Opción B — Ejecutar el backend Node.js

**Requisitos previos:**
- Node.js v18 o superior → [nodejs.org](https://nodejs.org)
- Git → [git-scm.com](https://git-scm.com)

**Pasos:**

```bash
# 1. Clonar el repositorio
git clone https://github.com/ericdiazgil/sutrax-economics.git
cd sutrax-economics

# 2. Entrar al backend
cd src

# 3. Instalar dependencias
npm install

# 4. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus claves de Firebase

# 5. Ejecutar en desarrollo
npm run dev

# Servidor disponible en: http://localhost:3001
# Verifica con:          http://localhost:3001/api/health
```

---

### 🌐 Endpoints principales de la API

```
GET  /api/health                    → Estado del servidor
GET  /api/transactions              → Listar transacciones
POST /api/transactions              → Crear transacción
POST /api/simulation/inflation-impact → Simulación de inflación
POST /api/simulation/currency-conversion → Conversión DOP/USD
POST /api/simulation/roi            → Cálculo de ROI
GET  /api/simulation/macro-variables → Variables BCRD actuales
```

---




## Información Académica

| Campo | Detalle |
|-------|---------|
| **Participante** | Eric A. Diaz Gil |
| **Matrícula** | 100032989 |
| **Docente** | Ing. Henry Candelario |
| **Asignatura** | ISW410 — Seminario de Proyecto I |
| **Universidad** | Universidad Abierta para Adultos (UAPA) |
| **Escuela** | Escuela de Ingeniería y Tecnología |
| **Carrera** | Informática Gerencial |
| **Trimestre** | Mayo – Julio 2026 |
| **Fecha de Entrega** | 8 de julio de 2026 |
| **Metodología** | Scrumban (Scrum + Kanban) |
| **Sprints** | 5 sprints de 2 semanas |

---

## 10. Licencia

```
MIT License — Copyright (c) 2026 Eric A. Diaz Gil · Sutrax Tech
```

Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Sutrax Economics** · Desarrollado por Eric A. Diaz Gil  
© 2026 Sutrax Tech · Santo Domingo, República Dominicana

</div>
