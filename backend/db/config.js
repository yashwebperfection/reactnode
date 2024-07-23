// backend/config/db.js
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'nodereact',
    password: 'Admin123#',
    database: 'nodereactdb'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
