let logsQuantityFromSupplier;
let logsCountedByComputerVision;

// Cantidad de troncos recibidos 
exports.receiveNotice = (req, res) => {
    try {
        const { quantity } = req.body;
        logsQuantityFromSupplier = quantity;

        console.log(`Se van a recibidir ${quantity} troncos.`);
        res.send(`Se van a recibidir ${quantity} troncos.`);
    } catch (error) {
        console.error('Error al procesar la notificación:', error);
        res.status(500).send('Error interno al procesar la notificación');
    }
};

// Cantidad de troncos leida por el sensor
exports.countLogs = (req, res) => {
    try {
        const { quantity } = req.body;
        logsCountedByComputerVision = quantity;

        console.log("Se han contado " + logsCountedByComputerVision + " troncos")
        res.send("Se han contado " + logsCountedByComputerVision + " troncos")

    } catch (error) {
        console.error('Error al procesar la recepción del camión:', error);
        res.status(500).send('Error interno al procesar la recepción del camión');
    }

};

exports.compareAndNotifyERP = (req, res) => {

    const isMatching = logsQuantityFromSupplier === logsCountedByComputerVision;

    // Se compara la cantidad de troncos notificados con los entregados
    if (isMatching) {

        console.log('La cantidad de troncos entregada conicide con la notificada')
        res.send('La cantidad de troncos entregada conicide con la notificada')

    } else {
        if (logsQuantityFromSupplier > logsCountedByComputerVision) {

            const totalLogs = logsQuantityFromSupplier - logsCountedByComputerVision;
            console.log('Se han entregado menos troncos. Faltan ' + totalLogs + " tronco/s")
            res.send('Se han entregado menos troncos. Faltan ' + totalLogs + " tronco/s")
        } else {
            const totalLogs = logsReceivedByACME - logsQuantityFromSupplier;
            console.log('Se han entregado más troncos. Sobran ' + totalLogs + " tronco/s")
            res.send('Se han entregado más troncos. Sobran ' + totalLogs + " tronco/s")
        }
    }
};
