const fs = require('fs');

const countStudents = (path) => {
  const ob = {};
  let numStu = 0;
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    for (const line of data) {
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
