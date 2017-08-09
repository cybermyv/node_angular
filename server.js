//server.js

import express from 'express';
import bodyParser from 'body-parser';
import config from './index.js';

const app = express();


app.use(express.static(__dirname + '/app'));
app.use

app.get('*', async(req, res) => {
    res.end('HW!');
});

app.listen(config.port, err => {
    if (err) throw err;
    console.log(`App listening on port ${config.port}`);
})