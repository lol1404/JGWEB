---
title: Optimizely: el riesgo de los scripts externos
date: 2026-11-18
summary: El ataque a Optimizely afectó a webs de grandes marcas. Descubre qué riesgo tienen los scripts externos y cómo proteger tu página.
---

El incidente de Optimizely demuestra que una web puede poner en riesgo a sus visitantes a través de una herramienta externa, aunque su propio servidor no haya sido atacado. El 16 de noviembre de 2026, código malicioso se distribuyó mediante Optimizely Web Experimentation en páginas de 178 organizaciones, con funciones para intentar robar datos de pago y desviar criptomonedas.

- **A quién afecta:** a determinados clientes de Optimizely Web Experimentation cuyos proyectos fueron modificados.
- **Qué conviene saber:** los scripts externos se ejecutan dentro de la página y pueden acceder a información visible para el navegador.
- **Qué hacer:** revisar las herramientas integradas en la web y limitar los scripts de terceros.

## Qué ha ocurrido con Optimizely

Optimizely ofrece herramientas para probar distintas versiones de una página y analizar cómo interactúan los visitantes. Para utilizarlas, las webs integran un fragmento de JavaScript —el lenguaje que permite añadir funciones interactivas— que se carga desde el proveedor.

En su [informe inicial del 17 de noviembre](https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf), la compañía explica que un tercero aprovechó un fallo en el registro de Web Experimentation para suplantar usuarios con permisos y modificar el código JavaScript de algunos proyectos. Según Optimizely, no fue un robo de contraseñas: el fallo permitía actuar como determinados usuarios sin conocer sus claves.

La primera modificación maliciosa se produjo a las 07:51 UTC del 16 de noviembre. Optimizely detectó la actividad a las 13:34, corrigió la vulnerabilidad a las 16:10 y eliminó el código inyectado antes de las 22:24 UTC. La empresa afirma que el incidente se limitó a Web Experimentation y que no encontró indicios de impacto en otros productos.

## Qué podía hacer el código malicioso

El investigador Scott Helme, de Report URI, analizó 1.611 fragmentos de Optimizely y encontró 188 con código malicioso, pertenecientes a 178 organizaciones. En su [investigación técnica](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) documentó funciones para sustituir direcciones de monederos de criptomonedas, capturar datos de tarjetas introducidos en formularios de las propias páginas y cargar código dirigido a dispositivos Apple con versiones antiguas de iOS.

La [cobertura de Reuters](https://www.reuters.com/legal/government/popular-websites-subverted-bid-steal-crypto-target-iphone-users-2026-11-17/) recoge el incidente y advierte de que no pudo determinar cuántos visitantes fueron afectados ni si el código logró robar datos de pago.

Hay que separar lo observado de lo que aún no se sabe. Optimizely afirma que, al publicar su informe inicial, no tenía pruebas de que se hubieran extraído datos personales y no podía confirmar si los intentos de captura tuvieron éxito. Report URI sí documentó transacciones de criptomonedas hacia direcciones de los atacantes. Por tanto, no es correcto afirmar que todos los visitantes fueron afectados o que todas las tarjetas quedaron comprometidas.

## Por qué importa aunque tu negocio no use Optimizely

Muchas páginas incorporan servicios externos para medir visitas, mostrar mapas, atender consultas, gestionar publicidad, realizar pruebas o facilitar pagos. Cada integración añade código que se ejecuta en el navegador y puede cambiar sin que el propietario modifique su propia web.

Si un proveedor sufre un incidente, ese código puede convertirse en una vía de ataque. Es un ejemplo de ataque a la cadena de suministro: en lugar de entrar directamente en cada empresa, el atacante compromete una herramienta compartida por muchas páginas.

No significa que debas eliminar todos los servicios externos. Conviene saber cuáles utilizas, qué función cumplen y si siguen siendo necesarios.

## Cómo proteger una web o tienda online

Estas son medidas razonables que puedes pedir a quien desarrolla o mantiene tu página:

1. **Inventariar los scripts externos.** Revisar qué servicios se cargan, quién los gestiona y si siguen siendo necesarios. Comprueba también las etiquetas añadidas mediante herramientas como Google Tag Manager.
2. **Configurar una política CSP.** Una Content Security Policy (CSP) es una regla del navegador que limita desde qué dominios puede cargar recursos una página. Optimizely indica que una política estricta protegió sitios durante este incidente. Debe probarse para no bloquear funciones legítimas.
3. **Revisar formularios y pagos.** Las páginas que reciben datos personales o de tarjetas necesitan especial atención. Los campos de pago alojados por proveedores como Stripe o Adyen reducen la exposición frente a ciertos ataques de scripts, pero no sustituyen al resto de medidas.
4. **Mantener un seguimiento.** Revisar periódicamente las integraciones y las alertas de los proveedores permite detectar cambios inesperados.

Si tienes una tienda online, pregunta quién recibe los avisos de seguridad de cada servicio y cómo se retira una integración si aparece una incidencia.

## Una web segura también necesita mantenimiento

El caso de Optimizely recuerda que la seguridad no depende únicamente de tener HTTPS o una contraseña robusta. También importa el código de terceros que se ejecuta en el navegador de cada visitante y el control que tenemos sobre él.

En JGWEB tratamos el mantenimiento como parte de una presencia digital fiable, igual que el [diseño web adaptable a móviles](diseno-web-responsive), la [integración de WhatsApp](integracion-whatsapp) o el [SEO local para aparecer en Google Maps](seo-local-google-maps).

**En resumen:** revisa qué herramientas externas utiliza tu web, elimina las que no necesites y pide que se compruebe su política CSP. Si tienes una web o tienda online y quieres revisar sus scripts y medidas de seguridad, [contacta con JGWEB](../../pages/contacto) para valorar una revisión.
