const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

// Configuración de bodyParser para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de rutas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Iniciar el servidor
app.listen(config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${config.port}`);
});
