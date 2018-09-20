const nums = [1, 2, 3];
const abc = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const newList = [];
  let i = 0;
  while (i < list1.length) {
    newList.push(list1[i], list2[i]);
    i++;
  }
  return newList;
}

console.log(zipList(nums, abc));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(nums, abc));
