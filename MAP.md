# 🗺️ Project Map - Introducción a la Macroeconomía

Este mapa permite a los agentes de IA localizar la lógica del proyecto rápidamente ahorrando tokens de exploración.

## 🏗️ Estructura del Repositorio
- `index.html`: Portal de entrada a todos los temas.
- `GEMINI.md`: Constitución y estándares del proyecto (**LEER PRIMERO**).
- `MAP.md`: Índice de inteligencia para navegación rápida.
- `EXAMS.md`: Base de datos de preguntas reales y su lógica técnica.
- `tema-1/`: El Mercado del Trabajo (Capítulo 9 CORE).
    - `index.html`: Menú de herramientas del tema.
    - `equilibrio-general.html`: Simulación de u* (Equilibrio de Nash).
    - `curva-fijacion-salarios.html`: Determinantes de la curva WS.
    - `curva-fijacion-precios.html`: Determinantes de la curva PS.
    - `efecto-multiplicador.html`: Punto B y desempleo cíclico.
    - `productividad-tecnologia.html`: Desplazamientos de PS por progreso técnico.
    - `sindicatos.html`: Efectos de negociación y voz sindical en la curva WS.
    - `desigualdad-gini.html`: Curva de Lorenz y reparto del ingreso entre clases.

- `tema-2/`: Bancos, Crédito y Dinero (Capítulo 10 CORE).
    - `index.html`: Menú de herramientas del tema (4/4 completadas ✓).
    - `eleccion-intertemporal.html`: Modelo de Julia y Marco.
    - `balances-apalancamiento.html`: Análisis de solvencia e identidad contable.
    - `bancos-dinero.html`: Creación de dinero y Valor Presente.
    - `racionamiento-credito.html`: Problema principal-agente y exclusión financiera.

- `tema-3/`: Fluctuaciones Económicas (Capítulo 13 CORE).
    - `index.html`: Menú de herramientas del tema.
    - `ley-okun.html`: Correlación PIB vs Desempleo.
    - `suavizacion-consumo.html`: Modelo intertemporal de dos periodos.
    - `restricciones-consumo.html`: Fallos en la suavización (crédito y voluntad).
    - `volatilidad-inversion.html`: Juego de coordinación y círculos virtuosos/viciosos.

## 🧠 Núcleo de Inteligencia (Assets)
- `tema-1/assets/style.css`: Estilos UI Apple-style unificados (heredado por Tema 2).
- `tema-1/assets/economic-logic.js`: **Tema 1** — Contiene las fórmulas de WS, PS y Equilibrio de Nash.
- `tema-2/assets/style.css`: Copia de Tema 1 (heredanza DRY).
- `tema-2/assets/economic-logic.js`: **Tema 2** — Contiene fórmulas monetarias: QTM, multiplicador, demanda, equilibrio, transmisión.

## 📐 Variables Globales (Glosario)

### Tema 1: Mercado del Trabajo
- `lambda` ($\lambda$): Productividad media del trabajo.
- `mu` ($\mu$): Markup empresarial (margen sobre costes).
- `B`: Salario de reserva (valor del desempleo).
- `a`: Desutilidad del esfuerzo laboral.
- `u`: Tasa de desempleo.
- `e`: Tasa de empleo ($1 - u$).
- `W/P`: Salario real.

### Tema 2: Bancos y Crédito
- `M`: Cantidad de dinero en circulación.
- `V`: Velocidad de circulación del dinero.
- `P`: Nivel de precios.
- `Y`: Producto agregado.
- `r`: Tasa de reserva obligatoria.
- `m`: Multiplicador monetario ($1/r$).
- `MB`: Base monetaria.
- `M1`, `M2`, `M3`: Agregados monetarios.
- `M^d`: Dinero demandado.
- `M^s`: Dinero ofertado.
- `k`: Elasticidad-renta (sensibilidad de demanda a Y).
- `h`: Semielasticidad-interés (sensibilidad de demanda a i).
- `i`: Tasa de interés (nominal).
