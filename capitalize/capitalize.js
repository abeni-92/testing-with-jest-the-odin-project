function capitalize(str) {
	// let firstPart = str.slice(0,1).toUpperCase();
	// let secondPart = str.slice(1).toLowerCase();
	// return firstPart + secondPart;

	return [str.slice(0,1).toUpperCase(), str.slice(1).toLowerCase()].join('');
}

module.exports =  capitalize;