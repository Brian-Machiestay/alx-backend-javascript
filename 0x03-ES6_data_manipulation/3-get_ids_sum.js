export default function getStudentIdsSum(stu) {
  const add = (a, b) => a + b;
  return (stu.map((obj) => obj.id).reduce(add));
}
