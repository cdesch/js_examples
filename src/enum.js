
//const myList = [{id: 1, name:"This"}, {id:2, name: "that"}];
export function addAttributeToObjectsInArray(myList){
  return myList.map(x => { return {...x, frame_id: x.id}});
}
// const map1 = myList.map(x => { return {...x, frame_id: x.id}});

// console.log(map1);