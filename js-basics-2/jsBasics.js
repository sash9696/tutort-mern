//arrays


// let arr = [];

// arr[999]  = 'abcde'


// let arr = Array();

// let arr = ['a', 100, true, function x(){}];

//functions


//function declaration
// function sum(num1,num2){

//     let result  = num1 + num2;

//     // console.log(result);

//     return {result, name:'john'};

// };

// console.log(sum(10,20));
// console.log(sum(100,200));


//first class citizens or first class objects


//functions can be stored as a variable
//fucntion named expressions
// let sumFunc  = function sum(a,b){

//     return a + b;
// }


// console.log(sumFunc(10,20));

//function unnamed expressions

// let sumFunc  = function (a,b){

//     return a + b;
// }


// console.log(sumFunc(10,20));

//anonymous function
// function (a,b){

//     return a + b;
// }

// function y(){
//     console.log('y');

// }


// function x(){

//     console.log('x');

//    return y
   
// }

// let z =  x();
// z();

// x()();


// function order(callback){

//     console.log('order processed');
//     callback();


// }

// function checkout(){
//     console.log('proceed to checkout');

// }


// order(checkout);


//primitive or scalars like string, boolean , numbers and numbers
//passed by value


// let num = 100;

// let num1 = num;


//passed by reference
//variable points to the address in memory and that is called reference

//primitive like objs, arrays, functions


// let user = {
//     name:'john',

// }


//user => address in memory of that obj

//user.name => go to taht address and perform operation

// let admin = user;

// admin.name = 'peter';


////user and admin => to same address in memory of that obj


// let a = {};

// b = a;


// let a = {};

// let b = {};


// const user ={
//     name:'john',
//     age:20
// };


// user.name = "peter";

// user = {};


//cloning techniques

//most of the techniques does shallow copies

//deep clone => clones with all nested properties
//structuredClone()





