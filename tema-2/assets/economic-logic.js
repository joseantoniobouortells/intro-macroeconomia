/**
 * ════════════════════════════════════════════════════════════════════
 * ECONOMIC LOGIC — TEMA 2: Bancos y Crédito (Capítulo 10 CORE)
 * ════════════════════════════════════════════════════════════════════
 * Fuente de verdad matemática para todas las herramientas de Tema 2
 */

// ─────────────────────────────────────────────────────────────────
// 1. TEORÍA CUANTITATIVA DEL DINERO
// ─────────────────────────────────────────────────────────────────
function quantitativeTheory(M, V, P, Y) {
  /**
   * Ecuación: M × V = P × Y
   * Donde:
   * - M: Cantidad de dinero
   * - V: Velocidad de circulación
   * - P: Nivel de precios
   * - Y: Producto agregado
   */

  const nominalValue = M * V;  // Valor nominal (M × V)
  const realValue = P * Y;      // Valor real (P × Y)
  const moneyValue = M / P;     // Valor real del dinero

  return {
    nominalValue: parseFloat(nominalValue.toFixed(2)),
    realValue: parseFloat(realValue.toFixed(2)),
    moneyValue: parseFloat(moneyValue.toFixed(2)),
    isNeutral: Math.abs(nominalValue - realValue) < 0.1,  // Aproximadamente igual
    equilibrium: {
      check: Math.abs(nominalValue - realValue) < 0.1,
      deviation: parseFloat(Math.abs(nominalValue - realValue).toFixed(2))
    }
  };
}

// ─────────────────────────────────────────────────────────────────
// 2. SISTEMA BANCARIO - MULTIPLICADOR MONETARIO
// ─────────────────────────────────────────────────────────────────
function bankingMultiplier(MB, r) {
  /**
   * Ecuación: M1 = (1/r) × MB
   * Donde:
   * - MB: Base monetaria
   * - r: Tasa de reserva obligatoria
   * - m: Multiplicador (1/r)
   */

  const multiplier = 1 / r;
  const M1 = multiplier * MB;

  return {
    multiplier: parseFloat(multiplier.toFixed(4)),
    moneySupply: parseFloat(M1.toFixed(2)),
    baseMonetary: MB,
    reserveRate: r,
    creditCreated: parseFloat((M1 - MB).toFixed(2))  // Crédito creado neto
  };
}

// ─────────────────────────────────────────────────────────────────
// 3. CASCADA DE CRÉDITO (Rondas de depósitos)
// ─────────────────────────────────────────────────────────────────
function generateCreditRounds(MB, r, maxRounds = 10) {
  /**
   * Simula las rondas sucesivas de creación de depósitos
   * en el sistema bancario
   */

  let rounds = [];
  let remainingDeposits = MB;
  let totalDeposits = MB;
  let totalReserves = 0;
  let totalLoans = 0;

  for (let i = 0; i < maxRounds; i++) {
    const reserves = remainingDeposits * r;
    const loanable = remainingDeposits * (1 - r);

    rounds.push({
      round: i + 1,
      deposits: parseFloat(remainingDeposits.toFixed(2)),
      reserves: parseFloat(reserves.toFixed(2)),
      loans: parseFloat(loanable.toFixed(2)),
      remaining: parseFloat(loanable.toFixed(2))
    });

    totalReserves += reserves;
    totalLoans += loanable;
    remainingDeposits = loanable;

    // Parar cuando sea negligible
    if (remainingDeposits < 0.01) break;
  }

  return {
    rounds: rounds,
    summary: {
      totalRounds: rounds.length,
      totalDeposits: parseFloat((totalDeposits + totalLoans).toFixed(2)),
      totalReserves: parseFloat(totalReserves.toFixed(2)),
      totalLoans: parseFloat(totalLoans.toFixed(2))
    }
  };
}

// ─────────────────────────────────────────────────────────────────
// 4. DEMANDA DE DINERO
// ─────────────────────────────────────────────────────────────────
function demandForMoney(Y, k, h, i) {
  /**
   * Ecuación: M^d = kY - hi
   * Donde:
   * - Y: Producto agregado (motivo transacciones)
   * - k: Elasticidad-renta (sensibilidad a Y)
   * - h: Semielasticidad-interés (sensibilidad a i)
   * - i: Tasa de interés (en decimales: 0.03 = 3%)
   */

  const Md = k * Y - h * i;

  return {
    demanded: parseFloat(Math.max(Md, 0).toFixed(2)),  // No puede ser negativo
    components: {
      transactional: parseFloat((k * Y).toFixed(2)),   // Motivo transacciones
      speculative: parseFloat((-h * i).toFixed(2))     // Motivo especulación
    },
    elasticity: {
      wrt_Y: k,     // Respecto a producto
      wrt_i: -h     // Respecto a tasa
    }
  };
}

// ─────────────────────────────────────────────────────────────────
// 5. CURVA DE DEMANDA DE DINERO (múltiples puntos)
// ─────────────────────────────────────────────────────────────────
function demandCurve(Y, k, h) {
  /**
   * Genera puntos de la curva demanda de dinero
   * variando la tasa de interés de 0% a 8%
   */

  const curve = [];
  for (let i = 0; i <= 8; i += 0.5) {
    const iDecimal = i / 100;  // Convertir a decimal
    const Md = k * Y - h * iDecimal;
    curve.push({
      x: parseFloat(i.toFixed(1)),      // Tasa de interés en %
      y: parseFloat(Math.max(Md, 0).toFixed(2))  // Dinero demandado
    });
  }
  return curve;
}

// ─────────────────────────────────────────────────────────────────
// 6. EQUILIBRIO MONETARIO
// ─────────────────────────────────────────────────────────────────
function findMonetaryEquilibrium(Ms, Y, k, h) {
  /**
   * Encuentra la tasa de interés de equilibrio (i*)
   * donde M^s = M^d
   * M^s = kY - hi* → i* = (kY - M^s) / h
   */

  const iStar = (k * Y - Ms) / h;
  const iStarPercent = iStar * 100;

  // Demanda en equilibrio
  const Md = k * Y - h * iStar;

  return {
    equilibriumRate: parseFloat(iStarPercent.toFixed(2)),
    ratePercent: parseFloat(iStarPercent.toFixed(2)),
    demandsAtEquilibrium: parseFloat(Math.max(Md, 0).toFixed(2)),
    supplyOffered: Ms,
    imbalance: parseFloat(Math.abs(Ms - Md).toFixed(2)),
    condition: Math.abs(Ms - Md) < 0.1 ? 'Equilibrio' : (Ms > Md ? 'Dinero abundante' : 'Dinero escaso'),
    pressures: iStarPercent > 3 ? 'Inflacionista (dinero escaso)' : 'Deflacionista (dinero abundante)'
  };
}

// ─────────────────────────────────────────────────────────────────
// 7. TRANSMISIÓN MONETARIA
// ─────────────────────────────────────────────────────────────────
function monetaryTransmission(impulsePercent, elasticity = 0.5) {
  /**
   * Simula el efecto de un cambio en la oferta monetaria
   * a través del modelo de demanda agregada
   *
   * impulsePercent: % cambio en M (ej: +10 = expansión 10%)
   * elasticity: cómo responde la demanda agregada a cambios monetarios
   */

  const demandShift = (impulsePercent / 100) * elasticity;
  const outputEffect = demandShift * 0.7;      // 70% en cantidad
  const priceEffect = demandShift * 0.3;       // 30% en precios
  const interestRateEffect = -demandShift * 0.5; // Relación inversa

  return {
    impulse: parseFloat(impulsePercent.toFixed(1)),
    demandShift: parseFloat((demandShift * 100).toFixed(2)),
    outputEffect: parseFloat((outputEffect * 100).toFixed(2)),  // % cambio en Y
    priceEffect: parseFloat((priceEffect * 100).toFixed(2)),    // % cambio en P
    interestRateEffect: parseFloat((interestRateEffect * 100).toFixed(2)), // % cambio en i
    scenario: classifyMonetaryScenario(impulsePercent)
  };
}

// ─────────────────────────────────────────────────────────────────
// 8. CLASIFICACIÓN DE ESCENARIOS
// ─────────────────────────────────────────────────────────────────
function classifyMonetaryScenario(impulsePercent) {
  if (impulsePercent > 0 && impulsePercent <= 15) {
    return 'Expansión Suave';
  } else if (impulsePercent > 15) {
    return 'Expansión Agresiva';
  } else if (impulsePercent < 0 && impulsePercent >= -15) {
    return 'Contracción Moderada';
  } else if (impulsePercent < -15) {
    return 'Contracción Severa';
  } else {
    return 'Status Quo';
  }
}

// ─────────────────────────────────────────────────────────────────
// 9. AGREGADOS MONETARIOS
// ─────────────────────────────────────────────────────────────────
function monetaryAggregates(M1, savingsRatio = 0.67, otherLiquidRatio = 0.6) {
  /**
   * Calcula M2 y M3 basado en M1 y ratios de comportamiento
   * M1: Efectivo + cuentas a la vista
   * M2 = M1 × (1 + savingsRatio)
   * M3 = M2 × (1 + otherLiquidRatio)
   */

  const M2 = M1 * (1 + savingsRatio);
  const M3 = M2 * (1 + otherLiquidRatio);

  return {
    M1: parseFloat(M1.toFixed(2)),
    M2: parseFloat(M2.toFixed(2)),
    M3: parseFloat(M3.toFixed(2)),
    composition: {
      M1_label: 'Efectivo + Cuentas a la vista',
      M2_additional: parseFloat((M2 - M1).toFixed(2)),
      M2_label: 'M1 + Depósitos de ahorro',
      M3_additional: parseFloat((M3 - M2).toFixed(2)),
      M3_label: 'M2 + Otros activos líquidos'
    }
  };
}

// ─────────────────────────────────────────────────────────────────
// 10. UTILIDADES DE FORMATEO
// ─────────────────────────────────────────────────────────────────
function formatPercentage(value, decimals = 1) {
  return parseFloat((value * 100).toFixed(decimals)) + '%';
}

function formatCurrency(value, decimals = 2) {
  return parseFloat(value.toFixed(decimals)).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

// ═══════════════════════════════════════════════════════════════════
// EXPORTAR FUNCIONES (para uso en HTML)
// ═══════════════════════════════════════════════════════════════════

// Por compatibilidad con navegadores sin módulos ES6, también exponemos globalmente
if (typeof window !== 'undefined') {
  window.TEMA2 = {
    quantitativeTheory,
    bankingMultiplier,
    generateCreditRounds,
    demandForMoney,
    demandCurve,
    findMonetaryEquilibrium,
    monetaryTransmission,
    classifyMonetaryScenario,
    monetaryAggregates,
    formatPercentage,
    formatCurrency
  };
}
