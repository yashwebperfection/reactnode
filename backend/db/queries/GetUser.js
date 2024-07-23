// backend/db/queries/getPosts.js
const db = require('../config');

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