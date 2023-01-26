export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    }
    if (students.constructor !== Array) throw new Error('students must be an array of strings');
    if (!students.every((el) => typeof el === 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return (this._name);
  }

  set name(theName) {
    if (typeof theName !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = theName;
  }

  get length() {
    return (this._length);
  }

  set length(theLength) {
    if (typeof theLength !== 'number') {
      throw new Error('length must be a number');
    }
    this._length = theLength;
  }

  get students() {
    return (this._students);
  }

  set students(theStudents) {
    if (theStudents.constructor !== Array) throw new Error('students must be an array of strings');
    if (!theStudents.every((el) => typeof el === 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._students = theStudents;
  }
}
