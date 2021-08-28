const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());

app.use('/api', apiRoutes);

app.use('./', htmlRoutes);

// Express.js middleware that instructs the server to make certain files readily available and to not gate it behind a server endpoint.
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});