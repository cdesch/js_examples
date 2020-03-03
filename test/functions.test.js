import {sum, multiply, generatorFunction} from '../functions';

test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test('generatorFunction', () => {
//   let generator = generatorFunction();
//   expect(generator.next()).toBe({ value: 1, done: false});
//   expect(generator.next()).toBe({ value: 2, done: false});
// });
