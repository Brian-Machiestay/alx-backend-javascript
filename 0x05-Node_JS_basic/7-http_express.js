const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const path = process.argv[2];

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(path).then((data) => {
    const ob = {};
    let numStu = 0;
    for (const line of data.split('\n')) {
      if (line !== '') {
        const fields = line.split(',');
        if (fields[3] !== 'field') {
          if (ob[fields[3]] === undefined) {
            ob[fields[3]] = [0, []];
          }
          ob[fields[3]][0] += 1;
          numStu += 1;
          ob[fields[3]][1].push(fields[0]);
        }
      }
    }
    res.write(`Number of students: ${numStu}`);
    for (const key of Object.keys(ob)) {
      res.write(`Number of students in ${key}: ${ob[key][0]}. \                                                                                                       List: ${ob[key][1].join(', ')}`);
    }
    res.end();
  }).catch((err) => {
    res.send(err);
    res.end();
  });
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
