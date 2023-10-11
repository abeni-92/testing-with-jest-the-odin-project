import { sum, subtract, multiply, divide } from "./calculator";

describe('Calculator Module', () => { 
	test('add', () => {
		expect(sum(1, 2)).toBe(3);
	});
	test('subtract', () => {
		expect(subtract(1, 2)).toBe(-1);
	});
	test('multiply', () => {
		expect(multiply(1, 2)).toBe(2);
	});
	test('divide', () => {
		expect(divide(1, 2)).toBe(0.5);
	});
});