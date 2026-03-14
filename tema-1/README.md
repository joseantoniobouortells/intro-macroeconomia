# 📈 Herramientas Interactivas - Tema 1: El Mercado del Trabajo

## 🚀 Cómo Usar

### Opción 1: Abrir Localmente (Recomendado)
1. Navega a esta carpeta (`WEB`) en tu explorador de archivos
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado
4. ¡Listo! No necesitas conexión a internet

### Opción 2: Con Servidor Local (Si lo prefieres)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Luego abre: http://localhost:8000
```

---

## 📂 Estructura de Archivos

```
WEB/
├── index.html                      # Página principal con índice de herramientas
├── curva-fijacion-salarios.html    # Herramienta interactiva principal
├── assets/
│   ├── style.css                   # Estilos CSS compartidos
│   ├── chart-utils.js              # Funciones y utilidades de gráficos
│   └── README.md                   # Este archivo
```

---

## 🎯 Herramientas Disponibles

### 1. **Curva de Fijación de Salarios** ✓
**Archivo:** `curva-fijacion-salarios.html`

#### Qué es:
Visualización interactiva de cómo los salarios reales (W/P) dependen de:
- **B (Poder Sindical):** Parámetro que representa la fuerza de negociación de los trabajadores
- **a (Elasticidad):** Cuán sensibles son los salarios a cambios en el desempleo

#### Ecuación del Modelo:
```
W/P = (Wl + B×e) / (a + e)

donde:
- e = tasa de empleo (0.05 a 0.55)
- Wl = salario nominal bajo (40)
- B = parámetro institucional (ajustable)
- a = elasticidad de desempleo (ajustable)
```

#### Cómo Experimentar:
1. **Ajusta el parámetro B:**
   - Bajo (B = 4): Sin sindicatos fuertes → salarios bajos
   - Moderado (B = 12): Sindicatos moderados → salarios medios
   - Alto (B = 20): Sindicatos fuertes → salarios altos

2. **Ajusta el parámetro a:**
   - Bajo (a = 1): Salarios poco sensibles a desempleo
   - Alto (a = 10): Salarios muy sensibles a desempleo

3. **Observa:**
   - Cómo cambia la curva en tiempo real
   - La tabla de valores actualizada
   - Las explicaciones dinámicas
   - La ecuación modificada

#### Casos de Estudio Predefinidos:
- **⚠️ Sin Sindicatos:** B=4, a=6
- **⚖️ Sindicatos Moderados:** B=12, a=4 (default)
- **✓ Sindicatos Fuertes:** B=20, a=2

---

## 🔬 Conceptos Económicos Explorados

### El Efecto Voz de los Sindicatos
Cuando ajustas B hacia arriba, estás viendo cómo los sindicatos permiten que los trabajadores tengan **voz** en las negociaciones salariales. No solo amenaza de huelga, sino poder de negociación real.

### Productividad vs Desempleo
- **Movimiento a lo largo de la curva:** Cambios en el desempleo
- **Desplazamiento de la curva:** Cambios en productividad o poder sindical

### Equilibrio del Mercado de Trabajo
La curva de fijación de salarios intersecta con la curva de fijación de precios, determinando:
- El desempleo natural (u*)
- Los salarios reales de equilibrio
- La tasa de inflación

---

## 💻 Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **CSS3:** Diseño responsive y moderno
- **JavaScript ES6:** Lógica interactiva
- **Chart.js 3.9:** Gráficos interactivos
- **CDN Cloudflare:** Carga rápida de bibliotecas

### Ventajas:
✅ Autocontenido (sin servidor)
✅ Funciona offline después de cargar
✅ Responsive (funciona en móviles)
✅ Sin dependencias complicadas
✅ Rápido y eficiente

---

## 🎓 Actividades Sugeridas

### 1. Entender el Poder Sindical
```
Tarea: Compara B=4 vs B=20 manteniendo a=4
Observa: Cuánto suben los salarios con mayor poder sindical
Pregunta: ¿Por qué la curva se desplaza hacia arriba?
```

### 2. Explorar la Elasticidad
```
Tarea: Compara a=1 vs a=10 manteniendo B=12
Observa: Cómo el desempleo afecta de forma diferente los salarios
Pregunta: ¿Qué significa que los salarios sean "poco elásticos" al desempleo?
```

### 3. Caso Realista: Sindicalización
```
Escenario: Un país sin sindicatos (B=4, a=6)
Pregunta: ¿Qué pasa si los trabajadores se sindicalizan?
Tarea: Aumenta B a 12 y a a 4
Resultado: Los salarios suben ~10-15%, pero menos sensibles a desempleo
```

### 4. Crisis Económica
```
Escenario: Imagina una recesión que baja el tasa de empleo
Tarea: Lee los valores en la tabla cuando e = 0.10 (10%)
Pregunta: ¿Cómo varían los salarios según B y a?
Conclusión: Mayor poder sindical protege mejor en crisis
```

---

## 🔄 Próximas Herramientas (En Desarrollo)

1. **Curva de Fijación de Precios**
   - Cómo determinan las empresas los precios
   - Relación con salarios nominales y beneficios

2. **Equilibrio General**
   - Intersección de ambas curvas
   - Determinación del desempleo natural

3. **Multiplicadores**
   - Efecto amplificado de cambios en demanda
   - Política fiscal y económica

4. **Productividad y Tecnología**
   - Cómo la productividad desplaza las curvas
   - Impacto en salarios reales sin cambiar desempleo

5. **Inflación y Expectativas**
   - Rol de las expectativas inflacionarias
   - Curva de Phillips aumentada

---

## 🐛 Solución de Problemas

### El gráfico no carga
- Verifica que tengas conexión a internet (para cargar Chart.js desde CDN)
- Si ya lo abriste antes, recarga la página (Ctrl+F5 o Cmd+Shift+R)

### Los sliders no funcionan
- Asegúrate de que JavaScript está habilitado en tu navegador
- Intenta con otro navegador (Chrome, Firefox, Safari)

### La tabla no se actualiza
- Recarga la página
- Limpia el caché del navegador

### No veo la ecuación
- El navegador debe soportar ES6 (todos los navegadores modernos lo hacen)

---

## 📝 Notas para Estudiantes

### Conceptos Clave
1. **W/P (Salario Real):** Lo que los trabajadores pueden comprar con su salario
2. **e (Tasa de Empleo):** Proporción de población empleada
3. **B (Poder Sindical):** Capacidad de negociación colectiva
4. **a (Elasticidad):** Sensibilidad de salarios a cambios en empleo

### Conexión con la Teoría
- La **curva de fijación de salarios** muestra qué salarios piden los trabajadores
- Los **sindicatos desplazan la curva hacia arriba** porque aumentan el poder de negociación
- El **desempleo mueve a lo largo de la curva**, debilitando el poder de negociación
- La **productividad desplaza la curva hacia arriba** sin cambiar el desempleo

### Errores Comunes
❌ Confundir "desplazamiento" (cambio de curva) con "movimiento" (cambio a lo largo)
❌ Pensar que más sindicatos siempre es mejor (hay trade-offs)
❌ Olvidar que W/P es **salario real**, no nominal
✅ Recordar: Mayor B = mayor W/P = salarios reales más altos

---

## 📚 Referencias

- **Capítulo 9:** El Mercado del Trabajo (Tema 1)
- **Modelo:** Basado en el equilibrio de oferta y demanda de trabajo
- **Datos:** De `260303-Fijacion-Salarios.xlsx`
- **Parámetros iniciales:** B=12, a=4 (equilibrio moderado)

---

## 👨‍💻 Para Desarrolladores

### Estructura del Código
- `index.html`: Punto de entrada, índice de herramientas
- `curva-fijacion-salarios.html`: Aplicación principal
- `assets/chart-utils.js`: Modelo económico + utilidades
- `assets/style.css`: Estilos responsivos

### Cómo Agregar una Nueva Herramienta
1. Copia `curva-fijacion-salarios.html`
2. Modifica la ecuación en `chart-utils.js`
3. Ajusta los sliders y parámetros
4. Agrega un nuevo card en `index.html`

### Personalización
- Cambia colores en `style.css` (variables de color: #667eea, #764ba2)
- Modifica rangos de sliders en el HTML
- Ajusta parámetros iniciales en JavaScript

---

## 📧 Contacto y Feedback

¿Sugerencias para mejorar estas herramientas?
Usa estas herramientas como base para explorar más conceptos económicos.

---

**Última actualización:** Marzo 2026
**Versión:** 1.0 (Curva de Fijación de Salarios)
**Estado:** ✓ Funcional y listo para uso educativo
