# 📋 Plan de Implementación — Tema 2: Bancos y Crédito (Capítulo 10)

## 🎯 Objetivo
Replicar exactamente la estructura y metodología exitosa de Tema 1 (6 herramientas, estándares de diseño, gobernanza) para Tema 2: **Bancos, Crédito y Dinero**.

**Fuente de verdad:** `TEMA2-C10-LIBRO/LT-Tema2-Cap10-Libro.pdf` (anclado a CORE Economics Cap. 10)

---

## 📐 Fase 1: Análisis Teórico y Mapeo de Herramientas (TOKEN EFFICIENT)

### 1.1 Conceptos Clave a Extraer
Desde CORE Cap. 10, identificar:
- **Rol del dinero:** Medio de intercambio, depósito de valor, unidad de cuenta
- **Sistema bancario:** Reservas, multiplicador del dinero, creación de crédito
- **Demanda de dinero:** Transacciones, especulación
- **Oferta de dinero:** Banco central, agregados monetarios (M1, M2)
- **Equilibrio monetario:** Tasa de interés de mercado vs. natural
- **Efectos de política monetaria:** Cambios en la oferta de dinero → demanda agregada

### 1.2 Mapeo de 6 Herramientas (Analogía a Tema 1)

| # | Herramienta | Concepto Económico | Variables Clave | Tipo Interacción |
|---|---|---|---|---|
| **1** | **Rol del Dinero** | Función monetaria | Velocidad, inflación, valores reales | Deslizador velocidad (v) |
| **2** | **Sistema Bancario** | Multiplicador bancario | Reservas (r), depósitos, dinero creado | Deslizador tasa reserva |
| **3** | **Demanda de Dinero** | Teoría cuantitativa | Y (producto), P (precios), i (tasa) | Deslizador Y, P, i |
| **4** | **Oferta de Dinero** | Control BC y agregados | M1, M2, base monetaria | Deslizador M, control BC |
| **5** | **Equilibrio Monetario** | IS-LM simplificado | Tasa natural, inflación, expectativas | Deslizador oferta vs demanda |
| **6** | **Política Monetaria** | Impacto en demanda agregada | Multiplicador monetario, impulso | Escenarios: expansión, contracción |

---

## 🏗️ Fase 2: Estructura de Carpetas y Archivos

```
/tema-2/
  ├── index.html                         [Menú hub de Tema 2]
  ├── rol-del-dinero.html               [Herramienta 1]
  ├── sistema-bancario.html             [Herramienta 2]
  ├── demanda-dinero.html               [Herramienta 3]
  ├── oferta-dinero.html                [Herramienta 4]
  ├── equilibrio-monetario.html         [Herramienta 5]
  ├── politica-monetaria.html           [Herramienta 6]
  └── assets/
      ├── style.css                      [Estilos compartidos con Tema 1]
      ├── economic-logic.js              [Fórmulas monetarias: QTM, multiplicador]
      └── chart-config.js                [Configuración estándar de Chart.js]
```

---

## 🛠️ Fase 3: Implementación de Herramientas (Orden Recomendado)

### Herramienta 1: Rol del Dinero
**Concepto:** Teoría cuantitativa del dinero (QTM): $MV = PY$

**Componentes visuales:**
- Ecuación KaTeX: $M \times V = P \times Y$
- 4 sliders: M (cantidad dinero), V (velocidad), P (nivel precios), Y (producto)
- 2 gráficos Chart.js:
  - Izq: Efecto nominal (M aumenta) vs real (ajuste de P)
  - Dch: Evolución de valores reales (Y/P constante si V constante)
- Métrica grande: Valor real del dinero (M/P)
- Píldora examen: Pregunta sobre neutralidad del dinero

**Validación teórica:**
- Si M ↑ y V, Y constantes → P ↑ (neutralidad)
- Si M ↑ impactando Y → debate clásico vs keynesiano

---

### Herramienta 2: Sistema Bancario
**Concepto:** Multiplicador bancario: $M = m \times MB$ donde $m = 1/r$

**Componentes visuales:**
- Ecuación KaTeX: $M_1 = \frac{1}{r} \times MB$
- 2 sliders:
  - r = Tasa de reserva obligatoria (0.05 a 0.30)
  - MB = Base monetaria (ajustable por BC)
- Gráfico cascada: Depósitos iniciales → Reservas → Depósitos secundarios (iterativo)
- Métrica grande: Multiplicador monetario (m = 1/r)
- Tabla: Rondas de creación de crédito
- Píldora examen: Efecto de cambio en reservas sobre M

---

### Herramienta 3: Demanda de Dinero
**Concepto:** $M^d = L(Y, i) = kY - hi$ (modelo clásico simplificado)

**Componentes visuales:**
- Ecuación KaTeX con parámetros k, h
- 3 sliders:
  - Y = Producto agregado (2 a 5)
  - i = Tasa de interés (0% a 8%)
  - k = Elasticidad renta (0.3 a 0.8)
- Gráfico 2D: Curva demanda dinero (relación negativa con i)
- Métrica grande: Cantidad demandada (M^d)
- Explicación dinámica: "Mayor Y → M^d sube" / "Mayor i → M^d baja"

---

### Herramienta 4: Oferta de Dinero
**Concepto:** Control del Banco Central mediante instrumentos (tipo descuento, RO, OMA)

**Componentes visuales:**
- Comparación 2 gráficos:
  - Agregados monetarios (M1 vs M2 vs M3)
  - Base monetaria y su descomposición
- 2 sliders:
  - Oferta BC (directa)
  - Multiplicador (para ver impacto)
- Tabla: Componentes de M1, M2
- Píldora examen: Diferencia M1 vs M2

---

### Herramienta 5: Equilibrio Monetario
**Concepto:** Intersección Md = Ms, determinación de i*

**Componentes visuales:**
- Gráfico 2D: Curva demanda (negativa) y oferta (vertical)
- 4 sliders:
  - Ms (oferta BC)
  - Y (desplaza Md)
  - k (pendiente Md)
  - i natural (para comparación)
- Métrica grande: Tasa de equilibrio (i*)
- Señalización: Si Ms > Md → presión inflacionista; Si Ms < Md → deflacionista
- Píldoras examen: 2 preguntas sobre desequilibrios

---

### Herramienta 6: Política Monetaria
**Concepto:** Impactos de cambios en Ms sobre demanda agregada (transmisión monetaria)

**Componentes visuales:**
- Gráfico principal: DA, oferta agregada, punto de equilibrio
- Slider único: "Impulso monetario" (expansión -100% a +100%)
- Tabla de escenarios pre-configurados:
  - Expansión suave: +10% Ms
  - Expansión agresiva: +25% Ms
  - Contracción: -20% Ms
- Dos gráficos secundarios:
  - Impacto en Y y P
  - Impacto en tasa de interés y velocidad
- Píldoras examen: 3 preguntas sobre transmisión monetaria

---

## 📄 Fase 4: Actualización de Archivos de Gobernanza

### 4.1 Actualizar `MAP.md`
```markdown
- `tema-2/`: Bancos y Crédito (Capítulo 10 CORE).
    - `index.html`: Menú de herramientas del tema.
    - `rol-del-dinero.html`: Teoría cuantitativa (MV=PY).
    - `sistema-bancario.html`: Multiplicador bancario (m = 1/r).
    - `demanda-dinero.html`: L(Y, i) — motivos de demanda.
    - `oferta-dinero.html`: Agregados monetarios y control BC.
    - `equilibrio-monetario.html`: Determinación de tasa i*.
    - `politica-monetaria.html`: Transmisión a demanda agregada.
```

### 4.2 Actualizar `KNOWLEDGE.md`
Agregar secciones:
- **§ Lógica Monetaria (Cap. 10 CORE)**
  - Teoría cuantitativa: $MV = PY$
  - Multiplicador: $m = 1/r$
  - Demanda: $L(Y, i)$
  - Equilibrio: $M^s = M^d$

### 4.3 Actualizar `EXAMS.md`
Agregar preguntas reales de exámenes sobre:
- Efectos de política monetaria
- Multiplicador bancario
- Determinación de tipos de interés
- Transmisión monetaria

### 4.4 Actualizar `README.md`
Agregar referencia: "Tema 2 incluye 6 herramientas sobre bancos, crédito y política monetaria."

---

## ✅ Fase 5: Estándares de Calidad (Replicar Tema 1)

- **Diseño:** Estilo Apple (sf-pro, blur, sans-serif)
- **Responsividad:** Mobile-first, breakpoint 680px
- **Matemáticas:** KaTeX para todas las ecuaciones
- **Gráficos:** Chart.js con actualizaciones en tiempo real
- **UX:** Sliders suave, valores decimales visibles, explicaciones dinámicas
- **Exámenes:** Mínimo 2-3 píldoras por herramienta
- **Documentación:** Sin actualizar MAP/KNOWLEDGE = tarea incompleta

---

## 🔄 Fase 6: Testing y Deployment

1. **Local testing:** Abrir cada .html en navegador, validar:
   - Cálculos matemáticos correctos
   - Gráficos se actualizan en tiempo real
   - Responsivos en móvil (680px)
   - KaTeX renderiza correctamente

2. **Git workflow:**
   ```bash
   git add tema-2/
   git commit -m "Feat: Tema 2 (Bancos y Crédito) — 6 herramientas interactivas"
   git push origin main
   ```

3. **Verificar en GitHub Pages:** https://joseantoniobouortells.github.io/intro-macroeconomia/web/

---

## 📊 Estimación de Tokens y Complejidad

| Herramienta | Complejidad | Tokens Est. | Tiempo |
|---|---|---|---|
| Rol del Dinero | Media | 4K | 30 min |
| Sistema Bancario | Alta (gráf. cascada) | 5K | 40 min |
| Demanda de Dinero | Media-Alta | 4.5K | 35 min |
| Oferta de Dinero | Media (tablas) | 3.5K | 25 min |
| Equilibrio Monetario | Media-Alta | 4.5K | 35 min |
| Política Monetaria | Alta (múltiples gráfs) | 6K | 45 min |
| **Gobernanza + índice** | Baja | 2K | 15 min |
| **TOTAL** | — | **~30K** | **~3.5 horas** |

---

## 🎯 Flujo de Validación (Para el Usuario)

1. ✅ **Validar plan teórico:** ¿Están los 6 conceptos bien mapeados?
2. ✅ **Validar estructura:** ¿Carpetas y nombres de archivos OK?
3. ✅ **Validar orden:** ¿Implementar en orden 1→6 o distinto?
4. ✅ **Proceder:** Una vez validado, iniciamos Fase 3 (herramientas).

---

## 📌 Notas de Gobernanza
- **MAP.md** debe actualizarse DENTRO del ciclo de cada herramienta (no al final).
- **KNOWLEDGE.md** acumula la lógica matemática (crítico para coherencia).
- **Cada .html** debe importar `economic-logic.js` con fórmulas validadas.
- **Assets:** Compartir `style.css` y librerías entre Tema 1 y Tema 2 (DRY principle).

