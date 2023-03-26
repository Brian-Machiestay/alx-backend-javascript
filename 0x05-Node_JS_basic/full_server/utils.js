const fs = require('fs');

const readDatabase = (path) => {
  const ob = {};
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else {
        for (const line of data.split('\n')) {
          if (line !== '') {
            const fields = line.split(',');
            if (fields[3] !== 'field') {
              if (ob[fields[3]] === undefined) {
                ob[fields[3]] = [];
              }
              ob[fields[3]].push(fields[0]);
            }
          }
        }
        resolve(ob);
      }
    });
  });
};

module.exports = readDatabase;
