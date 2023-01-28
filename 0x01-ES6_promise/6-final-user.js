import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      values.forEach((val) => {
        const ob = {};
        ob.status = val.status;
        if (val.value) ob.value = val.value;
        if (val.reason) ob.value = val.reason;
        arr.push(ob);
      });
      return arr;
    });
}
