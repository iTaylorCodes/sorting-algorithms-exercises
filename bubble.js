function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let madeSwap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        madeSwap = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (madeSwap === false) return arr;
  }
  return arr;
}

module.exports = bubbleSort;
