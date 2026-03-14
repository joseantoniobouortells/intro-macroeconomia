# 🚀 Guía de Acceso Rápido

## 📍 Ubicación del Repositorio

```
/Users/joseantoniobouortells/Documents/Projects/FORMACION/GRADO-ECONOMIA/1o/ASIGNATURAS/
    └── INTRO-MACROECONOMIA/
        └── web/  ← 📍 ESTÁS AQUÍ
```

## 🎯 Cómo Acceder

### Opción 1: Desde el Explorador de Archivos (Más Fácil)
1. Abre Finder (Mac) o Explorador (Windows)
2. Navega a: `/INTRO-MACROECONOMIA/web/`
3. Haz **doble clic** en `index.html`
4. Se abrirá automáticamente en tu navegador

### Opción 2: Desde la Terminal
```bash
# Mac/Linux
open /Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/index.html

# Windows
start /Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/index.html
```

### Opción 3: Con Servidor Local (Python)
```bash
# Navega a la carpeta
cd /Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/

# Inicia servidor local (Python 3)
python -m http.server 8000

# Inicia servidor local (Python 2)
python -m SimpleHTTPServer 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

### Opción 4: Arrastrar a Navegador
1. Abre tu navegador (Chrome, Firefox, Safari, Edge)
2. Arrastra el archivo `index.html` al navegador
3. ¡Listo!

---

## 📂 Archivos Clave

| Archivo | Descripción | Cómo Acceder |
|---------|-------------|--------------|
| **index.html** | 📍 Página Principal (Hub de Navegación) | Abre este primero |
| **README.md** | Documentación completa | Lee después de explorar |
| **tema-1/index.html** | Contenido de Tema 1 (activo) | Click en "Tema 1" desde principal |
| **tema-1/curva-fijacion-precios.html** | Herramienta interactiva | Click en "Curva de Precios" |
| **tema-1/curva-fijacion-salarios.html** | Herramienta interactiva | Click en "Curva de Salarios" |

---

## ⚡ Rutas Directas

### Para Usuarios Frecuentes
Guarda estos links como favoritos en tu navegador:

```
# Página principal
file:///Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/index.html

# Tema 1
file:///Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/tema-1/index.html

# Curva de Precios
file:///Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/tema-1/curva-fijacion-precios.html

# Curva de Salarios
file:///Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/tema-1/curva-fijacion-salarios.html
```

---

## 🎓 Flujo de Uso Recomendado

### Primera Visita (Exploración)
1. **Abre:** `web/index.html` (página principal)
2. **Lee:** Sección "Bienvenido"
3. **Explora:** Las 3 tarjetas de temas
4. **Haz clic:** En tarjeta "Tema 1 - Activo"
5. **Descubre:** Las herramientas interactivas

### Segunda Visita (Estudio)
1. **Abre directamente:** `tema-1/index.html`
2. **Lee:** Descripción de las herramientas
3. **Abre:** `curva-fijacion-precios.html`
4. **Experimenta:** Ajusta los deslizadores
5. **Analiza:** Los resultados dinámicos

### Estudios Posteriores
- Usa links "Volver al Repositorio" para navegar
- Explora diferentes parámetros en las herramientas
- Consulta `README.md` para conceptos teóricos

---

## 🔍 Verificación de Funcionamiento

Después de abrir `index.html`, verifica:

✓ **¿Se ve el diseño correctamente?**
- Debe haber un gradiente púrpura en fondo
- 3 tarjetas temáticas visibles
- Sección de bienvenida con texto

✓ **¿Los links funcionan?**
- Haz click en "Tema 1"
- Debe navegar a `tema-1/index.html`
- Debe verse el botón "← Volver al Repositorio"

✓ **¿Las herramientas cargan?**
- Desde tema-1, haz click en "Curva de Fijación de Precios"
- Debe ver un gráfico interactivo
- Los deslizadores deben ser ajustables

✓ **¿Todo funciona sin internet?**
- Desconecta WiFi
- Recarga la página (Ctrl+R)
- Todo debe seguir funcionando

---

## 🛠️ Solucionar Problemas

### Problema: "Error 404 - Archivo no encontrado"
**Solución:** Asegúrate de que la ruta es correcta. Usa el método "Finder + doble clic".

### Problema: "Los gráficos no aparecen"
**Solución:** Recarga la página (Ctrl+R o Cmd+R). Si persiste, comprueba que `assets/` existe.

### Problema: "Los links no funcionan"
**Solución:** Asegúrate de usar rutas relativas. Si abriste desde Finder, debería funcionar automáticamente.

### Problema: "Se ven caracteres extraños en Math"
**Solución:** Es normal. Actualiza la página. Las ecuaciones (KaTeX) cargan dinámicamente.

---

## 💾 Acceso desde Git

Si tienes el repositorio clonado con Git:

```bash
# Navega al repositorio
cd ~/Projects/FORMACION/GRADO-ECONOMIA/1o/ASIGNATURAS/INTRO-MACROECONOMIA/web

# Abre con comando one-liner (Mac)
open index.html

# O abre con navegador específico
open -a "Google Chrome" index.html
open -a "Firefox" index.html
open -a "Safari" index.html
```

---

## 📱 Acceso Móvil

Aunque está optimizado para desktop, también funciona en móvil:

1. **En el teléfono:** Abre el navegador
2. **Acceso local:** Necesitas un servidor (ver Opción 3)
3. **O:** Copia archivos a servidor web (opcional)

---

## 🎨 Personalización

### Cambiar el navegador por defecto
1. En Finder, selecciona `index.html`
2. Click derecho → "Abrir con" → Selecciona navegador
3. Click en "Cambiar todo" para hacerlo permanente

### Crear un alias en Terminal (Mac)
```bash
# Agrega esto a tu ~/.zshrc o ~/.bash_profile
alias maco='open /Sessions/busy-practical-shannon/mnt/INTRO-MACROECONOMIA/web/index.html'

# Luego en terminal, simplemente escribe:
maco
```

### Crear acceso directo (Windows)
1. Click derecho en `index.html`
2. "Enviar a" → "Escritorio (crear acceso directo)"
3. Doble clic en el icono del escritorio en el futuro

---

## 📊 Estadísticas de Uso

| Métrica | Valor |
|---------|-------|
| Tiempo de carga | < 2 segundos |
| Tamaño total | ~5-10 MB (incluyendo assets) |
| Compatibilidad | Todos los navegadores modernos |
| Conexión requerida | No (funciona offline) |

---

## ❓ FAQ Rápido

**P: ¿Necesito internet para usar esto?**
A: No. Todo funciona offline localmente.

**P: ¿Qué navegador debo usar?**
A: Chrome, Firefox, Safari o Edge. Todos funcionan igual.

**P: ¿Puedo editar los archivos?**
A: Sí, son HTML/CSS/JS normales. Usa cualquier editor de texto.

**P: ¿Cómo agrego un nuevo tema?**
A: Sigue la guía en `README.md` - Sección "Agregar Nuevos Temas".

**P: ¿Dónde guardo mis notas?**
A: Usa un archivo separado. La web es solo lectura/interacción.

---

## 📞 Soporte Rápido

Si algo no funciona:
1. **Recarga la página:** Ctrl+R (Windows) o Cmd+R (Mac)
2. **Limpia caché:** Ctrl+Shift+Delete (Windows) o Cmd+Shift+Delete (Mac)
3. **Intenta otro navegador:** A veces el navegador es el problema
4. **Verifica rutas:** Asegúrate de que archivos existen en carpeta

---

**¡Listo para empezar! 🎓📊**

**Próximo paso:** Abre `index.html` en tu navegador y comienza a explorar.
