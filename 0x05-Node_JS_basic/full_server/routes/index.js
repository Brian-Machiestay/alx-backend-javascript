import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const { getHomepage } = AppController;
const Students = StudentsController;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  getHomepage(req, res);
});

app.get('/students', (req, res) => {
  Students.getAllStudents(req, res);
});

app.get('/students/:major', (req, res) => {
  Students.getAllStudentsByMajor(req, res);
});

export default app;
