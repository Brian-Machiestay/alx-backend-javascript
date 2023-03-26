import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');
const getHomepage = AppController.getHomepage;
const Students = StudentsController;
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  getHomepage(req, res);
});

app.get('/students', function (req, res) {
  Students.getAllStudents(req, res);
});

app.get('/students/:major', function (req, res) {
  Students.getAllStudentsByMajor(req, res)
});

export default app;
