# Prueba Técnica para Desarrollador Frontend (Vue3)

## Objetivo

Desarrollar una aplicación web sencilla utilizando Vue3 que permita a los usuarios ver, agregar, editar y eliminar artículos en un blog. La aplicación debe ser funcional, responsiva y seguir buenas prácticas de desarrollo.

## Requisitos Técnicos

### 1. Configuración del Proyecto

- Configurar un nuevo proyecto de Vue3 usando Vue CLI o Vite.
- Utilizar Vue Router para la navegación.
- Implementar Vuex para la gestión del estado global de la aplicación.
- Configurar ESLint y Prettier para mantener la calidad del código.

### 2. Estructura de la Aplicación

La aplicación debe tener las siguientes páginas:

#### 2.1 Página de Inicio

- Mostrar una lista de artículos existentes.
- Cada artículo debe mostrar el título, la fecha de publicación y un resumen.
- Incluir un botón para agregar un nuevo artículo.

#### 2.2 Página de Detalle del Artículo

- Mostrar el contenido completo del artículo seleccionado.
- Incluir botones para editar y eliminar el artículo.

#### 2.3 Página de Crear/Editar Artículo

- Formulario para crear o editar un artículo.
- Campos: título, autor, fecha de publicación, contenido y resumen.
- Validar los campos del formulario.

### 3. Funcionalidades

- **Listar artículos**: Recuperar y mostrar una lista de artículos desde un API o archivo JSON local.
- **Ver detalles de un artículo**: Mostrar la información completa de un artículo seleccionado.
- **Crear artículo**: Permitir a los usuarios agregar un nuevo artículo mediante un formulario.
- **Editar artículo**: Permitir a los usuarios modificar un artículo existente.
- **Eliminar artículo**: Permitir a los usuarios eliminar un artículo de la lista.

### 4. Gestión del Estado

- Utilizar Vuex para gestionar el estado global de la lista de artículos.
- Crear acciones, mutaciones y getters necesarias para manejar las operaciones CRUD.

### 5. Estilos y Diseño

- Implementar un diseño responsivo utilizando CSS, SCSS o Tailwind CSS.
- Seguir las guías de diseño y mejores prácticas de UX/UI.

### 6. Buenas Prácticas

- Utilizar componentes Vue de manera modular y reutilizable.
- Mantener el código limpio y bien documentado.
- Seguir las convenciones de código de Vue3 y JavaScript.
- Incluir comentarios en el código donde sea necesario para explicar la lógica.

## Extras (Opcionales)

- **Autenticación**: Implementar un sistema de autenticación simple para acceder a las páginas de crear y editar artículos.
- **Tests**: Escribir pruebas unitarias para componentes clave utilizando Jest o Vue Test Utils.
- **Internacionalización**: Añadir soporte para múltiples idiomas usando Vue I18n.

## Entrega

- Subir el código a un repositorio público en GitHub.
- Incluir un archivo README.md con instrucciones claras sobre cómo configurar y ejecutar el proyecto.
- Asegurarse de que la aplicación funcione correctamente en los navegadores más populares (Chrome, Firefox, Edge).

## Criterios de Evaluación

- Correcta implementación de las funcionalidades requeridas.
- Calidad y claridad del código.
- Uso adecuado de Vue3 y su ecosistema (Vue Router, Vuex).
- Buenas prácticas de desarrollo (modularidad, reutilización de componentes, etc.).
- Diseño y usabilidad de la interfaz de usuario.

¡Buena suerte!
