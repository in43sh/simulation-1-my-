// Simulation 74C
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const shelfie_controller = require('./shelfie_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.get('/api/shelf/:id', shelfie_controller.getBins);

// Simulation 74D-3
app.post ('/api/bin/:id', shelfie_controller.create);
// Simulation 74D-1
app.get('/api/bin/:id', shelfie_controller.get);
// Simulation 74D-2
app.put('/api/bin/:id', shelfie_controller.update);
// Simulation 74D-4
app.delete('/api/bin/:id', shelfie_controller.delete);


const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );