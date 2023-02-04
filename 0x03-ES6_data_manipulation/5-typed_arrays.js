export default function createInt8TypedArray(length, position, value) {
  const int8buf = new ArrayBuffer(length);
  const view = new DataView(int8buf);

  view.setInt8(position, value);
  return view;
}
