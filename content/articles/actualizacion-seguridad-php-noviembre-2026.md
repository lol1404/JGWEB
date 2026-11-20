---
title: PHP: nueva actualización corrige 18 fallos
date: 2026-11-20
summary: PHP publica parches para 18 fallos, siete críticos. Comprueba qué versiones afectan a tu web y qué debes pedir al hosting.
---

PHP ha publicado actualizaciones que corrigen 18 vulnerabilidades, siete clasificadas como críticas. Algunas podrían permitir ejecutar código en el servidor sin autenticación bajo configuraciones concretas. Si tu web utiliza WordPress, WooCommerce, Drupal u otra aplicación basada en PHP, comprueba qué versión ejecuta el alojamiento.

- **A quién afecta:** servidores y webs que ejecutan PHP, especialmente instalaciones con PHP-FPM y conexiones persistentes configuradas de una forma concreta.
- **Qué conviene saber:** CVE-2026-129289 permite potencialmente ejecutar código mediante una técnica llamada *request smuggling*.
- **Qué hacer:** pedir al hosting que confirme la versión instalada, aplique la actualización y revise PHP-FPM.

## Qué ha publicado el equipo de PHP

El 19 de noviembre, el equipo de PHP publicó versiones de mantenimiento y seguridad para sus ramas actuales: PHP 8.5.13, 8.4.28, 8.3.37 y 8.2.36. Ese mismo día también llegó PHP 8.6.0, que incorpora las correcciones en su nueva rama. Las versiones y fechas aparecen en el [archivo oficial de noticias de PHP](https://www.php.net/archive/2026.php) y en el [registro oficial de cambios de PHP 8](https://www.php.net/ChangeLog-8.php).

[NHS England](https://digital.nhs.uk/cyber-alerts/2026/cc-4900) contabiliza siete vulnerabilidades críticas, cuatro altas y seis moderadas, además de un fallo en una biblioteca incluida. [BleepingComputer](https://www.bleepingcomputer.com/news/security/php-security-updates-fix-18-flaws-including-critical-rce-bugs/) y [Aikido](https://www.aikido.dev/blog) hablan de 18 CVE: el aviso británico separa ese componente empaquetado de las 17 vulnerabilidades clasificadas por gravedad.

Los fallos afectan al motor de PHP, PHP-FPM, CGI, las sesiones, SOAP, Phar y el tratamiento de direcciones web.

## El riesgo principal: PHP-FPM y CVE-2026-129289

Uno de los problemas que más atención ha recibido es **CVE-2026-129289**, una vulnerabilidad de PHP-FPM. PHP-FPM es el servicio que ejecuta código PHP y se comunica con el servidor web, por ejemplo NGINX o Apache.

El fallo permite un ataque de *request smuggling*: una petición HTTP deja datos sin leer y, si el servidor reutiliza la conexión con PHP-FPM, esos datos pueden interpretarse como una segunda petición interna. En determinadas condiciones, el atacante podría ejecutar código PHP.

Hay una precisión importante: **no todas las instalaciones de NGINX o Apache están expuestas**. Según [NHS England](https://digital.nhs.uk/cyber-alerts/2026/cc-4900) y [BleepingComputer](https://www.bleepingcomputer.com/news/security/php-security-updates-fix-18-flaws-including-critical-rce-bugs/), el escenario requiere reutilización de conexiones FastCGI entre el servidor web y PHP-FPM. No es la configuración predeterminada habitual: por ejemplo, puede activarse con fastcgi_keep_conn on en NGINX o enablereuse=on en Apache mod_proxy_fcgi.

También se han corregido fallos de uso después de liberar memoria: errores que hacen que el programa vuelva a utilizar datos que ya no debería considerar válidos. Algunos pueden provocar caídas o ejecución remota de código. El changelog detalla CVE-2026-129474, CVE-2026-129496 y CVE-2026-126714.

## Qué versiones debes comprobar

Estas son las versiones corregidas publicadas el 19 de noviembre:

| Rama de PHP | Versión corregida |
|---|---:|
| PHP 8.6 | 8.6.0 |
| PHP 8.5 | 8.5.13 |
| PHP 8.4 | 8.4.28 |
| PHP 8.3 | 8.3.37 |
| PHP 8.2 | 8.2.36 |

Si utilizas una versión anterior, consulta si el proveedor ha incorporado los parches. Algunas distribuciones mantienen paquetes propios y pueden aplicar correcciones sin cambiar el número visible.

El aviso de NHS England y el análisis de [The Register](https://www.theregister.com/patches/2026/11/18/another-critical-php-security-release-has-dropped/5310911) indican que hay pruebas de concepto públicas para algunos de estos problemas, es decir, demostraciones técnicas que muestran cómo reproducirlos. La organización considera realista que se produzcan intentos de explotación. Esto no demuestra que tu web haya sido atacada, pero sí hace recomendable no aplazar la actualización.

## Qué hacer si tienes una web o tienda online

Si administras directamente el servidor, actualiza PHP a la versión corregida de tu rama y revisa los servicios PHP-FPM y LSAPI. Si no puedes instalar el parche de inmediato, desactivar temporalmente la reutilización de conexiones FastCGI puede mitigar CVE-2026-129289. No obstante, esa medida **no corrige el resto de vulnerabilidades** y no sustituye a la actualización.

Si tu web está alojada en un hosting, pide al soporte que confirme:

1. Qué versión de PHP ejecuta tu dominio y si ya está parcheada.
2. Si utiliza PHP-FPM y si tiene habilitada la reutilización de conexiones FastCGI.
3. Si los procesos PHP se han reiniciado después de actualizar.
4. Si el servidor ejecuta versiones antiguas que ya no reciben correcciones oficiales.

WordPress y WooCommerce dependen de PHP, aunque el propietario no gestione directamente el servidor. Si no sabes qué tecnología utiliza tu web, el hosting debería poder confirmártelo.

Los visitantes no necesitan actualizar su navegador o móvil: el problema está en el servidor. Si una tienda sospecha una intrusión, debe valorar si se han visto afectados datos personales y las obligaciones de notificación aplicables.

## Mantener PHP actualizado también protege tu negocio

La seguridad web exige mantener actualizados el lenguaje, el servidor y los componentes de las aplicaciones. Este aviso se suma a otros riesgos recientes que hemos explicado en JGWEB, como [NGINX2Root y los fallos en servidores web](nginx2root-cve-2026-123007), la [vulnerabilidad de Apache HTTP/2](apache-http2-cve-2026-119618) y la [actualización de seguridad de Java](java-actualizacion-seguridad-noviembre-2026).

**En resumen:** si tu web utiliza PHP, confirma hoy mismo la versión instalada y pregunta al hosting cuándo ha aplicado los parches del 19 de noviembre. Si quieres revisar el mantenimiento y la seguridad de tu web o tienda online, [contacta con JGWEB](../../pages/contacto) y valoraremos qué comprobaciones necesita.

— José Manuel
