function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    for (let j = i + 1; j < array.length; j++) {
      //   console.log(array[i], array[j], j);
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return "No Answer";
}
twoSum([2, 7, 11, 15], 9);
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 0, 0, 0, 0, 0, 3, 0, 0, 3], 6));
