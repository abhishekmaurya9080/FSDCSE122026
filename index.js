// console.log("Hello, World!");
// console.log("This is a sample JavaScript file.");

// let a = 34;
// if (a>10) {
//     let  a = 40;
//     console.log("a is inside the block: " + a);
// }
// console.log("a is outside the block: " + a);

// function sum(a, b) {
//     return a + b;
// }
// console.log("The sum is: " + sum(230,30));


// const sum = (a, b) => { return a + b };
// console.log("The sum is: " + sum(12,30));

// const data = function(msg){
//     return "hello , i m using js"+ msg;
// }
// console.log(data("and node"));


// (() => {
    // console.log("This is an IIFE (Immediately Invoked Function Expression)");
// })();


// function sum(a, b) {
//     return a + b;
// }

// function sumwithmsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("hey, your result is: " + result + " and your message is: " + msg);
// }

// sumwithmsg(sum, "Hello, this is a test message!");

// function login(msg,error){
//     if(error){
//         console.log("Error: " + error);
//     }
//     else{
//         console.log("Success: " + msg);
//     }
// }

// function loginhandler(username, password, callback){
//     if(username == "abhishek" && password == "12345"){
//         callback("Login successful!", null);
//     }
//     else{
//         callback(null, "Invalid username or password.");
//     }
// }

// // loginhandler("shivam", "12345", login);
// loginhandler("abhishek", "wrongpassword", login);

// console.log("One")
// setTimeout(() => {
// console.log("Two")
// },1000)
// console.log("Three")

//   setTimeout(() => {
//     console.log("One");
//     setTimeout(() => {
//         console.log("Two");
//         setTimeout(() => {
//             console.log("Three");
//             setTimeout(() => {
//                 console.log("Four");
//                 setTimeout(() => {
//                     console.log("Five");
//                     setTimeout(() => {
//                         console.log("Six");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const myPromise = new Promise((resolve, reject) => {
//     const username = "abhishek";
//     const password = "123456";
//     if (username === "abhishek" && password === "123456") {
//         resolve("Login successful!");
//     } else {
//         reject("Invalid username or password.");
//     }
// })

// myPromise.then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log("All done!");
//     })


// const myPromise = new Promise((resolve, reject) => {
//     const number = "123456";
//     if (number % 2 === 0) {
//         resolve("Is Even number");
//     } else {
//         reject("Is Odd number.");
//     }
// })

// myPromise.then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log("All done!");
//     })
    
//   async function handleData() {
//     try {
//         console.log("Before promise");

//         const q = await mypromise;

//         console.log(q);
//     }
//     catch (err) {
//         console.log("Error: " + err);
//     }
//     finally {
//         console.log("All done");
//     }
// }

// handleData();



const otp = 7670;
const enteredOtp = 7670; 

const orderPromise = new Promise((resolve, reject) => {
    console.log("Order Received");

    setTimeout(() => {
        if (enteredOtp === otp) {
            resolve("Order Accepted");
        } else {
            reject("Invalid OTP. Order Declined");
        }
    }, 2000);
});

orderPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));