# Loto & Luz

Concepto web de bienestar y retiros desarrollado con **Angular 16**, adaptado como pieza de portfolio por **Ekaterina Adarchenko**.

Esta versión parte de un proyecto web original de la autora y lo transforma en una marca ficticia: identidad nueva, fotografías generadas con IA, contenido de ejemplo y datos del cliente retirados.

> **Demo de portfolio, no un negocio real.** No hay reservas, pagos, servicios sanitarios ni envío de mensajes. El formulario solo muestra una confirmación local y borra su estado en memoria.

## Vista general

![Inicio de Loto & Luz](docs/home-preview.jpg)

## Funciones

- Cuatro páginas: inicio, filosofía, retiros y prácticas.
- Traducciones completas de la interfaz en español, inglés y ruso.
- Navegación adaptable con menú móvil y rutas Angular con hash.
- Carruseles de imágenes y preguntas frecuentes desplegables.
- Formulario de demostración con validación, sin servicios externos.
- Fotografías nuevas optimizadas en WebP y marca SVG local.

## Stack

Angular 16.2 · TypeScript 5.1 · Angular Router · ngx-translate · Angular Material · CSS responsive.

Se conserva la base técnica del proyecto original. Esta adaptación no pretende ser una migración a la última versión de Angular.

## Arranque local

Necesitas Node.js y npm. La compilación de esta revisión se comprobó con Node 22.23.4 y npm 10.9.9; esto documenta el entorno probado, no certifica el soporte oficial de esa combinación para Angular 16.

```bash
npm ci
npm start
```

Abre `http://localhost:4200`. La ruta de inicio es `/#/home`.

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

La compilación genera `dist/loto-y-luz/`. Las pruebas necesitan Chrome instalado. No se necesitan `.env`, credenciales ni claves API.

## Estructura

```text
src/app/                 Componentes, rutas y formulario demo
src/assets/i18n/         Diccionarios ES, EN y RU
src/assets/img/          Cuatro fotografías nuevas y marca SVG
src/styles.css          Sistema visual y estilos responsive
docs/                   Capturas y notas de verificación
```

## Verificación de esta revisión

- Compilación de producción completada.
- 11 pruebas de componentes y estado local completadas en Chrome Headless.
- Navegación de las cuatro páginas comprobada en los tres idiomas.
- Vistas revisadas en escritorio y a 390 y 320 px, sin desbordamiento horizontal ni imágenes rotas.
- Carruseles, menú móvil y formulario demo comprobados.
- Sin peticiones a servicios externos durante la comprobación de la demo.

Las pruebas de componentes son comprobaciones básicas, no una auditoría de seguridad ni cobertura exhaustiva. Más detalles en [docs/verification.md](docs/verification.md).

## Estado de dependencias

**Proyecto legado para portfolio.** `npm audit` en la revisión del 13 de noviembre de 2026 informa de 95 avisos en el árbol completo de dependencias: 6 críticos, 49 altos, 30 moderados y 10 bajos. Incluye herramientas de desarrollo y dependencias transitivas; el número no equivale a 95 fallos explotables de esta demo.

Antes de usar esta base para un servicio real, hay que actualizar Angular y sus dependencias, revisar los avisos concretos y volver a comprobar los flujos. No se presenta como aplicación lista para producción.

## Contenido e imágenes

Loto & Luz es una identidad ficticia. Los programas son ilustrativos, sin fechas, precios, ubicación o profesionales reales. Se retiraron imágenes, contacto, redes, biografías y configuración de correo del cliente original.

Las cuatro fotografías fueron generadas con IA para esta adaptación y optimizadas para la web. No representan un alojamiento, un equipo o un servicio existente. No se ha incluido material de stock de terceros ni se declara una licencia abierta para todo el código.

## Autora

**Ekaterina Adarchenko** · Full Stack Web Developer

[Portfolio](https://eadarchenko.github.io/) · [GitHub](https://github.com/eadarchenko)

## English summary

A fictional wellness retreat website adapted by Ekaterina Adarchenko from her original Angular project. This portfolio version has a new brand, AI-generated imagery, ES/EN/RU interface copy, responsive navigation, image carousels and a local-only demo form. Original client details and email-service configuration have been removed. There are no real bookings, payments or medical services. The Angular 16 dependency tree has known audit findings and needs an upgrade before any production use.
