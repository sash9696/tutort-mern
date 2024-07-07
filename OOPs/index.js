//class and oops, prototypes (behind the seen features)

//encapsulation, abstraction, inheritance, polymorphism

//application
//users 

//Saving data for ex => storing scores of the users
//execute the code (functions) using that data => for ex incrementing the score

//data => associated functionality

//if there is a lot of code
//how to ensure the functionality and how do u ensure the functionality is called on the correct data


//Objects

//store functions with there associated data
//encapsulation

// const user1 = {
//     name:'John',
//     score:5,
//     increment: function(){user1.score ++}
// }
// user1.increment();

// const user2 = {};

// user2.name = 'Peter';
// user2.score = 4;
// user2.increment = function(){user2.score ++};


// const user3 = Object.create(null);

// user3.name = 'Peter';
// user3.score = 4;
// user3.increment = function(){user2.score ++};

//Solution 1 Factory functions
// function createUser(name, score){
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function(){newUser.score ++};

//     return newUser;
// };

// const user1 = createUser('John',5)
// const user2 = createUser('Peter',3)
// user1.increment();

//this can never be used 
//problem => dry 
//whenever a new user is created the space in the memory
//has to be there for all the data and functions


//Solution 2 using the prototype chain


//Object.create 

// function createUser(name, score){
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };

// const userFunctionStore = {
//     increment: function(){this.score++},
//     login: function(){console.log("User logged in")}
// };
// const user1 = createUser('John',5)
// const user2 = createUser('Peter',3)
// user1.increment();
// user2.increment();

//storing the increment fucntion now in just one object
//it it doesnt find the function on user1 then it will look ip to that object if it is there
//linking th user and functionStore


//not a sstandard approach
// a lot of processes manually


// const emp1={
//     name:'a'
// }

// const emp2={
//     name:'B'
// }

// const empFunctions = {
//     attendance:function(){},
//     x:function(){}
// }


// emp1.__proto__ = emp2

// emp1.__proto__.__proto__ = empFunctions

//Solution 3

//new keyword => automates a lot of stuff

//when we call a function with a new keyword
//creates a new object
//returns a new object

//how doe we
//refer to the automatic created object
//how do we put our single copy of functionalities

//Solution 3 => faster to write, used in professional code
// function createUser(name, score){

//     this.name = name;
//     this.score = score;

// };

// //inbuilt property called prototype

// createUser.prototype.increment = function(){this.score++};
// createUser.prototype.login = function(){console.log('log in')};


// const user1 = new createUser('John', 5);

// user1.increment();

//es5 => 2015 we can use clases => syntactic sugar


// class CreateUser{
//     constructor(name, score){
//     //instance properties
//     this.name = name;
//     this.score = score;

//     }
//     //instance methods
//     increment(){this.score++}
//     login(){console.log('login successfull')}
// }

// const user1 = new CreateUser('John',10);

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");


//disadvantages

//complexity and challenging to understand
//implicit in natures that are not immediately obvious
//shared properties => any property is mutated unintentionally, it will show unexpected behaviour everywhere it is used
//debugging, tracong an error