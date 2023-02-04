export default function updateUniqueItems(arg) {
  if (arg.constructor !== Map) throw new Error('Cannot process');
  try {
    for (const [key, val] of arg) {
      if (val === 1) arg.set(key, 100);
    }
    return arg;
  } catch (e) {
    throw new Error('Cannot process');
  }
}
