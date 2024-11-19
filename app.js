const http = require("node:http");
// const { setTimeout } = require("node:timers/promises");
const fs = require("fs");


let mydata;

fs.readFile("index.html", (err, data) => {
  if (err) return err;
  // console.log(data.toString())
  mydata = data.toString();
});

// const listener = function (req, res) {
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });
//     // res.end("{message: hellllo}");
//     // res.end("{message: hello,age: dfdsf}");

//     // res.end(JSON.stringify({
//     //     message: "hello",
//     //     age: 24,
//     //     class: "MCA",
//     //     uni: "jecrc"
//     //  }));

//     res.end(mydata)
// };

// const server = http.createServer(listener);
// server.listen(3000, () => {
//   console.log("server is running at port 3000");
// });

// import fs from 'fs'

// console.log(fs.readFile(./mytext.txt));

// const data = fs.readFileSync("mytext.txt")

// const myfiledelay = setTimeout(() => {
//   const data = fs.readFileSync("mytext.txt")
//   // console.log("delayed message after 1 second");
// }, 1000);

// console.log(data.toString())

// syncronus programming and blocking code approach

// fs.readFile('mytext.txt', (err,data) => {
//   if(err) return console.log(err);
//   console.log(data.toString());

// });
// // fs.readf

// console.log("before");

// let i =1
// while (i<=5) {
//   console.log(i)
//   i++;
// }

// const mydelay = setTimeout(cb,1000);

// const mydelay = setTimeout(() => {
//   console.log("delayed message after 1 second");
// }, 1000);

// console.log("after");

// fs.open('mytext2.txt', 'w', (err, data) => {
//   if(err){
//     console.log(err)
//   }
//   console.log('File Created')

// })

// fs.appendFile('mytext3.txt', ' new content', (err,data) => {
//   if(err) return err
//   console.log('file appended')
// })

// fs.unlink('mytext3.txt', (err,data) => {
//   if(err) return err
//   console.log('file deleted')
// })

console.log("before");

let data='';

async function fetchData() {

  console.log("before inside")
  const res = await fetch("https://islamkhan.in/docs/mytxt1.txt");
  // const res = await fetch("https://islamkhan.in/style.css");
  data = await res.text();
  console.log("mydata : " + data);
  console.log("after inside")
}

fetchData();

console.log("after");

// console.log("My Node Application");

// const createServer = require("createServer");
// const { listeners } = require("node:http");

// http = require("node:http");
// const listener = function(req,res){
//     res.writeHead(200,{
//         'ContentType':"text/html"
//     });
//     res.send("hello world")

// }

// const server = createServer(listener)
// server.listen(3000);
// console.log("server is running at port 3000");
