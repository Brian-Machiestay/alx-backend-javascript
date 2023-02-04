export default function hasValuesFromArray(superset, subarr) {
  const arrSet = new Set(subarr);
  for (const el of arrSet) {
    if (!superset.has(el)) return false;
  }
  return true;
}
