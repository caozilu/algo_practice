function selectionSort(array) {
  let sortedArray = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    const smallestElement = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestElement, 1)[0]);
  }
  return sortedArray;
}

function findSmallestIndex(array) {
  let smallestElement = array[0];
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const sourceArray = [5, 3, 6, 2, 10];
console.log("source array:", sourceArray);

const sortedArray = selectionSort(sourceArray);
console.log("sorted array:", sortedArray);
