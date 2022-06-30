export default function getKey(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}
