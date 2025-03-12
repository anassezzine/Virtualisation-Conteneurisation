require('dotenv').config();
const express = require('express');
const cors = require('cors');
const namesRouter = require('./routes/names');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.use(express.json()); 

app.use('/', namesRouter);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Backend en ligne sur http://localhost:${PORT}`);
});
