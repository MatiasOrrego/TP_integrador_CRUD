# Trabajo Integrador

## Descripción

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) de tareas utilizando Express. La información se guarda en una base de datos MySQL.

## Requisitos Previos

- Node.js
- MySQL
- Extensión de Express

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MatiasOrrego/crud-tasks-backend.git
   ```
2. Navega al directorio del proyecto.

3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura la base de datos:
   - Crea una base de datos llamada `tasks_db`.
   - Crea una tabla llamada `tasks` con las siguientes columnas:
     - `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
     - `title` (VARCHAR,255)
     - `description` (TEXT)
     - `isComplete` (BOOLEAN)

## Uso

1. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
2. Utiliza Thunder Client para interactuar con la API.

## Características

- Crear tareas
- Leer tareas
- Actualizar tareas
- Eliminar tareas

## Contribución

Pueden contribuir al proyecto mediante correcciones.

## Licencia

Este proyecto no tiene licencia.
