const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 33;

// Configurar CORS
app.use(cors());

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta para redireccionar a Ajax-json.html
app.get('/ra', function (req, res) {
  res.redirect('/Ras/Ajax-json.html');//El archivo a acceder debe estar dentro de la carpeta 'public' que se incluye en el paquete
});

// Iniciar el servidor
app.listen(puerto, function () {
  console.log('CORS está habilitado y funcionando en el puerto: ' + puerto);
});
