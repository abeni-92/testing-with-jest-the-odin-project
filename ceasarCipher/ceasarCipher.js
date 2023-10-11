function ceasarCipher(str) {
	let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
	let arr = [...str.toLowerCase()];
	
	arr.map((char, index) => {
		if(!alphabet.includes(char)) return char;
		let i = alphabet.indexOf(char);
		arr[index] = alphabet[(i+3)%26];
	});
	return arr.join("");
}

module.exports = ceasarCipher;