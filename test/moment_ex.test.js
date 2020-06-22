import {formatDate} from "../src/moment_ex";

test('format a date', () => {
  expect(formatDate("2020-06-09T15:09:25.997Z")).toBe("Jun 9 11:09")
});