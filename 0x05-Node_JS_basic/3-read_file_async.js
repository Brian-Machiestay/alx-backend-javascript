const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  const ob = {};
  let numStu = 0;
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      throw new Error('Cannot load the database');
    }
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
    console.log(`Number of students: ${numStu}`);
    for (const key of Object.keys(ob)) {
      console.log(`Number of students in ${key}: ${ob[key][0]}. \
List: ${ob[key][1].join(', ')}`);
    }
    resolve('');
  });
});

module.exports = countStudents;
