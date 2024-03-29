**Conceptos básicos de la solución:** 

***Arquitectura de microservicios:*** 
- Esta solución está diseñada como un microservicio. Cada funcionalidad (recibir notificaciones, contar registros, comparar ERP y notificaciones) está encapsulada en su propio módulo (controlador) para una mejor extensibilidad. 


**Por qué elegir esta solución:** 

1. ***Extensibilidad y modularidad:*** 
- La arquitectura de microservicios permite escalar  cada característica de forma independiente. Si se requiere un cambio, ese cambio solo afecta esa funcionalidad, por lo que el resto de la aplicación funciona sin eventos inesperados. 

2. ***División de responsabilidad:*** 
- Cada microservicio tiene ciertas responsabilidades. Por ejemplo, el microservicio "recibir aviso" maneja notificaciones, "countLogs" maneja el recuento de registros y "compareAndNotifyERP" maneja las interacciones con  ERP. Esta separación simplifica el mantenimiento y permite cambiar o actualizar componentes individuales sin afectar a todo el sistema. 

**Cómo utilizar NodeJS/Express:** 

1. ***Express para API RESTful:*** 
– NodeJS con Express se utiliza para crear API RESTful para la comunicación entre interfaces y  microservicios. Express simplifica la definición de rutas, el manejo de solicitudes y la implementación de middleware. 

2. ***Body parser:*** 
- El middleware "Body parser" se utiliza para analizar datos JSON de  solicitudes entrantes y facilita la manipulación de cargas útiles JSON en los controladores. 

3. ***Variables globales para estado:*** 
- Las variables globales como logsQuantityFromSupplier, logsCountedByComputerVision y logsReceivedByACME se utilizan para mantener el estado entre diferentes rutas en un entorno sin estado. Este método se esta utilizado debido a ser una simulación. Si se elevase a una situación real tendria que manejarse el estado del sistema de otra manera.

4. ***Configuración:*** 
- El archivo de configuración ('config.js') utiliza el módulo 'dotenv' para cargar variables de entorno y mantener la configuración de manera segura. 


**Conclusión:**

Esta solución aprovecha la arquitectura de microservicios para crear un sistema modular, escalable y fácil de mantener. Se eligió NodeJS con Express por su simplicidad, rendimiento e idoneidad para crear API RESTful. Durante la implementación, se pondrá énfasis en la separación de responsabilidades y la comunicación asincrónica para aumentar la confiabilidad en el manejo de diversas funciones.