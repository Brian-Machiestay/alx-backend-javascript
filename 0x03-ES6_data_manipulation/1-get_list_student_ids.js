export default function getListStudentIds(stuObjs) {
  let arr = [];
  if (!stuObjs || stuObjs.constructor !== Array) return arr;
  arr = stuObjs.map((obj) => obj.id);
  return arr;
}
