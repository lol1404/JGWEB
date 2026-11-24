---
title: Cleverbridge: robo de tarjetas y códigos CVV
date: 2026-11-24
summary: Cleverbridge confirma una brecha de datos de pago. Qué se sabe de las tarjetas afectadas y qué deben revisar las tiendas y sus clientes.
---

Cleverbridge, proveedor que gestiona compras y suscripciones de software para otras empresas, ha confirmado que un tercero copió datos de tarjetas almacenados en su plataforma. Detectó actividad no autorizada el 4 de noviembre de 2026 y empezó a avisar a las personas afectadas el día 20; algunas notificaciones incluyen número de tarjeta, caducidad y código CVV/CVC.

- **A quién afecta:** compradores cuyas tarjetas se utilizaron en transacciones gestionadas por Cleverbridge y empresas que dependen de este proveedor.
- **Qué conviene saber:** los avisos individuales no describen siempre los mismos datos y no se conoce el número total de afectados.
- **Qué hacer:** revisar las notificaciones, consultar los movimientos de la tarjeta y confirmar con el proveedor qué información pudo quedar expuesta.

## Qué ha confirmado Cleverbridge

En su [comunicado oficial](https://grow.cleverbridge.com/incident-update), la empresa explica que detectó actividad no autorizada el 4 de noviembre. Desconectó temporalmente los sistemas afectados y los restableció ese día. La investigación posterior confirmó que un tercero había copiado datos personales limitados, incluida información de tarjetas.

Las notificaciones comenzaron el 20 de noviembre, 16 días después. Cleverbridge no ha publicado cuántas personas están implicadas, cómo entraron los atacantes ni cuánto duró el acceso. Descarta el ransomware y afirma que sus sistemas no fueron cifrados. La restauración del servicio no significó que la investigación hubiera terminado.

## Qué empresas y datos aparecen en los avisos

Cleverbridge procesa compras y suscripciones para fabricantes de software. Su [página de clientes](https://grow.cleverbridge.com/resources/client-stories) incluye **Red Hat, SUSE y Sony**, pero eso no demuestra que sus compradores estén afectados. **Malwarebytes** sí confirmó en su [foro oficial](https://forums.malwarebytes.com/profile/2065-advancedsetup/solutions/?type=forums_topic) que una pequeña parte de sus clientes recibió avisos.

El comunicado público indica que el CVV apareció en una minoría de casos, pero no detalla todos los campos. [BleepingComputer](https://www.bleepingcomputer.com/news/security/cleverbridge-warns-hackers-stole-credit-card-numbers-cvvs-in-data-breach/) revisó una carta que enumera número, caducidad y CVV/CVC, y excluye otros datos personales. [The Register](https://www.theregister.com/cyber-crime/2026/11/23/cleverbridge-admits-attackers-stole-customers-credit-card-and-cvv-numbers-yep-you-read-that-right/5311573) examinó otra que también menciona correo, dirección de facturación y teléfono. La diferencia sigue sin aclararse; cada persona debe consultar su propia notificación.

## Por qué importa a una tienda online

Una tienda puede mostrar su marca y delegar el cobro en otra empresa. Ese proveedor procesa información sensible: un incidente suyo puede afectar a compradores aunque la web del comercio siga funcionando.

El CVV merece atención. El [PCI Security Standards Council](https://www.pcisecuritystandards.org/faqs/1280/) prohíbe conservarlo después de autorizar el pago, incluso cifrado. Cleverbridge confirma que apareció en algunos casos, pero no ha explicado cuándo se copió ni si estaba almacenado después de la autorización. Por tanto, la información pública no permite concluir que se incumpliera PCI DSS.

## Qué hacer si utilizas Cleverbridge o vendes online

Si has recibido un aviso, comprueba que corresponde a una compra tuya, revisa los movimientos y llama al banco desde su aplicación o el teléfono de la tarjeta. Pregunta si recomienda sustituirla. No compartas el número completo ni el CVV con quien te contacte.

Cleverbridge utiliza TransUnion/Cyberscout para enviar avisos legítimos, pero una brecha también puede servir de gancho para el phishing. La empresa dice que nunca pedirá datos de tarjeta, contraseñas o códigos por correo, teléfono o SMS. Ante la duda, consulta el aviso desde su web oficial o con tu banco. No hay una actualización del navegador que solucione este incidente: el riesgo está en los datos de pago.

Si gestionas una tienda, pregunta quién almacena los datos, si el pago se procesa en una página externa o mediante tokenización —sustituir el número por una referencia— y cómo te avisarían de una brecha. Comprueba que tu web no guarda números completos ni CVV.

Si también hay datos personales de clientes, coordina la respuesta con el proveedor y el responsable de protección de datos. La [AEPD indica](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/brechas-de-datos-personales-notificacion) que el responsable debe valorar el riesgo y, cuando proceda, notificar en 72 horas desde que tiene constancia. No se puede aplicar el plazo automáticamente sin conocer el papel de cada empresa.

Si no utilizas Cleverbridge, no asumas que estás afectado. Revisa también a los proveedores de pagos y renovaciones, no solo el servidor. En JGWEB hemos tratado otros riesgos externos, como el [incidente de Optimizely y sus scripts](optimizely-riesgo-scripts-externos) y los [fallos de seguridad en NGINX](nginx2root-cve-2026-123007).

**En resumen:** si compraste software mediante Cleverbridge, revisa tu notificación y consulta con tu banco; si tienes una tienda, identifica quién procesa los pagos y cómo responde ante una brecha. Si quieres revisar el recorrido de los datos de pago en tu web, [contacta con JGWEB](../../pages/contacto) para valorar una revisión de seguridad.

— José Manuel
