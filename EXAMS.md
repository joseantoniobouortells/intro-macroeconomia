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
- **Uso en Web:** Escenarios en `efecto-multiplicador.html`.

### 5. Desigualdad y Coeficiente de Gini
- **Pregunta Típica:** "Calcule el Gini en una economía con $X$ trabajadores y $Y$ empresarios."
- **Casos Reales:** Junio 2024, Q10; Septiembre 2025, Q10.
- **Lógica:** Basado en la curva de Lorenz (Pág. 31-35 del libro). 
- **Fórmula simplificada:** Relación entre la participación de los salarios ($s = w/\lambda$) y el número de desempleados.

## 📈 Tema 3: Fluctuaciones Económicas (Capítulo 13)

### 1. Interpretación de la Ley de Okun
- **Pregunta Típica:** "¿Qué significa un coeficiente de Okun de -0.4?"
- **Lógica:** Por cada 1% de aumento en el crecimiento del PIB por encima del umbral, la tasa de desempleo cae un 0.4%.
- **Resultado:** Relación inversa. Δu es negativo en auges y positivo en recesiones.
- **Uso en Web:** `ley-okun.html`.

### 2. Suavización del Consumo (Shocks Temporales vs Permanentes)
- **Pregunta Típica:** "Si un hogar sufre una caída temporal de ingresos, ¿cómo reacciona según el modelo de dos periodos?"
- **Lógica:** El hogar prefiere mantener un consumo estable ($c_0 \approx c_1$). Pedirá prestado hoy para compensar la caída, confiando en el ingreso futuro.
- **Caso Crítico:** Si el shock es **permanente**, la suavización no es posible y el consumo debe bajar en ambos periodos.
- **Uso en Web:** `suavizacion-consumo.html`.

### 3. Volatilidad de la Inversión y Coordinación
- **Pregunta Típica:** "¿Por qué la inversión fluctúa más que el consumo?"
- **Respuesta:** Porque el consumo depende de la renta (suavizada), mientras que la inversión depende de las expectativas de demanda futura de otras empresas.
- **Lógica de Juego:** Existe un fallo de coordinación si las empresas eligen (NI, NI) por falta de confianza, aun siendo (I, I) mejor para ambas.
- **Uso en Web:** `volatilidad-inversion.html`.

### 4. El Modelo del Multiplicador (Cruz Keynesiana)
- **Pregunta Típica:** "Calcule el PIB de equilibrio dado $c_0, c_1, G, I...$".
- **Trampa del Gasto:** Las transferencias (pensiones) **no son G**. Se suman a la renta disponible $Y_d$ multiplicadas por $c_1$.
- **Propensiones:** El multiplicador es mayor cuanto más alta sea $c_1$ y más bajas las fugas ($m_1$).
- **Uso en Web:** `modelo-multiplicador.html`.
