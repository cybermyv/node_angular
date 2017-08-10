//server.js

import express from 'express';
import db from 'sqlite';
import bodyParser from 'body-parser';
import config from './index.js';
import fs from 'fs';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

//app.use(express.static(__dirname + '/app'));

// app.get('/', async(req, res) => {
//     res.end('HW!');
// });

fs.appendFile('server.log', 'string to append', function(err) {
    if (err) return console.log(err);
    console.log('Appended!');
});


// fs.readFile("server.log", "utf8", function(err, data) {
//     if (err) return console.log(err);
//     console.log(data);
// });

// fs.readFile('server.log', function(err, data) {
//     if (err) throw err;
//     var array = data.toString().split("\n");
//     for (i in array) {
//         console.log(array[i]);
//     }
// });

var array = fs.readFileSync('server.log').toString().split("\n");
let s = '';
for (let i in array) {
    s = array[i];
    array[i] = 'A1 ' + s + ' A2';

}

console.log(array);

app.get('/', async(req, res) => {


    res.sendFile(__dirname + '/index.html');



});

app.listen(config.port, err => {
    if (err) throw err;
    console.log(`App listening on port ${config.port}`);
})