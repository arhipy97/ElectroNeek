let array = [1, 5, 20, -3, 8, 30, 22];

function sortArray(arr) {
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));
};

sortArray(array);

