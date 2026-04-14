# 🧠 Repositorio de Conocimiento Económico

Este documento consolida las fórmulas, lógicas y variables clave utilizadas en las simulaciones del curso.

## 🏢 Tema 1: Mercado de Trabajo (Cap. 9)
- **WS (Wage Setting):** $w = f(e, u)$ donde el salario sube con el empleo y el poder sindical.
- **PS (Price Setting):** $w/p = \lambda (1 - \mu)$ donde el salario real depende de la productividad y el margen de beneficio.
- **Gini:** $g = u + n - s(1-u)$. Representa la desigualdad entre desempleados, trabajadores y dueños.

## 🏦 Tema 2: Bancos y Dinero (Cap. 10)
- **VP (Valor Presente):** $VP = \sum \frac{C}{(1+i)^k} + \frac{X}{(1+i)^t}$. Base para el precio de los bonos.
- **Apalancamiento:** $Ratio = \text{Activos Totales} / \text{Patrimonio Neto}$. Mide el riesgo de insolvencia.
- **Racionamiento de Crédito:** Los hogares pobres son excluidos por falta de colateral (activos de garantía).

## 📉 Tema 3: Fluctuaciones (Cap. 13)
- **Ley de Okun:** $\Delta u = \alpha - \beta(\text{Crecimiento del PIB})$.
- **Suavización:** $c_1 = y_1 + (y_0 - c_0)(1+r)$. Los hogares prefieren un consumo estable.
- **Coordinación:** Equilibrio de Nash donde las empresas invierten solo si confían en que las demás también lo harán.

## 🏛️ Tema 4: Política Fiscal (Cap. 14)
- **Multiplicador Completo:** $k = \frac{1}{1 - c_1(1-t) + m}$
- **Estabilizadores Automáticos:** El tipo impositivo ($t$) y las importaciones ($m$) reducen el tamaño del multiplicador, haciendo la economía menos volátil ante shocks.
- **Desempleo Cíclico:** Desviación del empleo respecto al equilibrio WS-PS causada por una Demanda Agregada insuficiente ($Y < Y_{estructural}$).
- **Paradoja del Ahorro:** Un intento de aumentar el ahorro reduciendo $c_0$ puede acabar reduciendo la renta total sin aumentar el ahorro agregado.

### 🎈 Tema 5: Inflación (Cap. 15)
- **Ecuación de Fisher:** $r \approx i - \pi^e$.
- **Brecha de Negociación:** Diferencia entre WS y PS. Si $u < u^*$, genera inflación creciente.
- **Espiral Inflacionista:** $\pi_t = \pi_{t-1} + \text{Brecha}$.
- **Banco Central:** Estabiliza la economía mediante el tipo de interés ($i$) para alcanzar su objetivo de inflación y empleo estructural ($e^*$).
- **Curvas de Indiferencia:** Elipses que muestran la pérdida de bienestar del BC cuando se aleja de sus objetivos de inflación y empleo.

### 🏗️ Tema 6: Progreso Técnico (Cap. 16)
- **Dinámica A-D-E-B:**
    - **A:** Equilibrio inicial.
    - **D:** Nueva tecnología desplaza PS hacia arriba, pero el empleo cae a corto plazo (sustitución de mano de obra).
    - **E:** Los altos beneficios atraen a nuevas empresas (entrada de capital).
    - **B:** El nuevo equilibrio a largo plazo tiene mayor empleo y salarios reales más altos.
- **Relación con Desigualdad:** El progreso técnico puede aumentar la desigualdad a corto plazo si los beneficios no se reinvierten en creación de empleo.
- **Curva de Lorenz en Cap. 16:** 
    - **Eje X:** Porcentaje de población (desempleados, empleados, dueños).
    - **Eje Y:** Porcentaje de renta acumulada.
    - **Efecto Automatización:** Aumenta el número de desempleados y reduce el "wage share" (participación salarial), alejando la curva de la línea de igualdad.

### 📉 Curva de Beveridge (Emparejamiento)
- **Concepto:** Relación inversa entre la tasa de vacantes ($v$) y la tasa de desempleo ($u$).
- **Movimiento a lo largo de la curva:** Cambios en la demanda agregada (Ciclo económico). 
    - **Auge:** Altas vacantes, bajo desempleo.
    - **Recesión:** Bajas vacantes, alto desempleo.
- **Desplazamiento de la curva:** Cambios en la eficiencia del mercado laboral (habilidades, geografía, servicios de empleo).
    - **Hacia el origen:** Mayor eficiencia (mejor emparejamiento).
    - **Hacia afuera:** Menor eficiencia (desajuste estructural).

### 🕰️ Tema 7: Historia y Crisis (Cap. 17)
- **Edad de Oro (1950-1973):** Periodo de alta inversión y productividad que desplazó PS hacia arriba, compensando las subidas de WS y manteniendo bajo desempleo.
- **Estanflación (Años 70):** Crisis de oferta (petróleo) que bajó la curva PS y ruptura de acuerdos sociales que subió la curva WS, generando inflación y desempleo altos simultáneamente.
- **Burbujas de Activos (CDP):**
    - **Curva de Dinámica de Precios (CDP):** Curva en forma de S que relaciona el precio actual con el esperado mañana.
    - **Equilibrios Estables:** Puntos donde la CDP cruza la bisectriz con pendiente menor a 1 (Nivel bajo y nivel de burbuja).
    - **Punto de Inflexión:** Equilibrio inestable. Si el precio sube por encima, se crea una burbuja; si baja, un desplome.
    - **Colapso:** Un cambio en las expectativas (pesimismo) desplaza la CDP hacia abajo, eliminando el equilibrio de burbuja y provocando una caída libre de precios.
- **Brecha de Negociación Histórica:** En los 70, la suma de las demandas de trabajadores y dueños superaba la tarta total disponible, retroalimentando la espiral inflacionista.
