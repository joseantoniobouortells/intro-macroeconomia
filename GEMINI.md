# ⚓ Project Spec: Introducción a la Macroeconomía (Recursos Interactivos)

Este proyecto es una plataforma educativa de alta fidelidad para el Grado en Economía. Se rige por los siguientes mandatos de gobernanza y estándares de ingeniería.

## 🎯 Objetivo y Fuente de Verdad
- **Propósito:** Herramientas visuales dinámicas para modelos de **CORE Economics**.
- **Fuentes Primarias:** 
    - **Tema 1:** Capítulo 9 (Mercado de Trabajo).
    - **Tema 2:** Capítulo 10 (Bancos, Dinero y Crédito).
    - **Tema 3:** Capítulo 13 (Fluctuaciones Económicas).
- **Referencia Crítica:** Todo modelo debe ser validado contra las figuras y fórmulas del manual antes de su implementación.

## 🎨 Estándares de UI (Apple Ecosystem Style)
- **Layout "Dashboard":** Priorizar el diseño horizontal (Gráfico a la izquierda, Sliders a la derecha) para evitar el scroll vertical y permitir feedback visual inmediato.
- **Navegación Unificada:** Cada herramienta DEBE usar el componente `.site-nav` (sticky) con:
    - Botón de retorno `‹ Tema N`.
    - Título del grado centralizado.
    - Fondo con `backdrop-filter: blur(20px)`.
- **Métricas Gigantes:** Los valores de equilibrio deben usar fuentes audaces (2rem+) y mostrar siempre **2 decimales** en variables financieras o porcentuales.
- **Tipografía:** SF Pro Display (o sistema sans-serif limpio).

## 🛠️ Reglas de Ingeniería (Mandatos Críticos)
1. **Unificación de Sliders:** Todos los `input type="range"` DEBEN configurarse en el rango **0 a 100%**. El escalado a magnitudes reales (ej. tasas del 0.05 o ingresos de $1000) debe realizarse exclusivamente en la lógica de JavaScript.
2. **Matemáticas KaTeX:** Prohibido el uso de texto plano para fórmulas. Usar siempre la función `kHTML(latex)` para renderizar en el DOM. Las derivaciones matemáticas deben mostrarse paso a paso.
3. **Arquitectura Offline-first:** Sin dependencias externas activas. Librerías (`Chart.js`, `KaTeX`) y estilos deben cargarse desde `/assets/`.
4. **Inteligencia de Exámenes:** Cada herramienta debe incluir una píldora `.exam-box` (dorada) que vincule la simulación con preguntas reales extraídas de `EXAMS.md`.

## 📂 Gobernanza y Mantenimiento
- **Auto-Mantenimiento (CRÍTICO):** Ninguna tarea se considera finalizada sin actualizar:
    - `MAP.md`: Índice de archivos y estructura.
    - `KNOWLEDGE.md`: Acumulación de lógica matemática y variables.
    - `EXAMS.md`: Catálogo de preguntas de examen relacionadas.
- **DRY Principle:** Compartir activos entre temas para minimizar el consumo de tokens y facilitar actualizaciones globales.

## 🚀 Stack Tecnológico
- HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Gráficos:** Chart.js (Umd minified) con `animation: false` para respuesta instantánea.
- **Fórmulas:** KaTeX para tipografía científica profesional.
