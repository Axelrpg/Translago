# Translago

Translago es una aplicación de traducción de texto desarrollada con **React Native** y **TypeScript**. Permite traducir texto entre una amplia variedad de idiomas utilizando la **API de Google Traductor**. La aplicación presenta una interfaz moderna y accesible gracias a **React Native Paper** y soporta tanto el modo claro como oscuro, dependiendo del tema establecido en el dispositivo.

## Características

- Traducción de texto entre múltiples idiomas.
- Uso de la API de Google Traductor para una traducción precisa.
- Interfaz de usuario intuitiva utilizando React Native Paper.
- Compatibilidad con modo claro y oscuro según la configuración del dispositivo.

## Requisitos

- **Node.js** (recomendado v14.x o superior)
- **npm** o **Yarn** para gestionar las dependencias.
- Cuenta y clave de API de Google Traductor.

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/Axelrpg/Translago.git
   cd translago

2. **Instala las dependencias:**

   ```bash
   npm install
   // o si prefieres Yarn:
   yarn install

3. **Configura la clave de API:**

   ```bash
   // config.ts
   export const API_KEY = 'TU_CLAVE_API';

4. **Ejecuta la aplicación:**

   ```bash
   // Para dispositivos Android:
   npm run android
   
   // o si prefieres Yarn:
   yarn android
   
   // Para dispositivos iOS:
   npm run ios
   
   // o con Yarn:
   yarn ios

## Uso

1. Abre la aplicación en tu dispositivo o emulador.
2. Ingresa el texto que deseas traducir.
3. Selecciona el idioma de origen y el idioma al que deseas traducir.
4. Presiona el botón de traducción para obtener el resultado.

## Tecnologías Utilizadas

- **React Native:** Framework para construir aplicaciones móviles.
- **TypeScript:** Lenguaje de programación para escribir código más seguro y mantenible.
- **Axios:** Cliente HTTP para realizar peticiones a la API de Google Traductor.
- **React Native Paper:** Componentes de interfaz de usuario adaptativos y accesibles.

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (**git checkout -b mi-nueva-funcionalidad**).
3. Realiza tus cambios y haz commit de los mismos (**git commit -m 'Añadida nueva funcionalidad'**).
4. Sube tus cambios a la rama (**git push origin mi-nueva-funcionalidad**).
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](https://github.com/Axelrpg/Translago/blob/main/LICENSE).

## Autor

Desarrollado por [Axelrpg](https://github.com/Axelrpg).

¡Gracias por usar Translago! Si tienes alguna pregunta o problema, no dudes en abrir un issue en el repositorio.
