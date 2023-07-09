// Configuración de la base de datos
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'grupo23bakend',
  password: '12345678**',
  database: 'hospital1'
});

// Conexión a la base de datos
connection.connect(function(err) {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = {connection}