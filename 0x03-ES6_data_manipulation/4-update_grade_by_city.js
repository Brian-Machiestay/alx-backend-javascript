export default function updateStudentGradeByCity(stu, city, newGrades) {
  const stuByCity = stu.filter((obj) => obj.location === city);
  return stuByCity.map((objstu) => {
    const obj = objstu;
    newGrades.forEach((grad) => {
      if (obj.id === grad.studentId) obj.grade = grad.grade;
    });
    if (!obj.grade) obj.grade = 'N/A';
    return obj;
  });
}
