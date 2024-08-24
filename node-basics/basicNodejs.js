//node js
//application cli


//Node allows u to run js code outside of web browser
//Ryan Dahl
//2009 first release => v8 engine => google => google chrome
//first version => http server,  file system module, streams

//now node js is a mature and stale platform.
//node js in combination with other techs like databases, front
//end framwworks, cloud platforms to build full stack apps.

//Non blocling I/O

//I/O model is based on non-blocking event-driven architecture

//how Node js achives non blocking I/O

//Event loop
//callbacks
//Non blocking apis => fs module
//Single threaded


//blocking code example

const getUserSync = (userId) => {
    const users = {
        1:{name:'John', age:20},
        2:{name:'Peter', age:30},
    };

    return users[userId];
}

// const user = getUserSync(2);
// console.log(user);

//Non-blocking example


const getUserAsync = (userId,callback) => {
    const users = {
        1:{name:'John', age:20},
        2:{name:'Peter', age:30},
    };
    setTimeout(() => {
        callback(users[userId]);
    }, 2000)

}

getUserAsync(1, (user) => {
    console.log(user);
})


//Browser and Node js

//global object

//browser
// console.log(window)

//node js
// console.log(global)

//modules

//browser
{/* <script type='module'  src='./module.js'></script> */}
//import 

//node js

//require => common js or import => es modules
//import {module} from './module.js

//DOM
//document.getElementById

//u cannot access or manipulate html elements in Node js

//Server and Website

// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.write('hello world');
//     res.end();
// });

// server.listen(8080);