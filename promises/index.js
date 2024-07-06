
// function asyncPromise(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             //operation
//             resolve(10)
//         }, 1000)
//     })
// }

// asyncPromise.then(display)


function display(data){console.log(data)};
function greetings(){console.log("hello")};
function runFor300ms(){  } //blocks for 300ms

setTimeout(greetings, 0);

const promiseObj = fetch(
    'https://jsonplaceholder.typcode.com/posts'
    );

promiseObj.then(display);
runFor300ms();
console.log(100);