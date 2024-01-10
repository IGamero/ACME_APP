const express = require('express');
const router = express.Router();

const {
    receiveNotice,
    countLogs,
    compareAndNotifyERP,
} = require('../controllers/controller');

// Ruta para la raíz
router.get('/', (req, res) => {
    res.send('Bienvenido al microservicio de notificaciones de ACME');
});

// Ruta para recibir notificaciones
router.post('/receive-notice', receiveNotice);

// Ruta para contar troncos
router.post('/count-logs', countLogs);

// Ruta para comparar y notificar al ERP
router.post('/compare-and-notify-erp', compareAndNotifyERP);

module.exports = router;
