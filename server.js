//server.js

import express from 'express';
import db from 'sqlite';
import bodyParser from 'body-parser';
import config from './index.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(express.static(__dirname + '/app'));

// app.get('/', async(req, res) => {
//     res.end('HW!');
// });

app.get('/', async(req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(config.port, err => {
    if (err) throw err;
    console.log(`App listening on port ${config.port}`);
})