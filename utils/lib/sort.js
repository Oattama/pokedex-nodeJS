module.exports = {
  bubbleSort: (arr) => {
    let temp = "";

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j].level > arr[j + 1].level) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  },
};
