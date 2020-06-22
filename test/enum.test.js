import { addAttributeToObjectsInArray } from "../src/enum";

test('transform array', () => {
  const myList = [{id: 1, name:"This"}, {id:2, name: "that"}];
  const result = [{id: 1, name:"This", frame_id: 1}, {id:2, name: "that", frame_id: 2}];
  expect(addAttributeToObjectsInArray(myList)).toEqual(result);
});
