export default function iterateThroughObject(reportWithIterator) {
  let empformed = '';
  let count = 0;
  /* eslint-disable  no-unused-vars */
  for (const c of reportWithIterator) {
    count += 1;
  }

  let empcount = 1;
  for (const emp of reportWithIterator) {
    empformed += emp;
    if (empcount < count) {
      empformed += ' | ';
    }
    empcount += 1;
  }
  return empformed;
}
