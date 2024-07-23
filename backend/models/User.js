// backend/models/User.js
const db = require('../db/config');
const bcrypt = require('bcryptjs');

//Create user API...
const createUser = (username, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return callback(err);
        }
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(query, [username, hash], (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    });
};


const findUserByUsername = (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

module.exports = { createUser, findUserByUsername };
