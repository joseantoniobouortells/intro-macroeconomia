# 🚀 Plan Tema 2 — Resumen Ejecutivo para Validación

## ✅ ¿QUÉ ESTÁS VALIDANDO?

Un plan **completo y modular** para implementar **Tema 2: Bancos y Crédito (Capítulo 10)** replicando exactamente la estructura exitosa de Tema 1.

---

## 📊 De Una Mirada: Las 6 Herramientas

| # | Herramienta | Ecuación Clave | Variables | Tipo de Gráfico | Complejidad |
|---|---|---|---|---|---|
| 1 | **Rol del Dinero** | $M \times V = P \times Y$ | 4 sliders (M, V, P, Y) | 2 líneas | ⭐ Media |
| 2 | **Sistema Bancario** | $m = 1/r$; $M_1 = m × MB$ | 2 sliders (r, MB) | Cascada + tabla | ⭐⭐ Alta |
| 3 | **Demanda de Dinero** | $M^d = kY - hi$ | 3 sliders (Y, k, h) | Curva decreciente | ⭐⭐ Alta |
| 4 | **Oferta de Dinero** | M1, M2, M3 | Control BC | 2 gráficos (barra + pie) | ⭐ Media |
| 5 | **Equilibrio Monetario** | $M^s = M^d$ | 4 sliders (Ms, Y, k, h) | 2 curvas + intersección | ⭐⭐ Alta |
| 6 | **Política Monetaria** | Transmisión: $\Delta M → \Delta i → \Delta I → \Delta Y$ | 1 slider principal | 4 gráficos | ⭐⭐⭐ Muy Alta |

---

## 🎯 Validaciones Necesarias (Elige SÍ o NO)

### V1: ¿Están bien mapeados los 6 conceptos?
Tema 2 trata sobre **dinero, crédito y política monetaria**. Los 6 conceptos arriba cubren:
- ✅ Definición y rol del dinero (herramienta 1)
- ✅ Creación de dinero por el sistema bancario (herramienta 2)
- ✅ Demanda por dinero de los agentes (herramienta 3)
- ✅ Oferta de dinero del BC (herramienta 4)
- ✅ Equilibrio en el mercado de dinero (herramienta 5)
- ✅ Efectos reales de cambios monetarios (herramienta 6)

**¿Validar? (SÍ / Cambiar concepto X)**

---

### V2: ¿Es el orden de implementación lógico?
Propuesto: 1 → 2 → 3 → 4 → 5 → 6

Rationale:
- Herramienta 1 establece la identidad monetaria (QTM)
- Herramientas 2-4 explican **oferta** (BC y bancos) y **demanda** (agentes)
- Herramienta 5 combina oferta + demanda → equilibrio
- Herramienta 6 muestra impacto en variables reales

**¿Cambiar el orden?**

---

### V3: ¿Aceptas la estructura de carpetas?
```
/tema-2/
  ├── index.html                      (menú hub)
  ├── rol-del-dinero.html
  ├── sistema-bancario.html
  ├── demanda-dinero.html
  ├── oferta-dinero.html
  ├── equilibrio-monetario.html
  ├── politica-monetaria.html
  └── assets/
      ├── style.css                   (compartido con Tema 1)
      ├── economic-logic.js           (nuevas fórmulas monetarias)
      └── chart-config.js             (patrones gráficos)
```

**¿OK? (SÍ / Cambiar estructura)**

---

### V4: ¿Validamos el alcance de gobernanza?
Se actualizarán estos archivos:
- ✅ `MAP.md` — Agregar sección Tema 2 con las 6 herramientas
- ✅ `KNOWLEDGE.md` — Agregar lógica monetaria (ecuaciones, variables)
- ✅ `EXAMS.md` — Agregar 16 preguntas tipo con píldoras de examen
- ✅ `README.md` — Línea sobre "Tema 2: 6 herramientas sobre dinero y crédito"
- ✅ `/tema-2/index.html` — Creado y actualizado en el menú principal

**¿Proceso OK?**

---

### V5: ¿Estimación de Tokens Realista?
Esperado: **~30K tokens** en 6 herramientas (no incluye gobernanza)

Desglose:
- Herramienta 1 (QTM): ~4K
- Herramienta 2 (Multiplicador): ~5K
- Herramienta 3 (Demanda): ~4.5K
- Herramienta 4 (Oferta): ~3.5K
- Herramienta 5 (Equilibrio): ~4.5K
- Herramienta 6 (Política): ~6K

¿Esperas más o menos?

---

### V6: ¿Aceptas el calendario?
**Tiempo estimado:** 3-4 horas de implementación continua
- ~30-45 min por herramienta
- Incluye: HTML + CSS + JS + píldoras examen + gráficos

¿Procedes en una sesión o por bloques?

---

## 🔗 Archivos Generados para Ti

Todos están en `/web/`:

1. **`PLAN-TEMA2.md`** ← Plan de alto nivel (estructura + herramientas)
2. **`PLAN-TEMA2-DETALLES-TECNICOS.md`** ← Código JavaScript + HTML detallado
3. **`PLAN-TEMA2-EXAMS.md`** ← 16 preguntas reales de examen mapeadas
4. **`PLAN-TEMA2-RESUMEN.md`** ← Este archivo (validación rápida)

---

## 🎯 Próximo Paso Después de Validación

Una vez que **valides todas las V1-V6 arriba**, procederé así:

1. **Crear estructura de carpetas** `/tema-2/` y archivos base (`.html` vacíos)
2. **Actualizar `index.html` del web** para mostrar Tema 2 en el menú principal
3. **Implementar herramientas en orden** (1 → 2 → 3 → 4 → 5 → 6)
4. **Actualizar gobernanza** (MAP, KNOWLEDGE, EXAMS) en paralelo
5. **Commit y push a GitHub** con mensaje: "Feat: Tema 2 — 6 herramientas sobre dinero y crédito"

---

## 💬 Formato de Validación Recomendado

Responde así (copy-paste y rellena):

```
✅ V1: [SÍ / NO / Cambiar a: ___]
✅ V2: [SÍ / Cambiar orden a: ___]
✅ V3: [SÍ / NO / Cambiar estructura]
✅ V4: [SÍ / Preocupación: ___]
✅ V5: [Realista / Espero más tokens / Espero menos]
✅ V6: [Una sesión / Por bloques]

📝 Notas adicionales: [Libre]
```

---

## 📌 Recordatorio de Contexto

Este plan respeta **al 100%** la estructura exitosa de Tema 1:
- Mismos estándares de diseño (Apple-style, KaTeX, Chart.js)
- Misma estructura de gobernanza (MAP, KNOWLEDGE, EXAMS)
- Misma metodología de píldoras de examen
- Mismo workflow de git (commit + push + GitHub Pages)

**Tema 2 es una "replicación escalar" de Tema 1, no una innovación.**

Esto reduce riesgo y maximiza consistencia.

---

**¿Listo para validar?**

