
const sort = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
};

function generateSorted() {
    let numberArray = document.getElementById('numberArray').value.split(",");
    let sortedArray = sort(numberArray)

    document.getElementById('result').innerText = `Sorted Array is ${sortedArray.join(", ")}`
}