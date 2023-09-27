const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
obj1.a = 3;
obj2.a;

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2[0] = 5;
arr1[0];
