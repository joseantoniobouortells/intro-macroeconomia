# 🔧 Detalles Técnicos — Tema 2: Implementación Paso a Paso

## Pre-requisitos
- Estructura de carpetas `/tema-2/` creada
- Archivo `index.html` (menú hub)
- Carpeta `assets/` con `style.css`, `economic-logic.js` (compartidos o copiados de Tema 1)
- Acceso a GitHub para push

---

## 1️⃣ Herramienta 1: Rol del Dinero

### Ecuación Principal
```latex
M × V = P × Y
```

Donde:
- M: Cantidad de dinero (20 a 100, default 50)
- V: Velocidad de circulación (1.5 a 4, default 2.5)
- P: Nivel de precios (0.5 a 2, default 1.0)
- Y: Producto agregado (1 a 5, default 2.5)

### Lógica JavaScript (economic-logic.js)
```javascript
function quantitativeTheory(M, V, P, Y) {
  // Validación QTM: M*V = P*Y
  const nominalGDP = M * V;
  const realGDP = P * Y;

  // Retorna en JSON para fácil acceso
  return {
    nominalValue: nominalGDP,
    realValue: realGDP,
    moneyValue: M / P,  // Valor real del dinero
    neutrality: Math.abs(nominalGDP - realGDP) < 0.01  // Aprox igual
  };
}
```

### Gráficos Chart.js
**Gráfico 1 (izquierda):** "Cantidad Nominal vs Real"
- Eje X: 4 periodos (base, M↑, P↑, ambos)
- Eje Y: Valor nominal/real
- 2 líneas: Nominal (M×V) y Real (P×Y)

**Gráfico 2 (derecha):** "Valor Real del Dinero"
- Línea simple: M/P a lo largo de cambios
- Mostrar que si M y P crecen igual → valor constante (neutralidad)

### Layout HTML
```html
<div class="content-wrap">
  <h2>Teoría Cuantitativa del Dinero</h2>

  <!-- Ecuación -->
  <div class="formula-display">
    <span id="qtm-equation"></span>
  </div>

  <!-- Controles -->
  <div class="controls-card">
    <div class="param-slider">
      <label>M (Cantidad de dinero)</label>
      <input type="range" id="slider-m" min="20" max="100" value="50">
      <span id="value-m">50</span>
    </div>
    <!-- ... V, P, Y sliders -->
  </div>

  <!-- Métricas -->
  <div class="metrics-row">
    <div class="metric-card">
      <p class="metric-label">Valor Real (M/P)</p>
      <p class="metric-value" id="real-value">50</p>
    </div>
    <div class="metric-card">
      <p class="metric-label">Neutralidad</p>
      <p class="metric-value" id="neutrality">Sí ✓</p>
    </div>
  </div>

  <!-- Gráficos -->
  <div class="charts-grid">
    <canvas id="chart-nominal-real"></canvas>
    <canvas id="chart-money-value"></canvas>
  </div>

  <!-- Explicación dinámica -->
  <div class="explanation-box">
    <h3>¿Qué está sucediendo?</h3>
    <p id="explanation-text"></p>
  </div>

  <!-- Píldora de examen -->
  <div class="exam-box">
    <h4>💡 Píldora de Examen</h4>
    <p><strong>P:</strong> Si el Banco Central duplica M pero P también se duplica, ¿qué ocurre con el poder de compra?</p>
    <p><strong>R:</strong> Permanece constante (M/P no cambia). El dinero es neutral en el largo plazo.</p>
  </div>
</div>
```

### Lógica de Actualización (eventos)
```javascript
['slider-m', 'slider-v', 'slider-p', 'slider-y'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const M = parseFloat(document.getElementById('slider-m').value);
    const V = parseFloat(document.getElementById('slider-v').value);
    const P = parseFloat(document.getElementById('slider-p').value);
    const Y = parseFloat(document.getElementById('slider-y').value);

    const result = quantitativeTheory(M, V, P, Y);

    // Actualizar métricas
    document.getElementById('real-value').textContent = result.moneyValue.toFixed(2);
    document.getElementById('neutrality').textContent = result.neutrality ? 'Sí ✓' : 'No ✗';

    // Actualizar gráficos
    updateCharts(M, V, P, Y, result);

    // Actualizar explicación
    updateExplanation(M, V, P, Y, result);
  });
});
```

---

## 2️⃣ Herramienta 2: Sistema Bancario

### Ecuación Principal
```latex
M_1 = \frac{1}{r} × MB
```

Donde:
- r: Tasa de reserva obligatoria (0.05 a 0.30, default 0.10)
- MB: Base monetaria (default 100)
- m: Multiplicador (1/r, varía 3.33 a 20)

### Lógica de Cascada de Crédito
```javascript
function bankingMultiplier(MB, r) {
  const m = 1 / r;  // Multiplicador
  const M1 = m * MB;

  return {
    multiplier: m,
    moneySupply: M1,
    rounds: generateCreditRounds(MB, r)  // Array de rondas
  };
}

function generateCreditRounds(MB, r, maxRounds = 10) {
  let rounds = [];
  let remainingDeposits = MB;

  for (let i = 0; i < maxRounds; i++) {
    const reserves = remainingDeposits * r;
    const loanable = remainingDeposits * (1 - r);

    rounds.push({
      round: i + 1,
      deposits: remainingDeposits.toFixed(2),
      reserves: reserves.toFixed(2),
      loans: loanable.toFixed(2)
    });

    remainingDeposits = loanable;
    if (remainingDeposits < 0.01) break;  // Stop cuando sea negligible
  }

  return rounds;
}
```

### Tabla de Rondas
```html
<table class="credit-rounds-table">
  <thead>
    <tr>
      <th>Ronda</th>
      <th>Depósito</th>
      <th>Reserva (r%)</th>
      <th>Préstamo</th>
    </tr>
  </thead>
  <tbody id="rounds-tbody">
    <!-- Generado dinámicamente -->
  </tbody>
</table>
```

### Gráfico de Cascada
```javascript
const ctx = document.getElementById('chart-cascade').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: rounds.map(r => `Ronda ${r.round}`),
    datasets: [{
      label: 'Depósitos',
      data: rounds.map(r => parseFloat(r.deposits)),
      backgroundColor: '#0071e3',
      borderRadius: 6
    }, {
      label: 'Préstamos',
      data: rounds.map(r => parseFloat(r.loans)),
      backgroundColor: '#34C759',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: false },
      y: { stacked: false, beginAtZero: true }
    }
  }
});
```

---

## 3️⃣ Herramienta 3: Demanda de Dinero

### Ecuación Principal
```latex
M^d = kY - hi
```

Donde:
- k: Elasticidad-renta (0.3 a 0.8, default 0.5)
- h: Semielasticidad-interés (1 a 10, default 5)
- Y: Producto (2 a 5, default 3)
- i: Tasa de interés (0% a 8%, default 3%)

### Gráfico 2D: Curva Demanda
```javascript
function demandForMoney(Y, k, h) {
  // Generar curva: varía i de 0% a 8%, calcula M^d
  const curve = [];
  for (let i = 0; i <= 8; i += 0.5) {
    const Md = k * Y - h * (i / 100);  // i en decimal
    curve.push({ x: i, y: Math.max(Md, 0) });
  }
  return curve;
}
```

Chart.js configuración:
```javascript
const ctx = document.getElementById('chart-demand').getContext('2d');
new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'M^d = kY - hi',
      data: demandCurve,  // Array de {x: i, y: Md}
      borderColor: '#0071e3',
      backgroundColor: 'rgba(0,113,227,0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Demanda de Dinero' }
    },
    scales: {
      x: { title: { display: true, text: 'Tasa de Interés (%)' } },
      y: { title: { display: true, text: 'M^d' } }
    }
  }
});
```

### Métrica Dinámica
```html
<div class="metric-card">
  <p class="metric-label">Dinero Demandado (M^d)</p>
  <p class="metric-value" id="Md-value">15.0</p>
  <p class="metric-unit">unidades</p>
</div>
```

---

## 4️⃣ Herramienta 4: Oferta de Dinero

### Dos Gráficos Comparativos

**Gráfico A:** Agregados Monetarios
```javascript
const aggregates = {
  M1: 150,      // Efectivo + cuentas a plazo
  M2: 250,      // M1 + ahorros
  M3: 400       // M2 + otros activos líquidos
};

// Bar chart simple
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['M1', 'M2', 'M3'],
    datasets: [{
      label: 'Agregados Monetarios',
      data: [150, 250, 400],
      backgroundColor: ['#0071e3', '#34C759', '#FF9500']
    }]
  }
});
```

**Gráfico B:** Descomposición Base Monetaria
```javascript
const mbComposition = {
  'Efectivo en circulación': 40,
  'Reservas bancarias': 60
};

// Pie chart
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: Object.keys(mbComposition),
    datasets: [{
      data: Object.values(mbComposition),
      backgroundColor: ['#0071e3', '#FF9500']
    }]
  }
});
```

---

## 5️⃣ Herramienta 5: Equilibrio Monetario

### Gráfico IS-LM Simplificado
```javascript
// Demanda de dinero (negativa)
const demandCurve = generateDemandCurve(Y, k, h);

// Oferta de dinero (vertical en Ms)
const supplyCurve = [
  { x: 0, y: Ms / kY },  // Punto inicio
  { x: 8, y: Ms / kY }   // Punto fin (i constante)
];

new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'M^d',
        data: demandCurve,
        borderColor: '#0071e3'
      },
      {
        label: 'M^s',
        data: supplyCurve,
        borderColor: '#FF9500',
        borderDash: [5, 5]
      }
    ]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Tasa de Interés (%)' } },
      y: { title: { display: true, text: 'Cantidad de Dinero' } }
    }
  }
});
```

### Algoritmo de Equilibrio
```javascript
function findMonetaryEquilibrium(Ms, Y, k, h) {
  // Intersección: Ms = kY - hi*
  // Resolver para i*: i* = (kY - Ms) / h
  const iStar = (k * Y - Ms) / h;
  const iStarPercent = iStar * 100;

  return {
    equilibriumRate: iStarPercent,
    excessDemand: iStarPercent > 3 ? 'Dinero escaso' : 'Dinero abundante',
    pressures: iStarPercent > 3 ? 'Inflacionista' : 'Deflacionista'
  };
}
```

---

## 6️⃣ Herramienta 6: Política Monetaria

### Modelo Simplificado de Transmisión
```javascript
function monetaryTransmission(monetaryImpulse, elasticity = 0.5) {
  // impulse: % cambio en Ms (ej: +10 = expansión 10%)
  // elasticity: cómo responde demanda agregada

  const impactOnDemand = monetaryImpulse * elasticity;
  const impactOnPrice = impactOnDemand * 0.3;  // 30% al precio, 70% a cantidad
  const impactOnOutput = impactOnDemand * 0.7;

  return {
    demandShift: impactOnDemand,
    outputEffect: impactOnOutput,
    priceEffect: impactOnPrice,
    interestRate: -impactOnDemand * 0.5  // Relación inversa
  };
}
```

### Escenarios Pre-configurados
```javascript
const scenarios = {
  'Expansión Suave': { impulse: 10 },
  'Expansión Agresiva': { impulse: 25 },
  'Contracción': { impulse: -20 },
  'Status Quo': { impulse: 0 }
};
```

### Tabla Resumen
```html
<table class="transmission-table">
  <tr>
    <th>Impacto en...</th>
    <th>Expansión Suave</th>
    <th>Expansión Agr.</th>
    <th>Contracción</th>
  </tr>
  <tr>
    <td>Demanda Agregada</td>
    <td id="da-suave">+3.5%</td>
    <td id="da-agr">+8.75%</td>
    <td id="da-contr">-7%</td>
  </tr>
  <!-- ... más filas -->
</table>
```

---

## 📊 Estructura Compartida de Assets

### `assets/style.css` (Tema 2)
```css
/* Reutilizar de Tema 1: */
/* - .metric-card, .metric-value, .metric-label */
/* - .controls-card, .param-slider */
/* - .formula-display, .formula-param-item */
/* - .exam-box, .explanation-box */
/* - .site-nav, .page-header, .content-wrap */

/* Agregar si no existe: */
.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
}

.credit-rounds-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.9rem;
}

.credit-rounds-table th, .credit-rounds-table td {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  text-align: right;
}

.transmission-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.transmission-table th, .transmission-table td {
  padding: 12px;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
}
```

### `assets/economic-logic.js` (Tema 2)
```javascript
// ========== TEMA 2: DINERO Y CRÉDITO ==========

// Teoría cuantitativa
function quantitativeTheory(M, V, P, Y) { /* ... */ }

// Multiplicador bancario
function bankingMultiplier(MB, r) { /* ... */ }

// Demanda de dinero
function demandForMoney(Y, k, h, i) { /* ... */ }

// Equilibrio monetario
function findMonetaryEquilibrium(Ms, Y, k, h) { /* ... */ }

// Transmisión monetaria
function monetaryTransmission(impulse, elasticity) { /* ... */ }

// Exportar para uso en HTML
export { quantitativeTheory, bankingMultiplier, demandForMoney, findMonetaryEquilibrium, monetaryTransmission };
```

---

## ✅ Checklist de Calidad por Herramienta

Para cada una, verificar:

- [ ] Ecuación KaTeX renderiza correctamente
- [ ] Sliders funcionan y actualizan en tiempo real (sin lag)
- [ ] Gráficos Chart.js se redibujan automáticamente
- [ ] Métricas grandes (2.2rem) son legibles
- [ ] Explicación dinámica actualiza según cambios
- [ ] Píldora de examen está presente (min. 2 items)
- [ ] Responsive en móvil (breakpoint 680px)
- [ ] Sin errores en consola
- [ ] Colores Apple-style: azul (#0071e3), gris (#1d1d1f), verde (#34C759)

---

## 🚀 Orden Recomendado de Implementación

1. **Rol del Dinero** — Más simple, ceros conceptos (QTM)
2. **Sistema Bancario** — Gráficos en cascada, tablas
3. **Demanda de Dinero** — Curva 2D, ecuación con 2 pendientes
4. **Oferta de Dinero** — Tablas comparativas (menos cálculo)
5. **Equilibrio Monetario** — Combina Md + Ms (intermedio)
6. **Política Monetaria** — Más complejo (cascadas de impactos)

Esto permite reutilizar componentes (gráficos, tablas) de herramientas anteriores.

