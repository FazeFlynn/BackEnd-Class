const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: '8000802709', 
  database: 'test3' 
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err);
      return;
    }
    console.log('Connected to MySQL Database - ' + connection.config.database);
  });