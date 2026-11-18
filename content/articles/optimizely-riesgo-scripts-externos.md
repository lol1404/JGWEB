---
title: Optimizely: el riesgo de los scripts externos
date: 2026-11-18
summary: El ataque a Optimizely afectó a webs de grandes marcas. Descubre qué riesgo tienen los scripts externos y cómo proteger tu página.
---

El incidente de Optimizely demuestra que una web puede poner en riesgo a sus visitantes a través de una herramienta externa, incluso si el servidor del negocio no ha sido atacado. En noviembre de 2026, investigadores detectaron código malicioso distribuido mediante Optimizely Web Experimentation en páginas de 178 organizaciones; el código podía intentar robar datos de pago y criptomonedas.

- **A quién afecta:** especialmente a clientes de Optimizely Web Experimentation cuyos proyectos fueron modificados, no a todas las webs ni a todos los productos de Optimizely.
- **Qué conviene saber:** un script externo se ejecuta dentro de la página y puede tener acceso a lo que el visitante ve y escribe, según sus permisos y las protecciones del sitio.
- **Qué hacer:** revisar las herramientas integradas en la web, limitar los scripts de terceros y comprobar que existe una política de seguridad adecuada.

## Qué ha ocurrido con Optimizely

Optimizely ofrece herramientas para probar distintas versiones de una página y analizar cómo interactúan los visitantes. Para utilizarlas, las webs integran un pequeño fragmento de JavaScript que se carga desde la infraestructura del proveedor. JavaScript es el lenguaje que permite añadir funciones interactivas a una página.

Según el [informe inicial publicado por Optimizely el 17 de noviembre](https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf), un tercero aprovechó un fallo en el proceso de registro de Web Experimentation para hacerse pasar por usuarios con permisos y modificar el código JavaScript de algunos proyectos. La compañía indica que no fue un robo de contraseñas: el fallo permitía suplantar usuarios sin conocer sus claves.

El proveedor sitúa la ventana general de actividad entre las 07:51 y las 22:24 UTC del 16 de noviembre. Afirma que corrigió el fallo, revocó las sesiones implicadas y eliminó el código inyectado de los proyectos afectados. También señala que el incidente se limitó a Web Experimentation y que no encontró indicios de impacto en otros productos de Optimizely.

## Qué podían hacer los scripts maliciosos

El investigador de seguridad Scott Helme, de Report URI, identificó 188 fragmentos de código asociados a 178 organizaciones. En su [análisis técnico del incidente](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) explica que el código observado intentaba sustituir direcciones de monederos de criptomonedas, capturar datos de tarjetas introducidos en formularios de las propias páginas y, en determinados dispositivos Apple, cargar herramientas que trataban de aprovechar vulnerabilidades de iOS.

Medios como [Ars Technica también documentaron el ataque](https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/), con ejemplos de organizaciones cuyos sitios sirvieron el código malicioso. La investigación del medio coincide en el problema central: el contenido llegaba a los visitantes a través de una herramienta legítima que las webs ya tenían integrada.

Hay que distinguir entre lo observado por los investigadores y lo confirmado por el proveedor. Optimizely afirma que, por el momento, no tiene pruebas de que se hayan extraído datos personales y que todavía no puede determinar si los intentos de captura tuvieron éxito. Report URI, por su parte, documentó movimientos de criptomonedas hacia direcciones de los atacantes. Por tanto, no sería correcto afirmar que todos los visitantes fueron infectados o que todas las tarjetas quedaron comprometidas.

## Por qué importa aunque tu negocio no use Optimizely

El problema va más allá de una marca concreta. Muchas páginas incorporan servicios externos para medir visitas, mostrar mapas, atender consultas, gestionar publicidad, realizar pruebas o facilitar pagos. Cada integración añade código que puede cambiar sin que el propietario tenga que modificar su propia web.

Si un proveedor sufre un incidente, ese código puede convertirse en una vía de ataque para los visitantes. Es lo que se conoce como un ataque a la cadena de suministro: en lugar de entrar directamente en cada empresa, el atacante compromete una herramienta compartida por muchas páginas.

Esto no significa que debas eliminar todos los servicios externos. Significa que conviene saber cuáles utilizas, qué función cumplen y si siguen siendo necesarios. Una web sencilla con unas pocas integraciones bien elegidas puede ser más fácil de mantener y revisar que otra cargada de etiquetas y complementos que nadie supervisa.

## Cómo proteger una web o tienda online

Hay varias medidas razonables que puedes pedir a quien desarrolla o mantiene tu página:

1. **Inventariar los scripts externos.** Revisar qué servicios se cargan, quién los gestiona y si siguen siendo necesarios. También hay que comprobar las etiquetas añadidas mediante gestores como Google Tag Manager.
2. **Aplicar una política CSP.** Una Content Security Policy (CSP) es una regla del navegador que limita desde qué dominios puede cargar recursos una página. Una política bien diseñada puede bloquear scripts inesperados, aunque debe probarse para no romper funciones legítimas.
3. **Revisar formularios y pagos.** Las páginas que reciben datos personales o de tarjetas necesitan especial atención. Utilizar pasarelas con campos de pago alojados por el proveedor puede reducir la exposición frente a ciertos ataques, pero no sustituye al resto de medidas.
4. **Mantener un seguimiento.** Revisar periódicamente las integraciones, las alertas del proveedor y los informes de seguridad permite detectar cambios que no estaban previstos.

Si tienes una tienda online, pregunta también quién recibe los avisos de seguridad de cada servicio y cuánto se tarda en retirar una integración si aparece una incidencia. No basta con instalar una herramienta y olvidarse de ella.

## Una web segura también necesita mantenimiento

El caso de Optimizely recuerda que la seguridad no depende únicamente de tener un certificado HTTPS o una contraseña robusta. También importa el código de terceros que se ejecuta en el navegador de cada visitante y el control que tenemos sobre él.

En JGWEB tratamos el mantenimiento como parte de una presencia digital fiable, igual que el [diseño web adaptable a móviles](diseno-web-responsive.html), la [integración de WhatsApp](integracion-whatsapp.html) o el [SEO local para aparecer en Google Maps](seo-local-google-maps.html).

**En resumen:** revisa qué herramientas externas utiliza tu web, elimina las que no necesites y pide que se compruebe su política CSP y sus integraciones. Si tienes una web o tienda online y quieres revisar sus scripts y medidas de seguridad, [contacta con JGWEB](../../pages/contacto.html) para valorar una revisión.
