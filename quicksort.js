function quicksort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)];
}

console.log(quicksort([10, 5, 2, 3]));
