const http = require('http');
const fs = require('fs');

const port = 1245;
const path = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        res.write(new Error('Cannot load the database'));
        res.end();
      } else {
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
        res.write(`Number of students: ${numStu}\n`);
        for (const key of Object.keys(ob)) {
          res.write(`Number of students in ${key}: ${ob[key][0]}. \
List: ${ob[key][1].join(', ')}\n`);
        }
        res.end();
      }
    });
  }
});

app.listen(port, () => {
  console.log(`This server is running and listening on port ${port}`);
});

module.exports = app;
