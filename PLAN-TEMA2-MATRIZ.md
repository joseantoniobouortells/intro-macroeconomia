# 🎯 Matriz de Decisión — Tema 2

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PLAN TEMA 2: VALIDACIÓN RÁPIDA                         │
└─────────────────────────────────────────────────────────────────────────────┘

  ASPECTO                  TEMA 1 (Referencia)       TEMA 2 (Propuesto)     VALIDAR
  ─────────────────────────────────────────────────────────────────────────────

  📚 Contenido Teórico     El Mercado del Trabajo   Bancos y Crédito       ✅ OK?
  Capítulo                 Cap. 9 CORE              Cap. 10 CORE

  🛠️  Herramientas         6 herramientas           6 herramientas         ✅ OK?
  - Curva WS               - Rol del Dinero
  - Curva PS               - Sistema Bancario
  - Equilibrio General     - Demanda de Dinero
  - Multiplicador          - Oferta de Dinero
  - Productividad          - Equilibrio Monetario
  - Inflación              - Política Monetaria

  📊 Gráficos              Chart.js (lineal 2D)     Chart.js (múltiples)   ✅ OK?
  Interactividad           Sliders tiempo real      Sliders tiempo real

  🎨 Diseño                Apple-style              Apple-style             ✅ OK?
  Colores                  #0071e3, #1d1d1f         Mismo                  Mismos
  Tipografía               SF Pro Display           SF Pro Display         Mismos

  🧮 Matemáticas           KaTeX para ecuaciones    KaTeX para ecuaciones  ✅ OK?
  Precisión                Validada en CORE         Validada en CORE Cap.10

  📱 Responsividad         Mobile-first (680px)     Mobile-first (680px)   ✅ OK?
  Navegación               Navbar sticky            Navbar sticky          Igual

  🏛️  Gobernanza           MAP.md + KNOWLEDGE.md    MAP.md + KNOWLEDGE.md  ✅ OK?
                           + EXAMS.md               + EXAMS.md

  🎓 Píldoras Examen       2-3 por herramienta      2-3 por herramienta    ✅ OK?
  Base de datos            Preguntas reales examen  Preguntas reales (Cap10)

  🚀 Deployment            GitHub Pages             GitHub Pages           ✅ OK?
  Rama                     main                     main

  🔄 Workflow              commit + push            commit + push          ✅ OK?
  Automatización           Manual (user)            Manual (user)

  ⏱️  Tiempo Estimado       ~3.5 horas (8 horas)    ~3.5 horas (6-8 hrs)   ✅ OK?
  Token Budget             ~30K                     ~30K

└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔀 Decisión Clave: Orden de Implementación

```
┌──────────────────────────────────────────────────────────────────┐
│  ¿IMPLEMENTAR EN UNA SESIÓN CONTINUA O POR BLOQUES?             │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  OPCIÓN A: Una Sesión (Recomendado)                            │
│  ─────────────────────────────────────────────────────────────  │
│  • Implementar herramientas 1-6 consecutivas                   │
│  • Gobernanza al final (MAP, KNOWLEDGE, EXAMS)                │
│  • 1 commit grande: "Feat: Tema 2 completo"                   │
│  ✅ Ventajas: Eficiencia, consistencia de contexto             │
│  ❌ Desventajas: Alto riesgo de context exhaustion             │
│                                                                  │
│  OPCIÓN B: Por Bloques (2-3 sesiones)                         │
│  ─────────────────────────────────────────────────────────────  │
│  • Sesión 1: Herramientas 1-2 (Dinero, Bancos)               │
│  • Sesión 2: Herramientas 3-4 (Demanda, Oferta)              │
│  • Sesión 3: Herramientas 5-6 (Equilibrio, Política)         │
│  • Gobernanza: Actualizar incrementalmente                    │
│  ✅ Ventajas: Bajo riesgo, testing progresivo                 │
│  ❌ Desventajas: Requiere 2-3 startups + contexto             │
│                                                                  │
│  OPCIÓN C: Hibrida (Recomendada)                              │
│  ─────────────────────────────────────────────────────────────  │
│  • Sesión 1: Herramientas 1-3 (Dinero + Demanda)            │
│  • Pausa, validar, commit                                      │
│  • Sesión 2: Herramientas 4-6 (Oferta + Equilibrio + Política)│
│  • Gobernanza al cierre de cada sesión                        │
│  ✅ Ventajas: Balance de eficiencia y seguridad               │
│  ❌ Desventajas: Mínimas                                       │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

TU ELECCIÓN: [ A | B | C ]
```

---

## 📋 Checklist de Dependencias

Antes de empezar, verificar:

```
✅ Assets de Tema 1 disponibles:
   ☐ /tema-1/assets/style.css       (se copiará o referenciará)
   ☐ /tema-1/assets/economic-logic.js
   ☐ KaTeX librería (debe estar en assets globales)
   ☐ Chart.js librería

✅ Acceso a GitHub:
   ☐ SSH alias 'ghp' funcional
   ☐ Rama 'main' como default
   ☐ GitHub Pages habilitado

✅ Archivos de Gobernanza Actualizados:
   ☐ MAP.md existe
   ☐ KNOWLEDGE.md existe
   ☐ EXAMS.md existe
   ☐ README.md actualizado
```

---

## 🎬 Flujo Después de Validación

```
Usuario Valida (V1-V6)
        ↓
   [SÍ a todo]
        ↓
   Claude Crea:
   - Carpeta /tema-2/
   - index.html (menú)
   - 6 × .html (herramientas)
   - assets/ (copia de Tema 1 + nuevas fórmulas)
        ↓
   Claude Implementa (Opción Elegida):
   - [A] Una sesión: 1-6 + gobernanza
   - [B] Tres sesiones: bloques
   - [C] Dos sesiones: 1-3, 4-6
        ↓
   Commits por Sesión:
   - "Feat: Tema 2.1 — Dinero y Sistema Bancario"
   - "Feat: Tema 2.2 — Demanda y Oferta Monetaria"
   - "Feat: Tema 2.3 — Equilibrio y Política Monetaria"
   - "Docs: Actualizar MAP, KNOWLEDGE, EXAMS"
        ↓
   [Push a GitHub]
        ↓
   Validar GitHub Pages:
   - https://joseantoniobouortells.github.io/intro-macroeconomia/web/
   - Tema 2 visible en menú
   - Las 6 herramientas funcionales
        ↓
   ✅ COMPLETADO
```

---

## 🎓 Referencia de Conceptos Clave (Para Validación Teórica)

| Concepto | Libro CORE Cap. 10 | Fórmula | Rango Parámetros |
|----------|------------------|--------|-----------------|
| Teoría Cuantitativa | p. XX | $MV = PY$ | M: 20-100, V: 1.5-4 |
| Multiplicador | p. XX | $m = 1/r$ | r: 0.05-0.30 |
| Demanda de Dinero | p. XX | $M^d = kY - hi$ | k: 0.3-0.8, h: 1-10 |
| Equilibrio | p. XX | $M^s = M^d$ | Intersección |
| Transmisión | p. XX | $\Delta M → i → I → Y$ | Elasticidades |

**Nota:** Los números de página (XX) deben validarse con el PDF de CORE Cap. 10.

---

## 📊 Comparativa de Complejidad

```
Herramienta          Complejidad    Dependencias    Tiempo Est.
────────────────────────────────────────────────────────────────
1. Rol del Dinero    ⭐⭐           Ninguna         30 min
2. Sistema Bancario  ⭐⭐⭐          Tabla, Cascada  40 min
3. Demanda Dinero    ⭐⭐⭐          Curva 2D        35 min
4. Oferta Dinero     ⭐⭐           Tablas, Pie     25 min
5. Equilibrio        ⭐⭐⭐          2 Curvas        35 min
6. Política Monetaria ⭐⭐⭐⭐       4+ Gráficos     45 min
────────────────────────────────────────────────────────────────
TOTAL                                              210 min (~3.5h)
```

---

## 🚨 Riesgos Identificados y Mitigación

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|-----------|
| Context exhaustion en sesión 1 | Media | Optar por Opción C (bloques) |
| Errores de cálculo matemático | Baja | Validar fórmulas vs CORE Cap.10 |
| Gráficos Chart.js con lag | Baja | Testing en múltiples resoluciones |
| Inconsistencia de diseño | Muy baja | Usar CSS de Tema 1 como base |
| GitHub Pages no actualiza | Muy baja | Verificar rama 'main' y settings |
| Preguntas de examen inexactas | Baja | Usar PLAN-TEMA2-EXAMS.md como anchor |

---

## ✨ Valor Agregado de Este Plan

```
Antes (sin plan):
  ❌ No claro qué es Tema 2
  ❌ Sin estructura de herramientas
  ❌ No sabemos qué gráficos, ecuaciones, etc.
  ❌ Riesgo de incoherencia con Tema 1

Con este plan:
  ✅ 6 herramientas claramente mapeadas
  ✅ Ecuaciones ancladas en CORE Cap. 10
  ✅ Estructura de carpetas definida
  ✅ Gobernanza integrada (MAP, KNOWLEDGE, EXAMS)
  ✅ 16 preguntas de examen reales incluidas
  ✅ Estimación de tokens y tiempo realista
  ✅ Opción de 3 calendarios posibles
  ✅ Checklist de dependencias
  ✅ Matriz de decisión clara
```

---

## 🎯 Próximo Paso: TU VALIDACIÓN

**Responde estas 6 preguntas (copia abajo):**

```
✅ V1 - Mapeo de Conceptos:    [ SÍ / NO / Sugerencia: ]
✅ V2 - Orden de Herramientas:  [ SÍ / Cambiar a: ]
✅ V3 - Estructura de Carpetas: [ SÍ / NO / Cambios: ]
✅ V4 - Proceso de Gobernanza:  [ OK / Preocupación: ]
✅ V5 - Estimación de Tokens:   [ Realista / Más / Menos ]
✅ V6 - Calendario:             [ Opción: A / B / C ]

📝 NOTAS ADICIONALES:


🚀 ¿PROCEDER CON IMPLEMENTACIÓN?  [ SÍ / ESPERAR / CAMBIOS ]
```

