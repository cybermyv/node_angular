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

// fs.appendFile('server.log', 'string to append', function(err) {
//     if (err) return console.log(err);
//     console.log('Appended!');
// });


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

// var array = fs.readFileSync('server.log').toString().split("\n");
// let s = '';
// for (let i in array) {
//     s = array[i];
//     array[i] = s.slice(0, -1);

// }

// console.log(array);

var createFilter = function() {
    let arr2 = [];
    arr2[0] = '(';

    let array = fs.readFileSync('server.log').toString().split("\r\n");

    let tmpStr = '';


    // AT('28a66c4d-b459-4174-9f1b-b9ee658d4396', AOGUID)>0 or
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            tmpStr = 'AT("' + array[i].toString() + '", AOGUID)>0 ';

        } else {
            tmpStr = 'AT("' + array[i].toString() + '", AOGUID)>0 or ';
        }

        arr2.push(tmpStr);
    };
    arr2.push(')');
    arr2.push('and ACTSTATUS = 1');

    let templateStr = arr2.join("");
    fs.writeFileSync('server.log', templateStr);
    console.log(arr2);
};

app.get('/', async(req, res) => {

    createFilter();
    res.sendFile(__dirname + '/index.html');



});

app.listen(config.port, err => {
    if (err) throw err;
    console.log(`App listening on port ${config.port}`);
})