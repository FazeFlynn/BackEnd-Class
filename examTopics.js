//====================http example=============================

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    message: "hello",
    age: 24,
    class: "MCA",
    uni: "jecrc"
 }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


// =================Express.js Example============================

let express = require("express");
let app = express();

const exampleMiddleware = (req, res, next) => {
    console.log("This an example Middleware");
    next(); // Pass control to the next middleware/handler
};

app.use(exampleMiddleware)

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); 
    res.setHeader('Cache-Control', 'no-cache'); 
    res.setHeader('Connection', 'keep-alive');      
    res.setHeader('X-Custom-Header', 'CustomValue');
    res.end("hello world 1");
});

app.get("/api",exampleMiddleware ,(req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache",           
        "Connection": "keep-alive",           
        "X-Custom-Header": "CustomValue" 
        // Custom header for additional metadata
     });
    res.send('hello world 2');
  });

app.listen(8000, () => {
  console.log("listening at 8000");
});


// =====================fs Module================================

import fs from 'fs'

// console.log(fs.readFile(./mytext.txt));
const data = fs.readFileSync("mytext.txt")

const myfiledelay = setTimeout(() => {
  const data = fs.readFileSync("mytext.txt")
  // console.log("delayed message after 1 second");
}, 1000);

console.log(data.toString())
// syncronus programming and blocking code approach

fs.readFile('mytext.txt', (err,data) => {
  if(err) return console.log(err);
  console.log(data.toString());
});

console.log("before");

let i =1
while (i<=5) {
  console.log(i)
  i++;
}

const mydelay = setTimeout(() => {
  console.log("delayed message after 1 second");
}, 1000);

console.log("after");

fs.open('mytext2.txt', 'w', (err, data) => {
  if(err){
    console.log(err)
  }
  console.log('File Created')

})

fs.appendFile('mytext3.txt', ' new content', (err,data) => {
  if(err) return err
  console.log('file appended')
})

fs.unlink('mytext3.txt', (err,data) => {
  if(err) return err
  console.log('file deleted')
})


//====================Fetching Data==============================

console.log("before");
let mydata = '';

async function fetchData() {
  console.log("before inside")
  const res = await fetch("https://islamkhan.in/docs/mytxt1.txt");
  mydata = await res.text();
  console.log("mydata : " + mydata);
  console.log("after inside")
}
fetchData();
console.log("after");


//=================Event Loops and Emitters=======================

var events = require('events');
const { listenerCount } = require('events'); 

let eventEmitter = new events.EventEmitter();

// Adding a listener for 'myevent1'
eventEmitter.on('myevent1', () => {
    console.log('event triggered');
});

// You need to call 'addListener' with the event and a callback function
eventEmitter.addListener('myevent1', () => {
    console.log('Another event listener added');
});

// Emitting the 'myevent1' event to trigger the listeners
eventEmitter.emit('myevent1');

// Getting the listener count for 'myevent1'
// Log the number of listeners for 'myevent1'
console.log(listenerCount(eventEmitter, 'myevent1')); 


//=====================Formidable Module==============================

var http = require('http');
var formidable = require('formidable');

var errors = formidable.formidableErrors;
console.log(errors)

const server = http.createServer(async (req, res) => {
   if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
      // parse a file upload
      const form = new formidable.IncomingForm();
      let fields;
      let files;
      try {
         [fields, files] = await form.parse(req);
      } catch (err) {

         res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
         res.end(String(err));
         return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ fields, files }, null, 2));
      return;
   }

   // show a file upload form
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end(`
      <h2>With Node.js <code>"http"</code> module</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
      </form>
   `);
});
server.listen(5000, () => {
   console.log('Server listening on http://localhost:5000');
});


//============================SQl2 Module==============================

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: '8000802709', 
  database: 'test3' 
  //hupd
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err);
      return;
    }
    console.log('Connected to MySQL Database - ' + connection.config.database);
});
