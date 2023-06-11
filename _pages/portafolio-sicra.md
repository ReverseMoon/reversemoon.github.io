---
title: "Sistema Informático de Captura de Resultados Ambientales"
permalink: /portafolio/sicra/
breadcrumbs: true
author_profile: true
classes: wide
categories:
  - Portafolio
tags:
  - Portafolio
---
Nodejs • MYSQL • SQL
{% capture fig_img_1 %}
![Foo]({{ '/assets/images/portafolio/sicra-1.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img_1 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Vista para selecionar uno de los multiples roles asignados al usuario.</figcaption>
</figure>

<div style="text-align: justify ">
Aplicacion Web utilizando Node.js para la gestión de reportes del Sistema Informático de Vigilancia de la Gestión Ambiental (VIGIA) utilizado implementado a multiples zonas de la division de distribución del Golfo Centro.
 </div>

### Características

    • Autenticación de usuarios
    • CRUD de Usuarios, Zonas.
    • OCR de PDF e Imagenes.
    • Bitácora.
    • Generacion de reportes en PDF.
    • Conversión de Archivos.
    • Multiples Roles con distintos permisos.

{% capture fig_img_2 %}
![Foo]({{ '/assets/images/portafolio/sicra-2.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img_2 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Vista para ver Seleccionar el tipo de reporte a consultar o generar.</figcaption>
</figure>