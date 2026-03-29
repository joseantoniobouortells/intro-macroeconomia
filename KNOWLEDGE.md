# 🧠 Project Knowledge Base - Macroeconomía Interactiva

Este documento centraliza la lógica económica y los estándares de construcción para maximizar la precisión y eficiencia de los agentes de IA.

## 📘 Lógica Económica (Capítulo 9 CORE)

### 📈 Curva de Fijación de Salarios (WS)
- **Fórmula:** $W/P = B + a / (1 - e)$
- **Comportamiento:** Pendiente positiva. A medida que sube el empleo ($e$), sube el poder de negociación y el salario real exigido.
- **Desplazamientos:** 
    - Sube con mayor poder sindical o mejores prestaciones por desempleo ($B \uparrow$).
    - Baja con políticas que reducen la desutilidad del trabajo o aumentan la oferta laboral.

### 💰 Curva de Fijación de Precios (PS)
- **Fórmula:** $W/P = \lambda(1 - \mu)$
- **Comportamiento:** Horizontal. El salario real que las empresas pagan depende de la productividad ($\lambda$) y la competencia (markup $\mu$).
- **Desplazamientos:** 
    - Sube con progreso tecnológico ($\lambda \uparrow$).
    - Baja con mayor poder de mercado de las empresas ($\mu \uparrow$).

### ⚖️ Equilibrio de Nash ($u^*$)
- Se produce donde $WS = PS$.
- Determina la **tasa de desempleo natural**. Cualquier punto fuera de aquí (como el Punto B) genera presiones inflacionistas o deflacionistas.

### 📢 Efecto de los Sindicatos
- **Efecto Negociación (Bargaining):** Los sindicatos negocian salarios por encima de la WS original. **Resultado:** WS se desplaza hacia arriba $\rightarrow$ empleo disminuye.
- **Efecto Voz (Voice):** La participación y reconocimiento reducen la desutilidad del trabajo. **Resultado:** WS se desplaza hacia abajo $\rightarrow$ el empleo puede aumentar, contrarrestando el efecto negociación.
- **Salario Real:** Si la curva PS es horizontal, el salario real de equilibrio no cambia con la negociación sindical pura; solo varía el nivel de empleo.

### 📊 Desigualdad (Lorenz y Gini)
- **Grupos del Modelo:** El producto se reparte entre Desempleados (0 ingresos), Empleados (salarios) y Propietarios (beneficios).
- **Participación Salarial (s):** $s = w / \lambda$ (proporción del producto que va a los trabajadores).
- **Coeficiente de Gini (g):** $g = u + n - s(1 - u)$.
- **Determinantes de Desigualdad:**
    - **Aumenta Gini:** ↑ Desempleo ($u$), ↓ Salario real ($w$), ↑ Markup ($\mu$), ↑ Productividad ($\lambda$) sin subida de salarios.
    - **Disminuye Gini:** ↑ Competencia (↓ $\mu$, ↑ $w$), ↑ Empleo.

---

## 📘 Lógica Económica (Capítulo 10 CORE) — TEMA 2

### ⏳ Elección Intertemporal
- **Concepto:** Cómo los agentes (Julia/Marco) distribuyen su consumo entre el presente (c0) y el futuro (c1).
- **Frontera Factible:** Pendiente determinada por la Tasa Marginal de Transformación (TMT) = 1 + r.
- **Curva de Indiferencia:** Pendiente determinada por la Tasa Marginal de Sustitución (TMS) = 1 + ρ (donde ρ es la impaciencia pura).
- **Equilibrio:** Tangencia donde TMS = TMT (1 + ρ = 1 + r).
- **Efectos de r:**
    - **Sustitución:** ↑r hace el consumo presente más caro → ↓c0.
    - **Ingreso:** Depende de si el agente es prestatario (Julia: ↓c0) o ahorrador (Marco: ↑c0).

### 📊 Balances y Apalancamiento
- **Identidad Contable:** Activos = Pasivos + Patrimonio Neto.
- **Insolvencia:** Patrimonio Neto < 0 (Los pasivos exceden a los activos).
- **Ratio de Apalancamiento:** Activos Totales / Patrimonio Neto.
- **Vulnerabilidad Bancaria:** El alto apalancamiento (ej. 33:1) implica que pérdidas mínimas en los activos (3%) pueden borrar todo el capital propio, provocando insolvencia.

## 🎨 Estándares de UI (Apple Ecosystem Style)

Para mantener la consistencia visual y el ahorro de tokens, **use SIEMPRE** estas clases CSS definidas en `assets/style.css`:

| Componente | Clase CSS | Propósito |
| :--- | :--- | :--- |
| **Valor Principal** | `.metric-value` | Tipografía gigante (2.2rem) para decimales. |
| **Tarjeta Métrica** | `.metric-card` | Fondo blanco, bordes redondeados suaves. |
| **Panel de Control** | `.controls-card` | Fondo oscuro (`#1d1d1f`) para sliders. |
| **Bloque KaTeX** | `.formula-display` | Contenedor azul claro para ecuaciones. |
| **Parámetro** | `.formula-param-item`| Fila con nombre de variable y valor destacado. |
| **Píldora Examen**| `.exam-box` | Caja dorada con icono de birrete para tips de examen. |

## 🛠️ Reglas de Implementación
1. **Navegación:** Use siempre el componente `.site-nav` (sticky navbar). Debe incluir un enlace `.nav-back` con el texto "‹ Tema N" que apunte al `index.html` de la carpeta actual, un `.nav-center` con el título del grado y un `.nav-spacer` para equilibrar el layout.
2. **Gráficos:** Use `Chart.js` con `type: 'linear'` para el eje X si usa coordenadas `{x, y}`.
3. **Matemáticas:** Renderice siempre con `KaTeX` usando la función `CORE.kHTML` (o equivalente) para asegurar legibilidad.
4. **Javascript:** Importe siempre `assets/economic-logic.js` para usar las fórmulas validadas.
5. **Exámenes:** Si una herramienta tiene una pregunta relacionada en `EXAMS.md`, integre un `.exam-box` al final de la sección de explicación para guiar al estudiante.

