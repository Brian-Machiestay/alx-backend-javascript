import readDatabase from '../utils';

let path = require('path');

path = path.resolve(__dirname, 'database.csv');

class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students\n');
    readDatabase(path).then((ob) => {
      const keys = Object.keys(ob);
      keys.sort();
      console.log(ob);
      for (const key of keys) {
        response.write(`Number of students in ${key}: ${ob[key][0]}. \
List: ${ob[key].join(', ')}\n`);
      }
      response.end();
    }).catch((err) => {
      console.log(err);
      response.status(500).write('Cannot load the database');
      response.end();
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase('database.csv').then((ob) => {
      response.send(`List: ${ob[major].join(', ')}`);
    }).catch((err) => {
      console.log(err);
      response.status(500).write('Cannot load the database');
      response.end();
    });
  }
}

export default StudentsController;
