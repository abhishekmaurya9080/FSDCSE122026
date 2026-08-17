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
//     if(username == "shivam" && password == "12345"){
//         callback("Login successful!", null);
//     }
//     else{
//         callback(null, "Invalid username or password.");
//     }
// }

// // loginhandler("shivam", "12345", login);
// loginhandler("shivam", "wrongpassword", login);

// console.log("one")
// setTimeout(() => {
//     console.log("two")
// }, 10);
// // console.log("two")
// console.log("three")

// setTimeout(() => {
//     console.log("one");
//     setTimeout(() => {
//         console.log("two");
//         setTimeout(() => {
//             console.log("three");
//             setTimeout(() => {
//                 console.log("four");
//                 setTimeout(() => {
//                     console.log("five");
//                     setTimeout(() => {
//                         console.log("six");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const mypromise = new Promise((resolve, reject) => {
//     const username = "shivam";
//     const password = "12345";
//     if (username === "shivam" && password === "12345") {
//         resolve("Login successful!");
//     }
//     else {
//         reject("Invalid username or password.");
//     }
// })

// mypromise.then((msg) => {
//     console.log("Success: " + msg);
// }).catch((error) => {
//     console.log("Error: " + error);
// }).finally(() => {
//     console.log("All done");
// });


// const mypromise = new Promise((resolve, reject) => {
//     const number = 4; 
//     if (number % 2 === 0) {
//         resolve("even");
//     }
//     else {
//         reject("odd");
//     }
// })

// mypromise.then((msg) => {
//     console.log("Success: " + msg);
// }).catch((error) => {
//     console.log("Error: " + error);
// }).finally(() => {
//     console.log("All done");
// });

// async function handledata(){
//     try{
//         console.log("Before promise");
//         const q = await mypromise;
//         console.log(q);
//     }
//     catch(err){
//         console.log("Error: " + err);
//     }
//     finally{
//         console.log("All done");
//     }
// }
// handledata();


// const mypromise = new Promise((resolve, reject) => {
//     const username = "shivam";
//     const password = "12345";   
//     if (username === "shivam" && password === "12345") {
//         resolve("Success");
        
//     }   
//     else {
//         reject("Invalid username or password.");
//     }
// })

// async function handledata(){
//     try{
//         console.log("Before promise");
//         const q = await mypromise;
//         console.log(q);
//     }
//     catch(err){
//         console.log("Error: " + err);
//     }finally{
//         console.log("All done");
//     }
// }
// handledata();
// const orderreceive = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Order received");
//     }, 1000);
// });

// async function handledata2(){
//     try{
//         const msg = await mypromise;
//         if(msg == "Success"){
//             const orderstatus = await orderreceive;
//             setTimeout(() => {
//                 console.log("Order received");
                
//             }, 1000);
//         }
//         console.log(msg);
//     }
//     catch(err){
//         console.log("Error: " + err);
//     }
//     finally{
//         console.log("All done");
//     }
// }
// handledata2();

// function orderreceive(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("oder recieved");
//         },1000)
//     })
// }
// function oderprepare(){
//     return new Promise((prepare)=>{
//         setTimeout(()=>{
//             prepare("order prepare");
//         },1000)
//     })
// }
// function oderdispatch(){
//     return new Promise((dispatch)=>{
//         setTimeout(()=>{
//             dispatch("order dispatch");
//         },1000)
//     })
// }
// function oderdelivered(){
//     return new Promise((delivered)=>{
//         setTimeout(()=>{
//             delivered("order delivered");
//         },1000)
//     })
// }

//  async function orderhandler(){
//     try{
//         const status= await orderreceive();
//         console.log(status)
//         const status1=await oderprepare();
//         console.log(status1)
//         const status2=await oderdispatch();
//         console.log(status2)
//         const status3= await oderdelivered();
//         console.log(status3)
//     }catch(e){
//         console.log(e)
//     }
// }
// // orderreceive().then((msg)=>{
// //     console.log(msg)
// // }).catch(()=>{
// //     console.log(e)
// // }).finally(()=>{
// // console.log("All done")
// // })

// orderhandler();
const container=document.getElementById('container')
const button=document.getElementById('btn')
const loading=document.createElement('div')
container.appendChild(loading)
console.log(button)
 async function fetchdata(){
    try{
        loading.innerHTML='<h2>Loading Data...</h2>'
        const serverData= await fetch('https://fakestoreapi.com/products')
        const jsonData=await serverData.json()
        // console.log(serverData)
        // container.innerHTML=`${JSON.stringify(jsonData)}`  //data get in string form
        // container.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`; //get data in jason form
        // console.log(jsonData)
          let table=`<table>
          <tr><td>ITEM_ID</td><tr>TITLE</td><tr>PRICE</td></tr>
          ${
            jsonData.map((ele)=>(
                
                `<tr>
                <td>${(}ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                </tr>`
            ))
          } 
          </table>`
    }catch(e){
        loading.innerHTML='<h2>Loading Error</h2>'
        
    }
    finally{
       loading.innerHTML='' 
        
    }

}
button.addEventListener('click',fetchdata)
// fetchdata()