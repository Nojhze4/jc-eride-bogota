# Juan Carlos E-Ride Bogotá Tours — Static Site

Proyecto estático simple (HTML/CSS/JS) para promocionar servicios de tours privados en Bogotá con un vehículo 100% eléctrico.

Estructura:

```
jc-eride-bogota/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

Instrucciones rápidas

1. Reemplaza las variables en `js/main.js` con los datos reales:

```js
const CONFIG = {
  whatsappNumber: "YOUR_WHATSAPP_NUMBER", // sin +, ejemplo: "57300..."
  email: "YOUR_EMAIL@example.com",
  googleMapsUrl: "YOUR_GOOGLE_MAPS_URL",
  instagramUrl: "YOUR_INSTAGRAM_URL"
};
```

2. Añade tus fotografías reales en `jc-eride-bogota/images/` (ya detectadas: `monserrate.jpeg`, `car1.jpeg`) y actualiza las rutas en `index.html` si es necesario.

Nota: El proyecto usa por ahora las imágenes encontradas en la carpeta `jc-eride-bogota/images/`.

3. Abrir `index.html` localmente en un navegador para ver la landing page.

Google Translate

Hay un placeholder en el botón `Translate`. Para integrar Google Translate, el propietario debe añadir el script oficial de Google y descomentar/ajustar la lógica en `js/main.js`.

WhatsApp

Los botones de WhatsApp usan `https://wa.me/` y se construyen desde `CONFIG.whatsappNumber`.

SEO

Rellena `title`, `meta description`, `og:image` y `canonical` en `index.html` antes de publicar.

Licencia

Este proyecto es un entregable estático creado a petición del propietario. No incluye imágenes reales ni datos personales.
