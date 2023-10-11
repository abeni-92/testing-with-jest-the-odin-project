import reverseString from './reverseString';

describe('Reverse String Module', () => {
	test('case 1', () => {
		expect(reverseString('abebe')).toBe('ebeba');
	});
	test('case 2', () => {
		expect(reverseString('lemma')).toBe('ammel');
	});
	test('case 3', () => {
		expect(reverseString('jklm uiop')).toBe('poiu mlkj');
	})
});