# ⚓ Project Spec: Introducción a la Macroeconomía (Recursos Interactivos)

Este proyecto es una plataforma educativa interactiva diseñada para estudiantes del Grado en Economía. Se rige por los siguientes mandatos fundamentales.

## 🎯 Objetivo y Fuente de Verdad
- **Propósito:** Proporcionar herramientas visuales y dinámicas para comprender modelos macroeconómicos.
- **Fuente Primaria:** Todo el contenido teórico, fórmulas y gráficos DEBEN basarse estrictamente en el manual **CORE Economics (Capítulo 9: El Mercado del Trabajo: Salarios, Ganancias y Desempleo)** y capítulos sucesivos.
- **Referencia Crítica:** El archivo `@../TEMA1-C9-LIBRO/_LT-Tema1-Cap9-Libro.pdf` es el ancla teórica actual.

## 🎨 Estándares de Diseño y UI
- **Estética:** Estilo moderno y limpio inspirado en el ecosistema Apple (SF Pro Display, amplios márgenes, sombras suaves).
- **Legibilidad:** Prioridad absoluta a la visibilidad de valores decimales en métricas y fórmulas.
- **Interactividad:** Uso intensivo de deslizadores (`range inputs`) con actualización en tiempo real (*zero-latency feedback*).
- **Consistencia:** Navegación pegajosa (*sticky navbar*) con botón de retorno y jerarquía de cabeceras uniforme en todos los temas.

## 🛠️ Stack Tecnológico
- **Arquitectura:** Sitio estático modular (Offline-first). Sin dependencias externas activas (todas en `assets/`).
- **Gráficos:** `Chart.js` (Umd minified). Los gráficos deben ser dinámicos y reflejar desplazamientos de curvas según la teoría.
- **Matemáticas:** `KaTeX` para todas las fórmulas económicas.
- **Lenguajes:** HTML5, CSS3 (Vanilla) y JavaScript (ES6+).

## 📂 Estructura de Carpetas
- `/web`: Raíz del sitio.
- `/tema-N/`: Carpeta independiente para cada tema temático.
- `/tema-N/assets/`: Recursos compartidos por el tema (estilos, librerías, fuentes).
- `/tema-N/index.html`: Menú específico del tema.

## 📜 Reglas de Desarrollo (Mandatos)
1. **Validación Teórica:** Antes de crear una nueva herramienta, se debe mapear la lógica contra las figuras y explicaciones del libro de CORE.
2. **Consolidación:** Cada nueva herramienta debe ser enlazada en el menú principal del tema y documentada en el README raíz.
3. **Escalabilidad:** Los parámetros iniciales de los modelos deben ser calibrados para que los equilibrios sean visibles en resoluciones estándar.
