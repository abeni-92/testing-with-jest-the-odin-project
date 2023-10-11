function analyzeArray(arr) {

	const minimum = Math.min(...arr);
	const maximum = Math.max(...arr);
	const len = arr.length;
	const average = (arr.reduce((prev, current) => prev + current, 0))/len;

	return {
		average: average,
		min: minimum,
		max: maximum,
		length: len
	}
}

module.exports = analyzeArray;