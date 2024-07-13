//array methods

//methods

//pop/ push , shift and unshift

// let nums = [10,20,30,40];

// // nums.push(50);

// // nums.push(60);

// // const poppedEle = nums.pop();

// const removedEle = nums.shift();

// nums.unshift(100);

// let nums = [10,20,30,40];

//loops

// for(let i = 0; i < nums.length; i ++){
//     console.log(nums[i]);
// }

// for( let num of nums){
//     console.log(num)
// }

// for( let index in nums){
//     console.log(index)
// }

//splice => swiss knife or multi tool i.e insert, remove, replace

// delete nums[1]; // never do that

//arr.splice(startIndex, deleteCount, arg1, arg2, ... argn)

// let nums = [10,20,30,40];

// nums.splice(1,1);

// nums.splice(0,3, 100, 200);

// const deleElements = nums.splice(0,2);

// nums.splice(2,0,100,200);

// nums.splice(-1,0,100,200);

//slice => arr.slice(startIndex, endIndex) but not including end Index

// let nums = [10,20,30,40];

// // let slicedNums = nums.slice(1,3);

// // let slicedNums = nums.slice(1);

// // let slicedNums = nums.slice(-2);

// //shallow copy
// let copiedNums = nums.slice();

// copiedNums.push(50)

// let users = [
//     {id:1, name:'john', age:20, country:'India'},
//     {id:2, name:'peter', age:30, country:'India'},
// ];

// users.forEach(function(item, index, array){

//     console.log(`{${JSON.stringify(item)}} is at index ${index} in ${JSON.stringify(array)}`)

// })

// let newNums = [];
// [10, 20, 30].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
//   newNums.push(item);
// });


//Search in an array

//arr.indexOf(item, fromIndex) => returns the index otherwise -1
//arr.includes(item, fromIndex) => returns true if found

// let arr = [10,0,10,false];


// // console.log(arr.indexOf(10))
// // // console.log(arr.indexOf(false))
// // // console.log(arr.indexOf(null))

// // console.log(arr.includes(10))

// console.log(arr.lastIndexOf(10));


//find , findIndex, findLastIndex

// let users = [
//     {id:1, name:'john', age:20, country:'India'},
//     {id:2, name:'peter', age:30, country:'India'},
//     {id:3, name:'a', age:30, country:'India'},
//     {id:4, name:'b', age:40, country:'India'},
// ];

// let user =users.find((item, index, array) => {

//     return item.id == 1;
// })

// let user = users.find((item, index, array) =>  item.id == 1)
// let user = users.findIndex((item, index, array) =>  item.id == 1)

// let user = users.findLastIndex((item, index, array) =>  item.id == 1)


//map filter and reduce
let users = [
    {id:1, name:'john', age:20, country:'India'},
    {id:2, name:'peter', age:30, country:'India'},
    {id:3, name:'a', age:30, country:'India'},
    {id:4, name:'b', age:40, country:'India'},
];
// let filteredUsers = users.filter((item) =>  item.id < 3)


//map => transform an array

// let nums = [10,20,30,40];

// let multipliedBy2 = nums.map(item => item * 2);

// let usersNames = users.map(function(user){

//     return user.name
// })


// let usersNames = users.map(user =>  user.name);

// let transformedUsers = users.map(user => ( {username:user.name, userage:user.age}));


// let transformedUsers = users.map(function(user){

//     if(user.id == 2) return user.id;
//     return user.name
// });


// let arr = [1, 10, 100, 3, 4];
//it sis sorting based on strings
//'1' to '10'

// arr.sort();

//compare function

// function compare(a,b){
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b) return -1;
// }

// function compare(num1, num2){
//     console.log({num1, num2})
//     return num1 - num2
// }
// function compare(num1, num2){
//     console.log({num1, num2})
//     return num2 - num1
// }
// arr.sort(compare);

//split and join

//list of recievers => john , peter, raj

// let recievers = 'john , peter, raj';

// let arr = recievers.split(', ');

// for(let recipient of arr){
//     console.log(`A message to ${recipient}`);
// }


// let names = ['john' , 'peter', 'raj'];

// let str = names.join(';');

// console.log(typeof {})
// console.log(typeof [])

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));


//reduce 


//Object methods

// let user = {
//     name:'john',
//     age:20
// };

// let values = Object.values(user);

// let keys = Object.keys(user);

// let itemPrices = {
//     pen: 10,
//     pencil: 20,
//     scale: 5
// };

// //double the prices


// let doubleItemPrices = Object.fromEntries(Object.entries(itemPrices).map(function(item){

//     return [item[0], item[1] * 2]
// }))


//reduce
//map (allows keys of any type) and set(each value occurs only once) data structures