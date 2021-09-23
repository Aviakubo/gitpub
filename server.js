const express = require('express');
console.log(express);

const app = express();

app.get('/drinks', (req, res) => {
    res.render(`drinks_index.ejs`);
});

app.listen(3000);