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

### 🏦 Bancos y Creación de Dinero
- **Dinero Base:** Efectivo + Reservas (Pasivo del Banco Central).
- **Dinero Bancario:** Depósitos (Pasivo de los bancos comerciales creados mediante crédito).
- **Tasa Bancaria:** Tasa Oficial (fijada por BC) + Margen/Markup (fijado por bancos según riesgo).
- **Valor Presente (VP):** El precio de un activo (ej. un bono) es el valor descontado de sus flujos futuros. Existe una relación inversa: ↑i $\rightarrow$ ↓VP.

### 🚫 Racionamiento del Crédito
- **Problema Principal-Agente:** Conflicto de intereses e información asimétrica (esfuerzo no verificable).
- **Mecanismos de Control:** Exigencia de **Capital Propio** (equity) y **Garantías** (collateral).
- **Exclusión Financiera:** Los hogares sin riqueza no pueden aportar avales, siendo excluidos del mercado crediticio o restringidos a peores condiciones.
- **Impacto en Gini:** El racionamiento del crédito aumenta la desigualdad al impedir que los agentes sin riqueza inviertan en su productividad.

## 📘 Lógica Económica (Capítulo 13 CORE) — TEMA 3

### 📉 Ley de Okun
- **Definición:** Relación empírica negativa entre el crecimiento del PIB y el cambio en el desempleo.
- **Ecuación:** $\Delta u = \alpha + \beta \times \text{Crecimiento PIB}$.
- **Coeficiente β:** Indica la sensibilidad del mercado laboral (típicamente entre -0.3 y -0.5).
- **Auge vs Recesión:** En auges (PIB > umbral), Δu es negativo. En recesiones, Δu es positivo.

### ⚖️ Suavización del Consumo (Modelo 2 periodos)
- **Concepto:** Estrategia de los hogares para mantener un nivel de consumo constante a pesar de shocks temporales en el ingreso.
- **Restricción Presupuestaria:** $c_1 = y_1 + (y_0 - c_0)(1 + r)$.
- **Pendiente:** $-(1 + r)$ representa el coste de oportunidad del consumo presente.
- **Flujos:** El término $(y_0 - c_0)$ indica el ahorro hoy (si es > 0) o el endeudamiento (si es < 0).

### 🛡️ Fallos en la Suavización
- **Restricción de Crédito:** Imposibilidad de pedir prestado. El consumo está limitado al ingreso actual ($c = y$). Ante una noticia de ingresos futuros altos, el consumo no sube hoy.
- **Falta de Voluntad:** Incapacidad psicológica de ahorrar hoy ante una caída futura de ingresos. El consumo cae bruscamente solo cuando el ingreso baja realmente.

### 🏗️ Volatilidad de la Inversión (Coordinación)
- **Concepto:** La inversión fluctúa más que el consumo porque las empresas coordinan sus decisiones basadas en expectativas de demanda futura.
- **Juego de Coordinación:** Matriz 2x2 donde existen dos equilibrios de Nash: uno eficiente (ambas invierten) y uno ineficiente (ninguna invierte).
- **Círculo Virtuoso:** Alta confianza → Inversión → Alta demanda → Beneficios.
- **Círculo Vicioso:** Baja confianza → Desinversión → Baja demanda → Estancamiento.

### 🔄 Modelo del Multiplicador (Cruz Keynesiana)
- **Concepto:** Explica cómo un cambio inicial en el gasto autónomo genera un aumento mayor en el PIB debido al consumo inducido.
- **Ecuación de Demanda (DA):** $DA = A + sY$, donde $A$ es el gasto autónomo y $s$ es la pendiente.
- **Pendiente ($s$):** $s = c_1 + i_1 - m_1$.
- **Multiplicador ($k$):** $k = \frac{1}{1-s}$.
- **Equilibrio ($Y^*$):** $Y = DA \Rightarrow Y^* = \frac{A}{1-s}$.

### 🏛️ Política Fiscal y Multiplicador Completo
- **Fórmula del Multiplicador:** $k = \frac{1}{1 - c_1(1-t) + m}$
- **Variables de Estabilización:**
    - **$t$ (Tipo Impositivo):** Estabilizador automático. Reduce el multiplicador al detraer renta del ciclo de consumo.
    - **$m$ (Propensión a Importar):** Reduce el multiplicador. Parte del gasto se "escapa" al extranjero.
- **Relación:** A mayor carga fiscal ($t$) o mayor apertura exterior ($m$), menor es el impacto de un shock de demanda en el PIB (la recta $DA$ es más plana).

### 📈 Shocks y Escenarios Fiscales
- **Paradoja del Ahorro:** Un intento colectivo de ahorrar más (caída de $c_0$) reduce la demanda agregada y el PIB, pudiendo dejar el ahorro total invariable o menor.
- **Estímulo Fiscal:** Aumento de $G$ para desplazar $DA$ hacia arriba y salir de una recesión.
- **Austeridad:** Reducción de $G$ en recesión. Es contraproducente si el multiplicador es alto, ya que contrae el PIB más que el ahorro inicial de gasto.
- **Propensiones:** $c_1$ (consumo), $i_1$ (inversión inducida), $m_1$ (importaciones).

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

