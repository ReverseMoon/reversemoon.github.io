---
title: "Sistema Web para la Aministración de Direcciones IP"
permalink: /portafolio/swaip/
breadcrumbs: true
author_profile: true
classes: wide
categories:
  - Portafolio
tags:
  - Portafolio
---
Nodejs • MYSQL
{% capture fig_img_1 %}
![Foo]({{ '/assets/images/portafolio/swaip-1.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img_1 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Vista para ver verificar el estado de red de multiples clientes.</figcaption>
</figure>

<div style="text-align: justify ">

Aplicación Web utilizando Node.js para la gestión de direcciones IP
donde se logró obtener una retroalimentación en tiempo real del estado actual de la red interna, junto con reportes, estadísticas y bitácora. De igual forma a la aplicación se le dio la característica de crear múltiples cuentas con diferentes permisos logrando con esto que dicho sistema pueda ser utilizado por las otras agencias.
Esto conllevo a un manejo rápido e intuitivo para el usuario logrando consigo una disminución considerable en el tiempo que se solía dedicar a esta tarea dentro de la compañía.
 </div>

### Características

    • Autenticación de usuarios
    • Manejo de Cookies.
    • CRUD de clientes.
    • Graficacíon de datos.
    • Bitácora.
    • Creación de libro de Excel programáticamente.
    • Captcha.
    • Conexión a través de Websockets.
    • Ping.

{% capture fig_img_2 %}
![Foo]({{ '/assets/images/portafolio/swaip-2.jpg' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img_2 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Vista para ver Administrar a los clientes en la red.</figcaption>
</figure>