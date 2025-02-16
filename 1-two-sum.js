function twoSum(array, target) {
  // console.time("firstSolutionTime");
  const startTime = performance.now();

  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);

    for (let j = i + 1; j < array.length; j++) {
      //   console.log(array[i], array[j], j);
      if (array[i] + array[j] === target) {
        // console.timeEnd("firstSolutionTime");
        const endTime = performance.now();
        console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);
        return [i, j];
      }
    }
  }
  // console.timeEnd("firstSolutionTime");
  const endTime = performance.now();
  console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);
  return "No Answer";
}

const twoSum2 = (array, target) => {
  const startTime = performance.now();

  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map.has(complement)) {
      const endTime = performance.now();
      console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);

      console.log(map);
      return [map.get(complement), i];
    } else map.set(array[i], i);
  }

  const endTime = performance.now();
  console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);
  return "No Answer";
};

// twoSum([2, 7, 11, 15], 9);
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
console.log(twoSum([4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3], 6));
console.log(twoSum2([4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3], 6));
