import { helloWorld, sum } from '../src/index.js';

test('helloWorld() returns "Hello world"', () => {
  expect(helloWorld()).toBe('Hello world');
});

test('sum(2,2) = 4', () => {
  expect(sum(2, 2)).toBe(4);
});
