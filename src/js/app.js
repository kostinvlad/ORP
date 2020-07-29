export default function orderByProps(obj, arrWithArgs) {
  let array = [];
  const array1 = [];
  const array2 = [];

  for (const [key, value] of Object.entries(obj)) {
    const item = { key, value };
    if (item.key === arrWithArgs[0]) {
      array1[0] = item;
    } else if (item.key === arrWithArgs[1]) {
      array1[1] = item;
    } else {
      array2.push(item);
    }
  }
  array2.sort((a, b) => {
    const nameA = a.key;
    const nameB = b.key;
    if (nameA > nameB) {
      return 1;
    }
    return -1;
  });

  array = array1.concat(array2);

  return array;
}
