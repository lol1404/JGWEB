---
title: Java: actualiza ahora por una vulnerabilidad grave
date: 2026-11-18
summary: CERT-EU alerta de una vulnerabilidad grave en Java y OpenJDK. Te explicamos a quién afecta, qué riesgo existe y cómo actuar.
---

### Una actualización de Java que conviene no aplazar

El 17 de noviembre Oracle y el proyecto OpenJDK publicaron correcciones de seguridad para varias versiones de Java. Entre ellas destaca **CVE-2026-114938**, una vulnerabilidad con una puntuación CVSS de 8,1 que, en determinadas condiciones, podría permitir ejecutar código de forma remota sin autenticación.

La alerta no es solo para grandes empresas: cualquier organización que mantenga aplicaciones Java, servicios internos o herramientas que incluyan su propia máquina virtual debería comprobar qué versiones tiene instaladas. El aviso publicado por [CERT-EU el 18 de noviembre](https://cert.europa.eu/publications/security-advisories/2026-021/pdf) recomienda priorizar los sistemas expuestos a Internet.

### Qué ocurre y por qué importa

El fallo está relacionado con la corrupción de memoria en una optimización del compilador de Java que interviene en la decodificación Base64. Según CERT-EU, puede provocar una denegación de servicio y, en ciertos escenarios, llegar a la ejecución remota de código.

Hay un matiz importante: **no significa que cualquier equipo con Java esté automáticamente expuesto a un ataque remoto**. Para que se den las condiciones descritas, la máquina virtual debe ejecutarse en una CPU x86-64 compatible con determinadas instrucciones AVX-512, tener activa la optimización afectada y procesar datos Base64 controlados por un atacante. Esos datos podrían llegar, por ejemplo, a través de mecanismos de autenticación o de ciertos flujos de comunicación. CERT-EU indica que los sistemas ARM64 no están afectados por esta vulnerabilidad concreta.

Aun con esas condiciones, el riesgo merece atención. Java está presente en servidores, plataformas empresariales y productos de terceros. No basta con revisar los programas que el equipo de desarrollo ha creado: también hay que tener en cuenta aplicaciones comerciales, servicios de identidad y componentes incluidos dentro de contenedores o appliances.

### Qué versiones hay que revisar

El aviso de CERT-EU identifica como afectadas, entre otras, estas líneas de Java y OpenJDK:

- **Java 17:** versiones hasta la 17.0.21; la corrección indicada es 17.0.21.1.
- **Java 21:** versiones 21.0.13 y anteriores; la corrección es 21.0.13.1.
- **Java 25:** versiones 25.0.5 y anteriores; la corrección es 25.0.5.1.
- **Java 27:** versiones 27.0.1 y anteriores; la corrección es 27.0.1.1.
- **Java 8:** la compilación de rendimiento 8u511-perf debe pasar a 8u513.

También se mencionan versiones de GraalVM y distintas distribuciones basadas en OpenJDK, como Eclipse Temurin, Amazon Corretto, Azul Zulu, Microsoft Build of OpenJDK, BellSoft Liberica y Red Hat Build of OpenJDK. En estos casos, la disponibilidad de la corrección depende del proveedor y de su calendario de publicación.

La referencia principal para comprobar los paquetes afectados y las correcciones es el [aviso de seguridad de Oracle de noviembre de 2026](https://www.oracle.com/security-alerts/cspunov2026.html). No conviene asumir que una distribución está corregida solo porque tenga un número de versión parecido: hay que consultar las notas del proveedor que se utiliza.

### Pasos recomendados para empresas y administradores

Lo primero es hacer inventario. Comprueba qué versiones de Java se ejecutan en servidores, máquinas virtuales, contenedores y aplicaciones de terceros. En un entorno Linux, el comando `java -version` permite consultar la versión asociada al ejecutable disponible en el PATH, pero no descubre por sí solo todas las instalaciones del sistema ni los runtimes incluidos dentro de otras aplicaciones.

Después, identifica el proveedor y aplica la actualización corregida correspondiente. En servicios críticos, prepara una ventana de mantenimiento, valida la compatibilidad en un entorno de pruebas y reinicia las máquinas virtuales Java afectadas después de actualizar. CERT-EU recomienda expresamente ese reinicio para que el proceso deje de utilizar el código vulnerable.

Si no es posible actualizar de inmediato, CERT-EU documenta una mitigación temporal mediante la opción `-XX:-UseBASE64Intrinsics`, que requiere habilitar previamente las opciones de diagnóstico y reiniciar la JVM. No debe tratarse como sustituto del parche: es una medida provisional que conviene aplicar siguiendo las indicaciones del proveedor y evaluando su impacto.

La recomendación de actualizar también ha sido recogida por [Reuters](https://www.reuters.com/world/south-korea-holds-emergency-meeting-possible-flaws-java-programming-language-2026-11-18/), que informa de los avisos de las autoridades estadounidenses y surcoreanas. La noticia refuerza la importancia de revisar los sistemas, pero no implica que todos los equipos estén siendo atacados ni que exista explotación confirmada en cualquier entorno.

### La seguridad también forma parte del mantenimiento web

Una web no termina cuando se publica. Las dependencias, el servidor, los certificados y las herramientas que utiliza necesitan revisiones periódicas. Mantener actualizado el software reduce riesgos y ayuda a evitar que un componente antiguo se convierta en el punto débil de todo el servicio.

En JGWEB hablamos también de otros aspectos de una presencia digital cuidada, como el [diseño web responsive](diseno-web-responsive.html) y el [SEO local para aparecer en Google Maps](seo-local-google-maps.html). Son áreas distintas, pero forman parte de la misma idea: una web profesional debe funcionar bien, ser fácil de encontrar y mantenerse correctamente.

**En resumen:** si gestionas aplicaciones Java u OpenJDK, revisa hoy mismo las versiones instaladas, consulta las actualizaciones de tu proveedor y prioriza los servicios accesibles desde Internet. No esperes a que una incidencia te obligue a hacerlo.
