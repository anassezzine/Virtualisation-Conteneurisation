const express = require('express');
const pool = require('../db');  // Import correct

const router = express.Router();

router.post('/check-name', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Le prénom est requis" });
    }

    try {
        const query = 'SELECT * FROM prenoms WHERE prenom = $1';
        const result = await pool.query(query, [name.toLowerCase()]);
        res.json({ exists: result.rows.length > 0, name });
    } catch (error) {
        console.error('Erreur PostgreSQL:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;
