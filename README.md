# LAMBDA7 — Landing institucional

Sitio institucional de una sola página para **LAMBDA7**, consorcio de especialistas en
precomisionado, comisionado y puesta en marcha de instalaciones de Oil & Gas.

> Probar en frío, confiar en caliente.

## Estructura

| Archivo | Qué es |
| --- | --- |
| `index.html` | Home one-page: hero, quiénes somos, servicios, experiencia, PAMPA, notas técnicas, contacto, footer |
| `pampa.html` | Página de producto de PAMPA (contenido del brochure) con descarga del PDF |
| `ds-base.js` | Loader del stylesheet del sistema de diseño |
| `_ds/industry-…/styles.css` | Sistema de diseño (tokens, componentes) |
| `image-slot.js` | Componente de placeholder de imagen |
| `assets/photos/` | Fotos de planta y campo usadas en el sitio |
| `assets/PAMPA-Brochure.pdf` | Brochure descargable de PAMPA |

## Cómo verlo

Es HTML estático sin build. Servilo desde la raíz del repo:

```bash
python3 -m http.server 8000
# http://localhost:8000/index.html
```

Abrir el archivo directo con `file://` también funciona.

## Notas de implementación

- **Formulario de contacto**: está diseñado y validado visualmente, pero no envía.
  Al implementar, conectar el `<form>` de `#contacto` a Formspree o un servicio equivalente.
- **Demo de PAMPA**: la animación de la sección PAMPA es una demo construida en HTML/CSS
  que hace de screen recording. Si se consigue una grabación real del software, reemplaza
  al bloque `.pdemo`.
- **Placeholders pendientes**: WhatsApp Business y LinkedIn están como placeholder.
- **Paleta**: azul petróleo `#0a0f1e` con acento turquesa `#35b8ab`. Los tokens de marca
  se sobreescriben en el `<style>` de cada página, sobre el sistema de diseño base.
- **Responsive** mobile-first, animaciones de scroll sutiles, respeta `prefers-reduced-motion`.

## Contacto

contacto@lambda7.com.ar — Neuquén, Argentina · operación en campo, Cuenca Neuquina
