# 🎓 Exam Intelligence Base - Macroeconomía

Este documento cataloga las preguntas recurrentes de los exámenes finales (2024-2025) y su relación con los modelos interactivos.

## 📊 Tema 1: El Mercado del Trabajo (Capítulo 9)

### 1. Cálculos de Tasa de Desempleo ($u$)
- **Pregunta Típica:** "Dado un gráfico con Empleo ($N$) y Fuerza de Trabajo ($LF$), calcule $u$."
- **Casos Reales:** 
    - Junio 2024, Q1: $N=0.76$, $LF=0.80$, Población=1.0. 
    - **Lógica:** $u = (LF - N) / LF$. En este caso: $(0.80 - 0.76) / 0.80 = 5\%$.
- **Uso en Web:** Vincular a `equilibrio-general.html`.

### 2. Aumento de la Competencia ($\mu \downarrow$)
- **Pregunta Típica:** "¿Qué efecto tiene un aumento de la competencia en el mercado de bienes?"
- **Casos Reales:** Junio 2024, Q2; Junio 2025 (Desarrollo).
- **Lógica:** $\uparrow \text{Competencia} \rightarrow \downarrow \mu \text{ (markup)} \rightarrow \uparrow PS \text{ (curva de precios)}$.
- **Resultado:** El salario real ($W/P$) aumenta y la tasa de desempleo natural ($u^*$) disminuye.
- **Uso en Web:** `curva-fijacion-precios.html` (efecto en el reparto) y `equilibrio-general.html` (efecto en $u^*$).

### 3. Poder Sindical y Negociación (WS)
- **Pregunta Típica:** "¿Qué ocurre si se reduce el poder de negociación de los sindicatos?"
- **Casos Reales:** Junio 2024 (Test Q2, pág 27).
- **Lógica:** $\downarrow \text{Poder Sindical} \rightarrow \downarrow \text{Salario de reserva/exigido} \rightarrow \downarrow WS \text{ (desplazamiento hacia abajo)}$.
- **Resultado:** El salario real se mantiene constante (determinado por la PS), pero el nivel de empleo aumenta (menos desempleo natural).
- **Uso en Web:** `curva-fijacion-salarios.html` y `equilibrio-general.html`.

### 3. Progreso Tecnológico ($\lambda \uparrow$)
- **Pregunta Típica:** "Analice los efectos a largo plazo de la difusión de nuevas tecnologías."
- **Casos Reales:** Junio 2025, Q6; Septiembre 2024 (Desarrollo).
- **Lógica:** $\uparrow \lambda \rightarrow \uparrow PS$. 
- **Resultado:** Si la curva WS es constante, el salario real aumenta y el desempleo baja.
- **Uso en Web:** Slider de Productividad en `productividad-tecnologia.html`.

### 4. Dinámicas fuera del Equilibrio (Puntos A, B, C)
- **Pregunta Típica:** "Si el salario real está por debajo de la curva PS (Punto C)..."
- **Casos Reales:** Junio 2025, Q7; Septiembre 2024, Q1.
- **Lógica:** En el Punto C, el markup real es mayor al que maximiza beneficios -> Las empresas bajan precios para vender más -> El empleo aumenta hacia el equilibrio.
- **Uso en Web:** Escenarios en `efecto-multiplicador.html` e `inflacion-expectativas.html`.

### 5. Desigualdad y Coeficiente de Gini
- **Pregunta Típica:** "Calcule el Gini en una economía con $X$ trabajadores y $Y$ empresarios."
- **Casos Reales:** Junio 2024, Q10; Septiembre 2025, Q10.
- **Lógica:** Basado en la curva de Lorenz (Pág. 31-35 del libro). 
- **Fórmula simplificada:** Relación entre la participación de los salarios ($s = w/\lambda$) y el número de desempleados.
