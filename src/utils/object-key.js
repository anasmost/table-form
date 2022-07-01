export default function getKey(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
}

export function addIterator(obj, KEY_STRUCTURE) {
  obj[Symbol.iterator] = function* () {
    for (const key of KEY_STRUCTURE) {
      yield obj[key];
    }
  };

  return obj;
}
