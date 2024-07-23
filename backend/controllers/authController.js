// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
//const users = [];
const register = (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    User.findUserByUsername(username, (err, user) => {
        if (err) {
            // Return here to ensure no further code runs after sending a response
            return res.status(500).json({ message: 'Error checking for user.' });
        }
        if (user) {
            // Return here to ensure no further code runs after sending a response
            return res.status(400).json({ message: 'User already registered.' });
        }

        // If user does not exist, create the new user
        User.createUser(username, password, (err, result) => {
            if (err) {
                // Return here to ensure no further code runs after sending a response
                return res.status(500).json({ message: 'Error registering user.' });
            }
            // Return here to ensure no further code runs after sending a response
            return res.status(200).json({ message: 'User registered successfully.' });
        });
    });
};


//Login...
const login = (req, res) => {
    const { username, password } = req.body;
    User.findUserByUsername(username, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'User not found' });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

module.exports = { register, login };
