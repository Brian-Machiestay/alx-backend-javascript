import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const ob = {};
  try {
    await uploadPhoto().then((val) => {
      ob.photo = val;
    });
    await createUser().then((val) => {
      ob.user = val;
    });
    return ob;
  } catch (e) {
    ob.photo = null;
    ob.user = null;
    return ob;
  }
}
