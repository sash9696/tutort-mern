//es 2015 or es5
// 'use strict'

// //classes and modules
// //use strict enabled automatically

// a = 'john'

// console.log(a)


//Higher Order Functions

//y => callbacks are functions that are passed inside another functions
//x(y) =>functions that takes other functions as arguments

//imp topic => map filter reduce => array methods => higher order functions

//copy array and multiply by it by soem num


// function copyArrayAndMultiplyBy2(array){

//     const output = [];

//     for(let i = 0; i < array.length;i++){
//         output.push(array[i] * 2);
//     }

//     return output
// }

// const result = copyArrayAndMultiplyBy2([10,20,30]);


// //divide by 2
// function copyArrayAndDivideBy2(array){

//     const output = [];

//     for(let i = 0; i < array.length;i++){
//         output.push(array[i] / 2);
//     }

//     return output
// }

// const output = copyArrayAndDivideBy2([10,20,30]);

// //add by 10

// function copyArrayAndAddBy10(array){

//     const output = [];

//     for(let i = 0; i < array.length;i++){
//         output.push(array[i] + 10);
//     }

//     return output
// }

// const output1 = copyArrayAndAddBy10([10,20,30]);
//dry


//copy array is a common process
//different operations 


function copyArrayAndManipulate(array, operation){
    const output = [];

    for(let i = 0; i < array.length;i++){
        output.push(operation(array[i]));
    }

    return output;
}

// function multiplyby2(value){return value * 2};

//arrow function
// const multiplyby2 = value => value * 2;

const result = copyArrayAndManipulate([10,20,30],value => value * 2)


//assignment => execution flow of this program
