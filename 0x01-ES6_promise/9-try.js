export default function guardrail(mathFunction) {
  const arr = [];
  try {
    const val = mathFunction();
    arr.push(val);
    arr.push('Guardrail was processed');
    return arr;
  } catch (e) {
    arr.push(`${e.name}: ${e.message}`);
    arr.push('Guardrail was processed');
    return arr;
  }
}
