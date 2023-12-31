function sum(a = 0, b = 0) {
	return a + b;
}

test('adds 1+2 to equal 3', () => {
	expect(sum(1,2)).toBe(3);
});

test('adds only one parameter to equal 1', () => {
	expect(sum(1)).toBe(1);
});

test('object assignment', () => {
	const data = {one: 1};
	data['two'] = 2;
	expect(data).toEqual({one: 1, two: 2});
  });

test('adding positive numbers is not zero', () => {
	for (let a = 1; a < 10; a++) {
	  for (let b = 1; b < 10; b++) {
		expect(a + b).not.toBe(0);
	  }
	}
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
  });

  const shoppingList = [
	'diapers',
	'kleenex',
	'trash bags',
	'paper towels',
	'milk',
  ];
  
  test('the shopping list has milk on it', () => {
	expect(shoppingList).toContain('milk');
	expect(new Set(shoppingList)).toContain('milk');
  });