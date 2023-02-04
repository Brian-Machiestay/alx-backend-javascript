export default function cleanSet(setobj, startString) {
  if (startString === '' || startString === undefined) return '';
  const strobj = [];
  setobj.forEach((obj) => {
    if (obj === undefined) return;
    if (obj.startsWith(startString)) {
      strobj.push(obj.substring(startString.length));
    }
  });
  let strstr = '';
  for (let i = 0; i < strobj.length; i += 1) {
    strstr += strobj[i];
    if (i < strobj.length - 1) strstr += '-';
  }
  return strstr;
}
