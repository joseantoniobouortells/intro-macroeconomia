// Modelo de fijación de salarios: W/P = B + a/(1-e)
// donde: e = tasa de empleo, B = salario de reserva (poder sindical), a = coste del esfuerzo
// Fuente: 260303-Fijacion-Salarios.xlsx - Hoja "Curva Fijación Salarios"

const WageModel = {
  B: 12,   // Salario de reserva / poder sindical (B7 en Excel)
  a: 4,    // Coste del esfuerzo / desutilidad (B8 en Excel)

  // Calcula W/P para una tasa de empleo dada: W/P = B + a/(1-e)
  calculateWP(employmentRate, B, a) {
    if (employmentRate >= 1) return null; // Evita división por cero
    return B + a / (1 - employmentRate);
  },

  // Genera puntos de la curva (e de 0.05 a 0.90)
  generateCurve(B, a) {
    const points = [];
    for (let e = 0.05; e <= 0.90; e = parseFloat((e + 0.05).toFixed(2))) {
      const wp = this.calculateWP(e, B, a);
      if (wp !== null && wp < 100) { // Filtra valores extremos
        points.push({
          x: parseFloat((e * 100).toFixed(1)),
          y: parseFloat(wp.toFixed(2)),
          e: e
        });
      }
    }
    return points;
  },

  // Escenarios predefinidos
  scenarios: {
    noUnions: { B: 6,  a: 6, name: "Sin sindicatos fuertes" },
    moderate:  { B: 12, a: 4, name: "Con sindicatos moderados" },
    strong:    { B: 18, a: 2, name: "Con sindicatos fuertes" }
  }
};

// Función para crear el gráfico
function createWageChart(ctx, curveData, title = "Curva de Fijación de Salarios") {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: curveData.map(p => p.x.toFixed(1) + '%'),
      datasets: [{
        label: 'W/P (Salario Real)',
        data: curveData.map(p => p.y),
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#764ba2'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 14, weight: 'bold' },
          padding: { bottom: 20 }
        },
        legend: {
          display: true,
          position: 'top',
          labels: { font: { size: 12 }, padding: 15 }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: { size: 12, weight: 'bold' },
          bodyFont: { size: 11 },
          callbacks: {
            label: function(context) {
              return 'W/P = ' + context.parsed.y.toFixed(2);
            },
            afterLabel: function(context) {
              return 'Tasa empleo: ' + context.label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 12,
          max: 60,
          title: {
            display: true,
            text: 'Salario Real (W/P)',
            font: { size: 12, weight: 'bold' }
          },
          ticks: {
            font: { size: 11 }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            drawBorder: true
          }
        },
        x: {
          title: {
            display: true,
            text: 'Tasa de Empleo (e)',
            font: { size: 12, weight: 'bold' }
          },
          ticks: {
            font: { size: 11 }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            drawBorder: true
          }
        }
      }
    }
  });
}

// Función para generar tabla de valores
function generateTableHTML(curveData) {
  let html = '<table><thead><tr><th>Tasa Empleo (%)</th><th>Salario Real (W/P)</th><th>Cambio</th></tr></thead><tbody>';

  for (let i = 0; i < curveData.length; i++) {
    const current = curveData[i];
    const previous = i > 0 ? curveData[i-1] : null;
    const change = previous ? ((current.y - previous.y) / previous.y * 100).toFixed(2) : '-';

    html += `<tr>
      <td>${current.x.toFixed(1)}%</td>
      <td>${current.y.toFixed(2)}</td>
      <td>${change === '-' ? '-' : change + '%'}</td>
    </tr>`;
  }

  html += '</tbody></table>';
  return html;
}

// Función para generar explicación dinámica (usa KaTeX si está disponible)
function generateExplanation(B, a, employmentRate = 0.4) {
  const WP = WageModel.calculateWP(employmentRate, B, a);
  const scenarioDesc = getScenarioDescription(B, a);

  const formulaKatex = (typeof katex !== 'undefined')
    ? katex.renderToString(`\\frac{W}{P} = ${B} + \\frac{${a}}{1 - e}`, { throwOnError: false })
    : `W/P = ${B} + ${a}/(1 − e)`;

  const ePercent = (employmentRate * 100).toFixed(0);
  const resultKatex = (typeof katex !== 'undefined')
    ? katex.renderToString(`\\frac{W}{P} = ${B} + \\frac{${a}}{1 - ${employmentRate}} = ${WP.toFixed(2)}`, { throwOnError: false })
    : `W/P = ${WP.toFixed(2)}`;

  return `
    <strong>Modelo Actual:</strong> ${formulaKatex}<br><br>
    Con una tasa de empleo del <strong>${ePercent}%</strong>, el salario real es: ${resultKatex}<br><br>
    <strong>${scenarioDesc.title}</strong><br>
    ${scenarioDesc.text}
  `;
}

function getScenarioDescription(B, a) {
  if (B <= 6) {
    return {
      title: "⚠️ Poder sindical débil",
      text: "Con bajo B, los sindicatos tienen poco poder de negociación. Los salarios son bajos y muy sensibles a cambios en el desempleo. Si sube el desempleo, los salarios bajan rápidamente."
    };
  } else if (B <= 14) {
    return {
      title: "⚖️ Poder sindical moderado",
      text: "Con B moderado, hay un equilibrio. Los sindicatos tienen cierto poder pero no dominante. Los salarios responden a cambios en empleo, pero de forma moderada."
    };
  } else {
    return {
      title: "✓ Poder sindical fuerte",
      text: "Con alto B, los sindicatos tienen poder significativo. Los salarios son más altos y menos sensibles a cambios en el desempleo. Mayor protección del empleo."
    };
  }
}

// Función para formatear números
function formatNumber(num, decimals = 2) {
  return parseFloat(num).toFixed(decimals);
}

// Función para actualizar display de parámetros
function updateParamsDisplay(B, a) {
  return `
    <div><span class="param-label">B =</span> ${formatNumber(B, 1)} (salario de reserva / poder sindical)</div>
    <div><span class="param-label">a =</span> ${formatNumber(a, 1)} (coste del esfuerzo / desutilidad)</div>
    <div><span class="param-label">W/P =</span> B + a/(1 − e)</div>
  `;
}

// Exportar para uso global
window.WageModel = WageModel;
window.createWageChart = createWageChart;
window.generateTableHTML = generateTableHTML;
window.generateExplanation = generateExplanation;
window.updateParamsDisplay = updateParamsDisplay;
