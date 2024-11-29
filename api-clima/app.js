const express = require('express');
const bodyParser = require('body-parser');

const climaRoutes = require('./routes/clima');
const ciudadRoutes = require('./routes/ciudad');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/v1/ciudad', ciudadRoutes);
app.use('/v1/clima', climaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mensaje para indicar dónde está la documentación
console.log('Documentación de la API disponible en http://localhost:3000/api-docs');
