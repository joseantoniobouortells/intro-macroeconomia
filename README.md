# 📊 Repositorio de Recursos Educativos - Introducción a Macroeconomía

## 📑 Descripción General

Este es un repositorio modular y escalable de recursos educativos para la asignatura de **Introducción a Macroeconomía** del Grado en Economía. Contiene temas temáticos organizados en carpetas independientes, cada uno con su propio contenido interactivo, análisis, y materiales de apoyo.

**Ubicación Base:** `/web`
**URL Local:** Accesible a través del navegador abriendo `index.html`

---

## 📂 Estructura de Carpetas

```
web/
├── index.html                 # Página de inicio principal (repositorio completo)
├── README.md                  # Este archivo
│
├── tema-1/                    # Tema 1: El Mercado del Trabajo
│   ├── index.html            # Página principal del tema
│   ├── curva-fijacion-precios.html
│   ├── curva-fijacion-salarios.html
│   ├── assets/               # Recursos (CSS, JS, fuentes, librerías)
│   │   ├── style.css
│   │   ├── chart.umd.min.js
│   │   ├── katex.min.js
│   │   ├── katex.min.css
│   │   └── ...
│   └── README.md             # Documentación específica del tema (opcional)
│
├── tema-2/                    # Tema 2: [Capítulo 10 - En Desarrollo]
│   ├── css/                  # Estilos CSS específicos
│   ├── js/                   # Scripts JavaScript específicos
│   ├── assets/               # Recursos compartidos
│   └── index.html            # Por crear cuando el tema esté listo
│
└── tema-3/                    # Tema 3: [Capítulo 11 - En Desarrollo]
    ├── css/
    ├── js/
    ├── assets/
    └── index.html            # Por crear cuando el tema esté listo
```

---

## 🚀 Cómo Empezar

### 1. Abrir el Repositorio
Abre el archivo `index.html` en tu navegador. Esto te llevará a la página de inicio principal con la lista de todos los temas disponibles.

```bash
# Desde la terminal (macOS/Linux)
open web/index.html

# O simplemente navega a la carpeta web/ y abre index.html con tu navegador
```

### 2. Explorar Temas
Selecciona un tema en la página principal. Cada tema tiene su propia página de inicio (`tema-N/index.html`) con acceso a todas sus herramientas interactivas.

### 3. Usar Herramientas Interactivas
Cada tema puede contener:
- **Gráficos dinámicos** que se actualizan en tiempo real
- **Deslizadores** para ajustar parámetros
- **Análisis explicativo** de conceptos económicos
- **Enlaces** a recursos complementarios

---

## 📝 Guía para Agregar Nuevos Temas

### Paso 1: Crear la Estructura del Tema

```bash
# Desde la carpeta web/, crear un nuevo tema
mkdir -p tema-N/{css,js,assets}
```

Donde `N` es el número del tema (4, 5, 6, etc.).

### Paso 2: Copiar Plantillas Base

Si tienes un tema anterior completo, puedes usar su estructura como base:

```bash
# Copiar estructura de tema-1 como plantilla
cp -r tema-1/assets/* tema-N/assets/
```

### Paso 3: Crear el archivo index.html

Crea un `tema-N/index.html` usando esta estructura base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tema N — [Título] | Intro. Macroeconomía</title>
  <link rel="stylesheet" href="assets/style.css">
  <style>
    /* Estilos específicos del tema */
  </style>
</head>
<body>
  <div class="container">

    <!-- Navegación de retorno -->
    <a href="../index.html" class="back-link">← Volver al Repositorio</a>

    <!-- Header -->
    <div class="page-header">
      <p class="eyebrow">Grado en Economía · Introducción a la Macroeconomía</p>
      <h1>[Título del Tema]</h1>
      <p>Descripción del contenido</p>
    </div>

    <!-- Contenido principal -->
    <!-- Agregar aquí tus secciones, herramientas interactivas, gráficos, etc. -->

  </div>
</body>
</html>
```

### Paso 4: Actualizar el index.html Principal

Edita `/web/index.html` para agregar una tarjeta del nuevo tema en la sección `.themes-grid`:

```html
<!-- Tema N -->
<div class="theme-card">
    <div class="theme-header">
        <h3>Tema N</h3>
        <div class="theme-code">Capítulo XX: [Título]</div>
    </div>
    <div class="theme-content">
        <p>[Descripción del tema]</p>
        <span class="status-badge status-active">✓ Activo</span>
        <div class="theme-links">
            <a href="./tema-N/index.html" class="theme-link">→ Acceder a Tema N</a>
            <!-- Agregar enlaces a subpáginas si existen -->
        </div>
    </div>
</div>
```

### Paso 5: Agregar Contenido

- **HTML Interactivo:** Crea archivos como `tema-N/herramienta-1.html`, `tema-N/herramienta-2.html`, etc.
- **Estilos:** Agrega archivos CSS en `tema-N/css/` si necesitas estilos específicos.
- **Scripts:** Agrega archivos JavaScript en `tema-N/js/` para interactividad avanzada.
- **Recursos:** Coloca imágenes, datos, y otros archivos en `tema-N/assets/`.

---

## 🔗 Rutas Relativas y Links

### Dentro de un Tema
Para enlazar archivos dentro del mismo tema, usa rutas relativas:

```html
<!-- Volver al repositorio principal -->
<a href="../index.html">Volver</a>

<!-- Acceder a otro tema -->
<a href="../tema-2/index.html">Tema 2</a>

<!-- Cargar un archivo de assets -->
<img src="assets/grafico.png" alt="Gráfico">
<script src="assets/chart.min.js"></script>
<link rel="stylesheet" href="assets/style.css">
```

### Entre Temas
Los temas son independientes pero pueden referenciarse entre sí:

```html
<!-- Desde tema-1 a tema-2 -->
<a href="../tema-2/index.html">Ver Tema 2</a>
```

---

## 📋 Checklist para Nuevo Tema

Cuando agregues un nuevo tema, verifica:

- [ ] Carpeta `tema-N/` creada con subdirectorios `css/`, `js/`, `assets/`
- [ ] Archivo `tema-N/index.html` creado y funcional
- [ ] Archivo actualizado: `/web/index.html` (agregar tarjeta de navegación)
- [ ] Links de navegación probados (ir y volver)
- [ ] Rutas relativas correctas para todos los recursos
- [ ] Contenido descriptivo en la tarjeta del tema
- [ ] Estado correcto en `status-badge` (activo/en desarrollo)
- [ ] README.md del tema (opcional, pero recomendado)

---

## 🎨 Personalización de Estilos

### CSS Global (Aplica a todo el repositorio)
Edita `/web/index.html` en la sección `<style>` para cambios globales.

### CSS por Tema
Cada tema puede tener sus propios estilos en:
- `tema-N/css/estilos-locales.css`

Para usarlos, agrega en el `<head>` de `tema-N/index.html`:

```html
<link rel="stylesheet" href="css/estilos-locales.css">
```

---

## 🛠️ Herramientas y Dependencias

### Assets Globales (Compartidos)
Disponibles en `tema-1/assets/` y se pueden copiar a otros temas:

| Archivo | Descripción | Uso |
|---------|-------------|-----|
| `style.css` | Estilos base del tema | Referencia en `<link rel="stylesheet">` |
| `chart.umd.min.js` | Librería Chart.js para gráficos | `<script src="chart.min.js"></script>` |
| `katex.min.js` | Librería KaTeX para ecuaciones matemáticas | `<script src="katex.min.js"></script>` |
| `katex.min.css` | Estilos de KaTeX | `<link rel="stylesheet" href="katex.min.css">` |

### Sin Dependencias Externas
Todo funciona **offline** — no requiere conexión a internet. Todas las librerías están incluidas localmente.

---

## 🔍 Validación y Testing

### Probar Navegación Local
1. Abre `/web/index.html` en tu navegador
2. Haz clic en cada tema para verificar que los links funcionan
3. Desde cada tema, verifica que el botón "Volver al Repositorio" funciona
4. Verifica que todos los recursos (CSS, JS, imágenes) cargan correctamente

### Herramientas de Desarrollo
Si hay errores de carga de recursos:
1. Abre **Developer Tools** (F12 en Chrome/Firefox)
2. Ve a la pestaña **Console** para ver errores de JavaScript
3. Ve a la pestaña **Network** para ver si hay recursos que fallan al cargar (estado 404)
4. Verifica las rutas relativas en los archivos HTML

---

## 📊 Estadísticas del Repositorio

| Elemento | Estado |
|----------|--------|
| Temas Activos | 1 (Tema 1) |
| Temas en Desarrollo | 2 (Tema 2, Tema 3) |
| Total de Páginas | 3+ (tema-1 tiene 3 páginas: index, curva-precios, curva-salarios) |
| Última Actualización | Marzo 2026 |

---

## 💡 Mejores Prácticas

### 1. Nombres de Archivos
- Usa nombres descriptivos: `curva-oferta-laboral.html`, no `page1.html`
- Usa minúsculas y guiones: `mi-archivo.html`, no `Mi_Archivo.html`

### 2. Organización de Contenido
- Un tema = Una carpeta (`tema-N/`)
- Herramientas relacionadas juntas en la misma carpeta
- Assets organizados en subcarpetas (`css/`, `js/`, `assets/`)

### 3. Navegación
- Siempre incluir link "Volver al Repositorio" en cada tema
- Links entre temas deben ser claros y contextualizados
- Mantener coherencia en el estilo de navegación

### 4. Documentación
- Cada tema puede incluir su propio `README.md`
- Documenta dependencias específicas del tema
- Explica cómo usar herramientas interactivas

---

## ❓ Preguntas Frecuentes

**¿Puedo tener subtemas dentro de un tema?**
Sí. Crea archivos como `tema-1/subtema-1a.html` y enlázalos desde `tema-1/index.html`.

**¿Cómo agrego gráficos interactivos?**
Usa Chart.js (incluido en assets). Ver ejemplos en `tema-1/curva-fijacion-precios.html`.

**¿Cómo escribo ecuaciones matemáticas?**
Usa KaTeX (incluido en assets). Ej: `$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$`

**¿Los temas pueden ser independientes del repositorio principal?**
Sí, cada tema en `tema-N/` funciona de forma independiente. El repositorio principal (`index.html`) solo proporciona navegación.

**¿Cómo actualizo el repositorio en GitHub/Git?**
```bash
cd /ruta/al/web/
git add .
git commit -m "Agregar tema-N: [Descripción]"
git push origin main
```

---

## 📞 Soporte y Contacto

Para preguntas sobre la estructura o los contenidos, contacta al autor del repositorio.

**Creado:** Marzo 2026
**Versión:** 1.0 (Estructura Modular Inicial)

---

## 📜 Licencia

Estos materiales educativos están diseñados para uso académico dentro del Grado en Economía. Verifica con tu institución sobre políticas de distribución y uso.

---

**¡Bienvenido al Repositorio de Introducción a Macroeconomía! 🎓**
