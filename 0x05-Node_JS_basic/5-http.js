const http = require('http');

const port = 1245;
const pat = process.argv[2];
const fs = require('fs');

const countStudents = (path, res) => {
  const ob = {};
  let numStu = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
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
          res.write(`Number of students in ${key}: ${ob[key][0]}. \
List: ${ob[key][1].join(', ')}`);
          resolve();
        }
      }
    });
  });
};

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(pat, res).catch((err) => console.log(err));
  }
});

app.listen(port, () => {
  console.log(`This server is running and listening on port ${port}`);
});

module.exports = app;
