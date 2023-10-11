import ceasarCipher from "./ceasarCipher";

describe('ceasarCipher Module', () => {
	test('case 1', () => {
		expect(ceasarCipher('abc')).toBe('def');
	});
	test('case 2', () => {
		expect(ceasarCipher('lemma')).toBe('ohppd');
	});
	test('wrapping from z to a', () => {
		expect(ceasarCipher('xyz')).toBe('abc');
	});
	test('punctuation', () => {
		expect(ceasarCipher('mamo!')).toBe('pdpr!');
	});
	test('different case letter (lower and upper case)', () => {
		expect(ceasarCipher('Abe')).toBe('deh');
	});
});