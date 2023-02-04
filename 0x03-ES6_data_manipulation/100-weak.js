export const weakMap = new WeakMap();
let track = 0;
export function queryAPI(endpoint) {
  weakMap.set(endpoint, track += 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
  return (track);
}
