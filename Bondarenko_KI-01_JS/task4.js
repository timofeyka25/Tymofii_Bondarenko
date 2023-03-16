function countPairs(arr, target) {
  const count = {};
  let pairs = 0;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num of arr) {
    const complement = target - num;
    if (count[complement]) {
      pairs += count[complement];
    }
    if (complement === num) {
      pairs--;
    }
  }

  return pairs / 2;
}

const arr = [1, 3, 6, 2, 2, 0, 4, 5];
const target = 5;

const pairs = countPairs(arr, target);
console.log(pairs);
