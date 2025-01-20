# PT_Ing_Software
### Paso a Paso para Conectar el Backend con la Base de Datos

1. **Clonar el Repositorio**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Configurar la Base de Datos**

   - Crea una base de datos PostgreSQL en tu sistema.
   - Anota el nombre de la base de datos, el usuario y la contraseña.

3. **Restaurar la Base de Datos desde el Backup**

   - En PostgreSQL, crea una nueva base de datos.
   - Usa la opción `restore` para restaurar la base de datos desde el archivo de backup proporcionado en el repositorio.

4. **Modificar el Archivo `application.properties`**

   - Abre el archivo `src/main/resources/application.properties`.
   - Modifica las siguientes propiedades con los detalles de tu base de datos:

     ```ini
     spring.datasource.url=jdbc:postgresql://localhost:5432/<NOMBRE_DE_TU_BASE_DE_DATOS>
     spring.datasource.username=<TU_USUARIO>
     spring.datasource.password=<TU_CONTRASEÑA>
     ```

5. **Instalar Dependencias**

   - Asegúrate de tener Gradle instalado.
   - Ejecuta el siguiente comando para instalar las dependencias:

     ```bash
     ./gradlew build
     ```

6. **Ejecutar la Aplicación**

   - Ejecuta la aplicación con el siguiente comando:

     ```bash
     ./gradlew bootRun
     ```

7. **Verificar la Conexión**

   - La aplicación debería estar corriendo en `http://localhost:8080`.
   - Verifica que la conexión a la base de datos esté funcionando correctamente.

### Configuración de JWT

- Las credenciales predeterminadas para autenticación JWT son:
  - **Usuario:** pedro
  - **Contraseña:** pedro33

### Ejemplo de `application.properties`

```ini
spring.application.name=back_PT

spring.datasource.url=jdbc:postgresql://localhost:5432/PT_ingSoftware
spring.datasource.username=postgres
spring.datasource.password=Julian2003
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.show-sql=true
jwt.expiration=3600
jwt.secret=LZOzVwt6WmaOlKj93nKXVrUh2Z9OWQG94NCcJQxsVHE
```

## Instrucciones para manejar el Frontend

1. Asegúrate de que el backend y la base de datos estén configurados y conectados correctamente.
2. Navega al directorio del frontend en tu terminal.
3. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   ```bash
   ng serve
4. Una vez que el servidor esté en funcionamiento, abre tu navegador web y dirígete a la siguiente URL:
http://localhost:4200/
5. Si todo está configurado correctamente, deberías ver la aplicación funcionando en tu navegador.