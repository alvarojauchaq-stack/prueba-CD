const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡PRUEBA 1 DE DESPLIEGUE CONTINUO CD!');
});

const server = app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
module.exports = { app, server };



