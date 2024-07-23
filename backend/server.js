//DATA BASE CONNECTION...
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'nodereact',
    password: 'Admin123#',
    database: 'nodereactdb',
    //port: 3306 // Ensure the port is correct
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// API endpoints....
 
//Get users API....
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users ORDER BY id DESC', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

//Create post api...
app.post('/api/createpost', (req, res) => {
    const {title, author, content} =req.body;
    const query = 'INSERT INTO posts (title, author, content) VALUES (?, ?, ?)';
    db.query(query, [title, author, content], (err, results) => {
         if(err){
             console.error(err);
             res.status(500).send('Server Error...');
         } else {
             res.status(200).send('Post Created Successfully.');
         }
     });
 });

//Get blog posts API....
app.get('/api/posts', (reg, res) => {
    db.query('SELECT * FROM posts ORDER BY id DESC', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Select specific post by post ID...
app.get('/api/posts/:id', (req, res) => {
    const postId = req.params.id;
    db.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).send({ message: 'Post not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// PUT endpoint to update a specific post
app.put('/api/posts/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    const query = 'UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?';
    const values = [title, content, author, postId];

    db.query(query, values, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send({ message: 'Post not found' });
        } else {
            res.status(200).send({ message: 'Post updated successfully' });
        }
    });
});

//Delete record....
app.delete('/api/posts/:id', (req, res) => {
    const postId = req.params.id;
    db.query('DELETE FROM posts WHERE id = ?', [postId], (err, results) => {
        if(err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0){
            res.status(400).send({ message: 'Post not Found.'});
        } else {
            res.status(200).send({ message: 'Post deleted successfully'});
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
