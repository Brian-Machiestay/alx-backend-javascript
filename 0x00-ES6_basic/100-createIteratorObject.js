export default function createIteratorObject(report) {
  const iterate = {
    [Symbol.iterator]() {
      let counter = -1;
      const emps = [];
      Object.values(report.allEmployees).forEach((val) => emps.push(...val));
      return {
        next() {
          if (counter < emps.length - 1) {
            counter += 1;
            return { done: false, value: emps[counter] };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };

  return iterate;
}
