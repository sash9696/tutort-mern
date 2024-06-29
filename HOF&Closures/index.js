//closures
//v imp topic

// function multiplyBy5(num){
//     const result = num*5;
//     return result;
// }

// const output = multiplyBy5(10);
// const output2 = multiplyBy5(20);

//nested function scope
// function outer(){

//     let count = 0;

//     function incrementCount(){
//         count++
//     }
//     incrementCount();
// }
// outer();

// function outer() {
//   let count = 0;
//   let a ;
//   function x(){};
//   function incrementCount() {
//     count++;
//     console.log(count)
//     x();
   
//   }
//   return incrementCount;
// }
// const newFunction = outer();
// newFunction();
// newFunction();

function once(func){

    let executed = false;
    let result;
    return function(...args){
        if(!executed){
            executed = true;
            result = func(...args);
        }
        // return result;

    }
}
function greet(name){
    console.log(`Hello ${name}`);
    return `Greeting ${name} executed`;
};

const greetOnce = once(greet);

console.log(greetOnce('John'));
console.log(greetOnce('John'));
console.log(greetOnce('John'));
console.log(greetOnce('John'));
console.log(greetOnce('John'));