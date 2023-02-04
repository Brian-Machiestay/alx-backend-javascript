export default function createInt8TypedArray(length, position, value) {
  const int8buf = new ArrayBuffer(length);
  const view = new DataView(int8buf);
  try {
    view.setInt8(position, value);
    return view;
  } catch (e) {
    throw new Error('Position outside range');
  }
}
