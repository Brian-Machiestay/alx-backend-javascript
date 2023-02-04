export default function getStudentsByLocation(stu, city) {
  return (stu.filter((obj) => obj.location === city));
}
