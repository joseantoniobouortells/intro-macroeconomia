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
1. **Gráficos:** Use `Chart.js` con `type: 'linear'` para el eje X si usa coordenadas `{x, y}`.
2. **Matemáticas:** Renderice siempre con `KaTeX` usando la función `CORE.kHTML` (o equivalente) para asegurar legibilidad.
3. **Javascript:** Importe siempre `assets/economic-logic.js` para usar las fórmulas validadas.
4. **Exámenes:** Si una herramienta tiene una pregunta relacionada en `EXAMS.md`, integre un `.exam-box` al final de la sección de explicación para guiar al estudiante.

