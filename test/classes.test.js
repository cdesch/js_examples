import { Rectangle } from "../src/classes";

test('create rectangle object and get area', () => {
  const rect = new Rectangle(10, 10);
  expect(rect.calcArea()).toBe(100);
});
