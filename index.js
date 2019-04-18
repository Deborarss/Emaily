// Importing Express library
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Débora' });
});

// Dynamic Port Binding (Heroku tell us which port our app will use, so we need to make sure we listen to the port they tell us to)
const PORT = process.env.PORT || 5000;
app.listen(PORT);