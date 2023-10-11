import capitalize from './capitalize';
// const capitalize = require('./capitalize');

describe('Capitalize Module', () => {
	test('all small letter', () => {
		expect(capitalize('abebe')).toBe('Abebe');
	});
	test('all capital letter', () => {
		expect(capitalize('ABEBE')).toBe('Abebe');
	});
	test('mixed small and capital letter', () => {
		expect(capitalize('AbEbE')).toBe('Abebe');
	})

});
