

function display(posts){
    console.log(posts)
};

function response(data){
    
    return data.json();
}


const promiseObj = fetch('https://jsonplaceholder.typicode.com/posts');

console.log('promiseObj',promiseObj);

const promise1 = promiseObj.then(response);

const promise2 = promise1.then(display);


// console.log('promise1',promise1);

// console.log('promise2',promise2);


// promiseObj
//     .then(response)
//     .then(display)

// console.log('hello world');

//OnRejected : []
