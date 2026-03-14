/**
 * ⚓ CORE Economics - Capítulo 9: Mercado del Trabajo
 * Lógica económica centralizada para minimizar redundancia.
 */

const CORE_MODELS = {
  /**
   * Curva de Fijación de Precios (PS)
   * W/P = λ(1 - μ)
   */
  calculatePS(lambda, mu) {
    return lambda * (1 - mu);
  },

  /**
   * Curva de Fijación de Salarios (WS)
   * W/P = B + a / (1 - e)
   * @param {number} e - Tasa de empleo (0 a 1)
   * @param {number} B - Salario de reserva
   * @param {number} a - Coste del esfuerzo
   */
  calculateWS(e, B, a) {
    if (e >= 0.99) return B + a * 100; // Evitar división por cero
    return B + a / (1 - e);
  },

  /**
   * Determina el Equilibrio de Nash (u*)
   * B + a / u = λ(1 - μ)  => u* = a / (λ(1-μ) - B)
   */
  findEquilibrium(B, a, lambda, mu) {
    const ps = this.calculatePS(lambda, mu);
    if (ps <= B) return null; // No hay equilibrio factible
    
    const uStar = a / (ps - B);
    if (uStar <= 0 || uStar >= 1) return null;
    
    return {
      uStar: uStar,
      eStar: 1 - uStar,
      wpStar: ps
    };
  },

  /**
   * Brecha de Negociación (Bargaining Gap)
   * gap = (WS - PS) / PS
   */
  calculateBargainingGap(currentWS, currentPS) {
    return (currentWS - currentPS) / currentPS;
  }
};

// Exportar para uso en herramientas
if (typeof window !== 'undefined') {
  window.CORE = CORE_MODELS;
}
