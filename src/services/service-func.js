export function updateValueByKey(array, key, value, newValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      array[i].isFollow = newValue;}
  }
  const found = array.find((e) => e[key] === value);
  if (!found) {
    const newObj = { id: value, isFollow: false };
      array.push(newObj);
    }
  }