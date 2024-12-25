# End Sem


## 1. Introduction to Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It is used to create scalable, high-performance web applications, APIs, and more.


### **Key Features**  
1. **Event-Driven Architecture**:  
   Node.js uses a non-blocking, event-driven model, which makes it efficient and suitable for I/O-heavy applications.  
   Example: Handling multiple requests simultaneously.

2. **Asynchronous and Non-Blocking I/O**:  
   Operations like file reading or database queries do not block the execution of other code.  

3. **Cross-Platform**:  
   Node.js can run on major platforms like Windows, Linux, and macOS.

4. **Single-Threaded with Event Loop**:  
   A single thread handles multiple client requests using an event loop.

5. **Rich Ecosystem (npm)**:  
   The Node Package Manager (npm) provides access to a vast number of libraries.


### **Advantages**
- **High Performance**: Uses the V8 engine for fast execution.
- **Scalable**: Handles many connections with a small memory footprint.
- **Lightweight**: Uses fewer resources compared to traditional server environments.
- **Real-Time Applications**: Ideal for real-time apps like chat, gaming, or live feeds.


### **Types of Applications Built with Node.js**
1. **Web Applications**: Example: APIs for front-end apps.
2. **Real-Time Applications**: Example: Chat applications.
3. **RESTful APIs**: Example: CRUD applications.
4. **Streaming Applications**: Example: Media streaming apps.
5. **Command-Line Applications**: Example: CLI tools.

---

### **Simple Example**  
**Hello World Server**  
```javascript
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```



### **Common Modules in Node.js**
1. **http**: For creating servers.
2. **fs**: For file system operations.
3. **path**: For handling file paths.
4. **os**: For system information.
5. **events**: For creating and managing events.

**Example: Using `fs` Module**  
```javascript
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

---

## Introduction to Express.js

Express.js is a lightweight, unopinionated web application framework for Node.js. It simplifies building web servers and APIs by providing robust features like routing, middleware, and template engines.


### **Basic Concepts**

#### 1. **Installation**  
Run the following command to install Express.js:  
```bash
npm install express
```

#### 2. **Creating a Simple Server**  
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

### **Core Features**

#### 1. **Routing**  
Routing determines how an application responds to different HTTP requests.  

**Example**:  
```javascript
app.get('/about', (req, res) => res.send('About Page'));
app.post('/submit', (req, res) => res.send('Form Submitted'));
app.put('/update', (req, res) => res.send('Resource Updated'));
app.delete('/delete', (req, res) => res.send('Resource Deleted'));
```

---

#### 2. **Middleware**  
Middleware functions are executed sequentially in the request-response cycle.  

**Types**:  
- **Built-in**: `express.json()`, `express.urlencoded()`
- **Third-party**: Example: `morgan`, `cors`
- **Custom**: Created by the developer

**Example**:  
```javascript
const logger = (req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
};
app.use(logger);
```

---

#### 3. **Static Files**  
Serve static files like images, CSS, or JavaScript using `express.static`.  

**Example**:  
```javascript
app.use(express.static('public'));
```

---

#### 4. **Parsing Data**  
Handle incoming data using built-in middleware:  
- `express.json()` for JSON data.
- `express.urlencoded({ extended: true })` for form data.

**Example**:  
```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

### **Intermediate Concepts**

#### 1. **Route Parameters**  
Use parameters in URLs to handle dynamic data.  

**Example**:  
```javascript
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
```

#### 2. **Query Parameters**  
Handle queries like `/search?term=books`.  

**Example**:  
```javascript
app.get('/search', (req, res) => {
    const term = req.query.term;
    res.send(`Search term: ${term}`);
});
```

---

#### 3. **Error Handling**  
Catch and handle errors using middleware.  

**Example**:  
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

---

### **Advanced Concepts**

#### 1. **Router**  
Separate routes into modules for better organization.  

**Example**:  
`routes/user.js`:  
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('User Home'));
router.get('/:id', (req, res) => res.send(`User ID: ${req.params.id}`));

module.exports = router;
```

`app.js`:  
```javascript
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);
```

---

#### 2. **Middleware Stacking**  
Apply multiple middleware functions to a single route.  

**Example**:  
```javascript
const middleware1 = (req, res, next) => { console.log('Middleware 1'); next(); };
const middleware2 = (req, res, next) => { console.log('Middleware 2'); next(); };

app.get('/stack', [middleware1, middleware2], (req, res) => res.send('Stacked Middleware'));
```

---

#### 3. **Template Engines**  
Render dynamic HTML using template engines like EJS, Pug, or Handlebars.  

**Example (EJS)**:  
```bash
npm install ejs
```
```javascript
app.set('view engine', 'ejs');
app.get('/welcome', (req, res) => {
    res.render('index', { name: 'John' });
});
```

`views/index.ejs`:  
```html
<h1>Welcome, <%= name %>!</h1>
```

---

#### 4. **Authentication**  
Use libraries like `passport` or `jsonwebtoken` for user authentication.  

**Example (JWT)**:  
```javascript
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
    const user = { id: 1, username: 'john' }; // Example user
    const token = jwt.sign(user, 'secretKey');
    res.json({ token });
});
```


#### 5. **Connecting to Databases**  
Express can interact with databases like MongoDB, MySQL, or PostgreSQL.  

**Example (MongoDB)**:  
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

app.post('/add-user', (req, res) => {
    const newUser = new User({ name: req.body.name });
    newUser.save()
        .then(() => res.send('User added'))
        .catch(err => res.status(400).send(err));
});
```

---

## Socket.io

Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients (browsers) and servers. It uses WebSockets as a transport protocol but falls back to other methods like long-polling when WebSockets are not available.

---

### **Key Concepts**

#### 1. **Real-Time Communication**  
Socket.IO allows sending and receiving messages in real-time, making it ideal for applications like chat apps, live notifications, or multiplayer games.

---

### **Installation**

To use Socket.IO in your Node.js application, you need to install both the server and client libraries.

**Install server-side**:  
```bash
npm install socket.io
```

**Install client-side**:  
For browsers, you can include Socket.IO via a CDN or install it via npm.

```html
<script src="/socket.io/socket.io.js"></script>
```

Or if using npm:  
```bash
npm install socket.io-client
```

---

### **Basic Example**

#### 1. **Server-Side (Node.js)**

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Set up the server
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.IO

// Listen for connection event
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for a custom event from the client
    socket.on('message', (data) => {
        console.log('Received message:', data);
    });
    
    // Emit a message to the client
    socket.emit('welcome', 'Hello, welcome to the server!');
    
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

#### 2. **Client-Side (HTML + JavaScript)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Example</title>
</head>
<body>
    <h1>Socket.IO Chat</h1>
    <button id="sendBtn">Send Message</button>
    
    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();

        // Listen for messages from the server
        socket.on('welcome', (message) => {
            alert(message);
        });

        // Emit a message when the button is clicked
        document.getElementById('sendBtn').onclick = () => {
            socket.emit('message', 'Hello, server!');
        };
    </script>
</body>
</html>
```

---

### **Socket.IO Features**

#### 1. **Bidirectional Communication**  
With Socket.IO, data can be sent both from the client to the server and from the server to the client in real-time.

**Example**:  
- Server emits: `socket.emit('event', data)`
- Client listens: `socket.on('event', callback)`

---

#### 2. **Events**  
Socket.IO uses an event-based model for communication. You can listen for specific events and send custom events.

**Server-side**:  
```javascript
socket.on('chat message', (msg) => {
    console.log(msg);
});
```

**Client-side**:  
```javascript
socket.emit('chat message', 'Hello server!');
```

---

#### 3. **Broadcasting**  
You can send messages to all clients except the sender.

**Example**:
```javascript
socket.broadcast.emit('new user', 'A new user has joined!');
```

---

#### 4. **Namespaces**  
Namespaces allow you to separate logic into different channels within a Socket.IO server.

**Server-side**:
```javascript
const nsp = io.of('/chat');
nsp.on('connection', (socket) => {
    console.log('A user connected to /chat');
    socket.emit('welcome', 'Welcome to the chat namespace!');
});
```

**Client-side**:
```javascript
const socket = io('/chat');
```

---

#### 5. **Rooms**  
Rooms are subsets of clients within a namespace. A client can join or leave a room, enabling communication between specific groups of users.

**Server-side**:
```javascript
socket.join('room1');
io.to('room1').emit('message', 'This is a message for room1');
```

**Client-side**:
```javascript
socket.on('message', (message) => {
    console.log(message);
});
```

---

#### 6. **Reconnection**  
Socket.IO handles automatic reconnection if the connection is lost.

```javascript
const socket = io({
    reconnection: true,
    reconnectionAttempts: 5,  // Number of reconnection attempts
    reconnectionDelay: 1000   // Delay between reconnections in ms
});
```

---

#### 7. **Custom Handshake**  
Socket.IO provides an option to add custom handshake data during the connection process. This can be used for authentication or providing session information.

**Server-side**:
```javascript
io.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (token === 'valid-token') {
        return next();
    }
    return next(new Error('Authentication error'));
});
```

---

### **Use Cases for Socket.IO**

- **Real-Time Chat Applications**: Real-time messaging and notifications.
- **Collaborative Tools**: Apps where multiple users interact in real-time (e.g., Google Docs).
- **Live Sports Updates**: Delivering real-time match scores.
- **Online Games**: Multiplayer games with real-time interactions.

---

### **Advanced Features**

#### 1. **Socket.IO with Express**  
Socket.IO can be integrated into an Express app to enable real-time capabilities alongside traditional HTTP routes.

**Example**:
```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Express routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Socket.IO events
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

#### 2. **Scaling Socket.IO**  
When scaling a Socket.IO app, you need to use a message broker (like Redis) to handle communication between multiple server instances.

**Example** (using Redis):
```bash
npm install socket.io-redis
```
```javascript
const socketio = require('socket.io');
const redisAdapter = require('socket.io-redis');
const io = socketio(server);

io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
```


### **Conclusion**

Socket.IO is a powerful library for real-time, bidirectional communication between clients and servers. It's easy to use and highly customizable, making it ideal for applications like live chat, gaming, or real-time collaboration tools. By leveraging its event-based model, broadcasting, and room functionalities, you can build scalable, real-time web applications with ease.


---
---

## Events and event Loops

JavaScript is often described as a non-blocking, asynchronous language. A key concept behind this is the **Event Loop**, which is responsible for handling asynchronous events in a single-threaded execution model. To understand this, we need to first explore what events are and how the event loop works.


### **1. What are Events?**

In JavaScript, an **event** is an action or occurrence that happens in the system you are programming, which the program can respond to. Events can come from various sources, such as:

- User interactions (click, hover, input, etc.)
- System events (like timers, network responses)
- Events from other JavaScript code or libraries

Events are typically handled using **event listeners**, which are functions that respond to specific events.

#### **Example of Events**:

**Button Click Event**:
```html
<button id="myButton">Click Me!</button>

<script>
    const button = document.getElementById('myButton');

    // Event listener for a button click
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
</script>
```

In this example, the `click` event is fired when the user clicks the button, and the event listener executes a function in response to that event.

---

### **2. Event Loop in JavaScript**

The **Event Loop** is a fundamental part of JavaScript's concurrency model, allowing asynchronous execution while maintaining a single-threaded environment. It continuously checks if there are any tasks in the **event queue** that are ready to be executed. 

#### **How the Event Loop Works:**

JavaScript has a **single thread** for executing code, meaning it can only execute one task at a time. However, JavaScript uses asynchronous operations, such as `setTimeout`, network requests, or I/O operations, which don't block the main thread. When such tasks are performed, JavaScript hands over the control to the browser or Node.js, which executes them asynchronously and returns the results back to JavaScript. The event loop is responsible for managing this process.

##### **Steps Involved in the Event Loop**:
1. **Call Stack**: JavaScript first executes code that’s currently on the call stack.
2. **Event Queue**: Asynchronous code (such as setTimeout, I/O tasks) is moved to the event queue once it's ready to be processed.
3. **Event Loop**: The event loop checks if the call stack is empty. If it is, it moves tasks from the event queue to the call stack for execution.
4. **Web APIs**: For asynchronous operations like `setTimeout` or network requests, these are handled by the browser or Node.js and then moved back to the event queue when completed.

---

### **3. Call Stack and Event Queue**

To better understand how the event loop works, we need to look at the **Call Stack** and **Event Queue**.

#### **Call Stack**:
- The **Call Stack** is where JavaScript keeps track of the function calls that are being executed.
- When a function is invoked, it is pushed onto the call stack. When a function finishes executing, it is popped off the stack.

#### **Event Queue**:
- The **Event Queue** (or message queue) is where asynchronous code resides when it is ready to be executed after the call stack is empty.
- It contains events that need to be handled, such as I/O operations, network requests, or timers.

---

### **4. Example of the Event Loop in Action**

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Middle');
}, 0);

console.log('End');
```

#### **What Happens**:
1. `'Start'` is printed to the console first (since it's synchronous).
2. The `setTimeout` function is called, but instead of executing immediately, it’s placed in the event queue with a delay of `0` milliseconds.
3. `'End'` is printed next (again, it's synchronous).
4. The event loop picks up the `setTimeout` callback from the event queue and executes it, printing `'Middle'`.

**Expected Output**:
```
Start
End
Middle
```

This behavior demonstrates how asynchronous operations are delayed until the call stack is empty, and the event loop picks them up from the queue.

---

### **5. Types of Asynchronous Events in JavaScript**

#### **Timers** (e.g., `setTimeout`, `setInterval`):
- `setTimeout` allows us to schedule a function to run after a specified delay.
- `setInterval` repeats the execution of a function at regular intervals.

**Example**:
```javascript
setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);
```

#### **Promises**:
- Promises represent the completion (or failure) of an asynchronous operation. They are used to handle asynchronous results in a more readable way than callbacks.

**Example**:
```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data received!'), 1000);
});

promise.then(result => console.log(result)); // Logs: 'Data received!' after 1 second
```

#### **Events**:
- Events like `click`, `keydown`, etc., are pushed to the event queue when triggered and processed by the event loop.

---

### **6. Microtasks and Macrotasks**

JavaScript categorizes asynchronous tasks into **microtasks** and **macrotasks**.

- **Macrotasks** include tasks like `setTimeout`, `setInterval`, I/O operations.
- **Microtasks** include promises and mutation observers.

**Execution Order**:
1. The event loop processes all **macrotasks**.
2. After each macrotask, it checks the **microtask queue** and processes all microtasks before moving back to the event queue.

**Example**:
```javascript
setTimeout(() => {
  console.log('Macrotask');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask');
});
```

**Expected Output**:
```
Microtask
Macrotask
```

---

### **7. The Event Loop in Node.js**

In Node.js, the event loop works similarly but with additional phases, allowing non-blocking I/O operations.

- **Timers Phase**: Executes callbacks from `setTimeout` and `setInterval`.
- **I/O Callbacks Phase**: Handles I/O events like file system or networking operations.
- **Poll Phase**: The event loop checks the event queue for pending events.
- **Check Phase**: Executes `setImmediate` callbacks.
- **Close Callbacks Phase**: Handles any close event handlers like `socket.on('close')`.


### **8. Real-Life Use Cases of Events and Event Loops**

1. **Real-time Applications**: Games, chats, or live notifications where multiple users interact.
2. **Non-blocking I/O**: File reading, database queries, and network requests that should not block the execution of the main program.
3. **Event-Driven Programming**: Handling events such as clicks, key presses, or network responses in browsers and servers.


### **Summary**

- **Events** are actions that occur in the system that JavaScript can respond to.
- The **Event Loop** manages asynchronous code, ensuring JavaScript runs in a non-blocking, single-threaded environment.
- Asynchronous operations are queued in the **event queue** and handled after the **call stack** is empty.
- JavaScript uses **microtasks** and **macrotasks** to organize the execution of tasks, ensuring tasks like promises are processed before timers or I/O operations.

---
---

## Event Emitters

In Node.js, **Event Emitters** are used to handle and emit events. The core module `events` provides the functionality to work with event-driven programming. Event Emitters allow you to create custom events and register listeners (callbacks) that respond when these events are triggered.

#### **Key Concepts:**
1. **EventEmitter Class:** This is the core class in the `events` module. It allows you to register event listeners and emit events.
2. **Events:** Events are signals that something has happened in the system. For example, a user logging in or a file being uploaded.

### **How to Use Event Emitters:**

1. **Importing the EventEmitter class:**
   ```javascript
   const EventEmitter = require('events');
   ```

2. **Creating an instance of EventEmitter:**
   ```javascript
   const emitter = new EventEmitter();
   ```

3. **Registering an Event Listener (Subscriber):**
   Using `on()` or `addListener()` to register event listeners for custom events.
   ```javascript
   emitter.on('eventName', (message) => {
       console.log(`Event triggered: ${message}`);
   });
   ```

4. **Emitting an Event (Publisher):**
   Use `emit()` to trigger the event and pass data to the listeners.
   ```javascript
   emitter.emit('eventName', 'Hello, this is a custom event!');
   ```

### **Example:**
```javascript
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event with a name as argument
eventEmitter.emit('greet', 'John');
```

**Output:**
```
Hello, John!
```

### **Methods of EventEmitter:**
1. **on(eventName, listener):** Adds a listener for the specified event.
2. **emit(eventName, ...args):** Emits an event, triggering all the listeners for that event.
3. **once(eventName, listener):** Adds a listener that will only fire once.
4. **removeListener(eventName, listener):** Removes a listener for the specified event.
5. **removeAllListeners(eventName):** Removes all listeners for the specified event.

### **Example with `once()` (Listener that runs only once):**
```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listen to 'greet' event but only once
eventEmitter.once('greet', (name) => {
    console.log(`Hello, ${name}! This will only run once.`);
});

eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('greet', 'Bob');  // This will not trigger the listener
```

**Output:**
```
Hello, Alice! This will only run once.
```

### **EventEmitter with Error Handling:**
You can also use Event Emitters to handle errors by emitting an `error` event. If no listeners are attached to the `error` event, Node.js will throw an uncaught exception.

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => {
    console.log(`Error occurred: ${err.message}`);
});

// Emit error event
eventEmitter.emit('error', new Error('Something went wrong!'));
```

**Output:**
```
Error occurred: Something went wrong!
```

### **Summary:**
- **Event Emitters** are used in Node.js to create custom events and handle asynchronous operations.
- The `EventEmitter` class allows registering listeners for events and emitting those events.
- Events can be handled synchronously or asynchronously, making Event Emitters powerful for event-driven applications.








---
---

## Fs Module

The `fs` (File System) module in Node.js allows you to interact with the file system. It provides both synchronous and asynchronous methods to work with files and directories, such as reading, writing, updating, and deleting files, as well as managing directories.

#### **Key Features**:
- Works with both **synchronous** and **asynchronous** methods.
- Supports various file operations like creating, deleting, and updating files.
- Works with directories, buffers, and streams.

---

### **1. Importing the `fs` Module**

```javascript
const fs = require('fs');
```

This imports the `fs` module so you can use its methods.

---

### **2. Reading Files**

The `fs` module provides methods to read files. The most common methods are:

#### **Asynchronous Read - `fs.readFile()`**:
```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data); // Outputs the content of example.txt
});
```
- **`fs.readFile(path, encoding, callback)`**: Reads the file at the given path with the specified encoding asynchronously.
- **`utf8`** specifies the encoding to return the content as a string.

#### **Synchronous Read - `fs.readFileSync()`**:
```javascript
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data); // Outputs the content of example.txt
} catch (err) {
    console.error('Error reading file:', err);
}
```
- **`fs.readFileSync(path, encoding)`**: Reads the file synchronously, blocking the execution until the file is read.

---

### **3. Writing to Files**

The `fs` module allows you to write data to a file.

#### **Asynchronous Write - `fs.writeFile()`**:
```javascript
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully');
});
```
- **`fs.writeFile(path, data, callback)`**: Writes data to a file asynchronously. If the file doesn't exist, it will be created. If it exists, it will be overwritten.

#### **Synchronous Write - `fs.writeFileSync()`**:
```javascript
try {
    fs.writeFileSync('example.txt', 'Hello, Node.js!');
    console.log('File written successfully');
} catch (err) {
    console.error('Error writing to file:', err);
}
```
- **`fs.writeFileSync(path, data)`**: Writes data synchronously to a file.

---

### **4. Appending Data to a File**

#### **Asynchronous Append - `fs.appendFile()`**:
```javascript
fs.appendFile('example.txt', '\nAppended text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Data appended successfully');
});
```
- **`fs.appendFile(path, data, callback)`**: Appends data to a file. If the file does not exist, it is created.

#### **Synchronous Append - `fs.appendFileSync()`**:
```javascript
try {
    fs.appendFileSync('example.txt', '\nAppended text');
    console.log('Data appended successfully');
} catch (err) {
    console.error('Error appending to file:', err);
}
```
- **`fs.appendFileSync(path, data)`**: Appends data synchronously.

---

### **5. Deleting Files**

#### **Asynchronous Delete - `fs.unlink()`**:
```javascript
fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});
```
- **`fs.unlink(path, callback)`**: Asynchronously deletes the file at the specified path.

#### **Synchronous Delete - `fs.unlinkSync()`**:
```javascript
try {
    fs.unlinkSync('example.txt');
    console.log('File deleted successfully');
} catch (err) {
    console.error('Error deleting file:', err);
}
```
- **`fs.unlinkSync(path)`**: Synchronously deletes the file at the specified path.

---

### **6. Checking File Information**

#### **Asynchronous File Stats - `fs.stat()`**:
```javascript
fs.stat('example.txt', (err, stats) => {
    if (err) {
        console.error('Error retrieving file stats:', err);
        return;
    }
    console.log(stats); // Outputs file stats, including size, creation time, etc.
});
```
- **`fs.stat(path, callback)`**: Retrieves the stats of a file or directory asynchronously.

#### **Synchronous File Stats - `fs.statSync()`**:
```javascript
try {
    const stats = fs.statSync('example.txt');
    console.log(stats); // Outputs file stats
} catch (err) {
    console.error('Error retrieving file stats:', err);
}
```
- **`fs.statSync(path)`**: Retrieves the stats of a file or directory synchronously.

---

### **7. Directory Operations**

#### **Reading a Directory - `fs.readdir()`**:
```javascript
fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log(files); // Outputs an array of files in the current directory
});
```
- **`fs.readdir(path, callback)`**: Reads the contents of a directory asynchronously.

#### **Synchronous Directory Read - `fs.readdirSync()`**:
```javascript
try {
    const files = fs.readdirSync('./');
    console.log(files); // Outputs an array of files in the current directory
} catch (err) {
    console.error('Error reading directory:', err);
}
```
- **`fs.readdirSync(path)`**: Reads the contents of a directory synchronously.

#### **Creating a Directory - `fs.mkdir()`**:
```javascript
fs.mkdir('newDir', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});
```
- **`fs.mkdir(path, options, callback)`**: Creates a new directory. The `{ recursive: true }` option creates directories recursively if they don't exist.

#### **Synchronous Directory Creation - `fs.mkdirSync()`**:
```javascript
try {
    fs.mkdirSync('newDir', { recursive: true });
    console.log('Directory created successfully');
} catch (err) {
    console.error('Error creating directory:', err);
}
```
- **`fs.mkdirSync(path, options)`**: Creates a directory synchronously.

#### **Deleting a Directory - `fs.rmdir()`**:
```javascript
fs.rmdir('newDir', (err) => {
    if (err) {
        console.error('Error deleting directory:', err);
        return;
    }
    console.log('Directory deleted successfully');
});
```
- **`fs.rmdir(path, callback)`**: Deletes an empty directory asynchronously.

#### **Synchronous Directory Deletion - `fs.rmdirSync()`**:
```javascript
try {
    fs.rmdirSync('newDir');
    console.log('Directory deleted successfully');
} catch (err) {
    console.error('Error deleting directory:', err);
}
```
- **`fs.rmdirSync(path)`**: Deletes an empty directory synchronously.

---

### **8. File System Streams (Advanced)**

Node.js also supports **streams**, which allow for handling large files or data efficiently without loading everything into memory at once.

#### **File Read Stream - `fs.createReadStream()`**:
```javascript
const readStream = fs.createReadStream('example.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk); // Outputs each chunk of the file
});
readStream.on('end', () => {
    console.log('File reading finished');
});
```

#### **File Write Stream - `fs.createWriteStream()`**:
```javascript
const writeStream = fs.createWriteStream('example.txt', 'utf8');
writeStream.write('Some new text to write');
writeStream.end(); // Finish writing
```

Streams provide better performance and are especially useful when working with large files.


### **Summary of fs Methods:**

| Method                | Description                                                 | Async/Sync   |
|-----------------------|-------------------------------------------------------------|--------------|
| `fs.readFile()`        | Reads a file asynchronously.                                | Asynchronous |
| `fs.readFileSync()`    | Reads a file synchronously.                                 | Synchronous  |
| `fs.writeFile()`       | Writes data to a file asynchronously.                       | Asynchronous |
| `fs.writeFileSync()`   | Writes data to a file synchronously.                        | Synchronous  |
| `fs.appendFile()`      | Appends data to a file asynchronously.                      | Asynchronous |
| `fs.appendFileSync()`  | Appends data to a file synchronously.                       | Synchronous  |
| `fs.unlink()`          | Deletes a file asynchronously.                              | Asynchronous |
| `fs.unlinkSync()`      | Deletes a file synchronously.                               | Synchronous  |
| `fs.stat()`            | Retrieves stats of a file or directory asynchronously.      | Asynchronous |
| `fs.statSync()`        | Retrieves stats of a file or directory synchronously.       | Synchronous  |
| `fs.readdir()`         | Reads the contents of a directory asynchronously.           | Asynchronous |
| `fs.readdirSync()`     | Reads the contents of a directory synchronously.            | Synchronous  |
| `fs.mkdir()`           | Creates a new directory asynchronously.                     | Asynchronous |
| `fs.mkdirSync()`       | Creates a new directory synchronously.                      | Synchronous  |
| `fs.rmdir()`           | Deletes an empty directory asynchronously.                  | Asynchronous |
| `fs.rmdirSync()`       | Deletes an empty directory synchronously.                   | Synchronous  |


### **Conclusion**

The `fs` module is essential for working with files and directories in Node.js. It provides a variety of methods to perform both synchronous and asynchronous operations, allowing you to efficiently handle file input/output tasks. The asynchronous methods are often used in real-world applications to avoid blocking the main thread, improving performance and scalability.


---


## Middlewares in Express.js

In Express.js, middleware functions are used to process requests before they reach the route handlers. These functions can modify the request object, the response object, or terminate the request-response cycle entirely. Middleware can be used for various purposes, such as logging, authentication, error handling, data validation, and more.


### **What is Middleware?**

Middleware is a function that receives the request (`req`), the response (`res`), and a `next` function as arguments. The `next` function is used to pass control to the next middleware in the stack. Middleware functions can either terminate the request-response cycle by sending a response or call `next()` to pass control to the next middleware.

---

### **Types of Middleware**

1. **Application-Level Middleware**: This middleware is bound to the app and applies to all or specific routes of an application.
2. **Router-Level Middleware**: This middleware is bound to specific routers and applies only to routes handled by that router.
3. **Built-In Middleware**: Express provides some built-in middleware functions like `express.static()` to serve static files.
4. **Third-Party Middleware**: Middleware provided by external libraries, such as `body-parser`, `morgan`, and `cors`.
5. **Error-Handling Middleware**: A special type of middleware used for handling errors.

---

### **Basic Middleware Example**

```javascript
const express = require('express');
const app = express();

// Example of a basic middleware function
app.use((req, res, next) => {
    console.log('Middleware executed');
    next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```
- The middleware function logs "Middleware executed" to the console and then calls `next()` to pass control to the next handler.

---

### **Application-Level Middleware**

Middleware can be applied to all routes or specific routes of the application.

#### **Apply Middleware to All Routes**

```javascript
app.use((req, res, next) => {
    console.log('This middleware runs for all routes');
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
```

#### **Apply Middleware to Specific Routes**

```javascript
app.use('/about', (req, res, next) => {
    console.log('Middleware runs only for /about');
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
```
- The middleware for `/about` is applied only when the `/about` route is hit.

---

### **Router-Level Middleware**

Express allows you to define middleware for specific routers (i.e., a set of routes). This is especially useful when handling multiple related routes.

#### **Using Router-Level Middleware**

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Apply middleware only to the router
router.use((req, res, next) => {
    console.log('Router-level middleware');
    next();
});

// Define routes under the router
router.get('/', (req, res) => {
    res.send('Router Home');
});

router.get('/about', (req, res) => {
    res.send('Router About');
});

// Use the router for routes starting with /api
app.use('/api', router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```
- Here, the router-level middleware is applied to routes under `/api`.

---

### **Built-In Middleware**

Express includes several built-in middleware functions to handle common tasks like serving static files, parsing request bodies, etc.

#### **Serving Static Files**

```javascript
app.use(express.static('public')); // Serve files in 'public' folder as static assets
```

#### **Body Parsing Middleware**

```javascript
app.use(express.json()); // Middleware for parsing JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded request bodies
```

---

### **Third-Party Middleware**

You can use third-party middleware for common tasks such as logging, security, etc.

#### **Example: Using `morgan` for Request Logging**

First, install `morgan`:

```bash
npm install morgan
```

Then, use it in your app:

```javascript
const morgan = require('morgan');

app.use(morgan('dev')); // Logs requests in the 'dev' format
```

---

### **Error-Handling Middleware**

Error-handling middleware is used to catch and handle errors that occur in the application. It is defined with four parameters: `err`, `req`, `res`, and `next`.

#### **Example: Error-Handling Middleware**

```javascript
app.use((req, res, next) => {
    const error = new Error('Something went wrong');
    error.status = 500;
    next(error); // Pass the error to the error-handling middleware
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({ error: err.message });
});
```
- The error-handling middleware will catch any errors and respond with a custom error message.

---

### **Order of Middleware Execution**

The order in which you define middleware is important. Middleware is executed in the order it is defined.

- **Global Middleware**: Middleware defined using `app.use()` before route handlers runs for all routes.
- **Route-Specific Middleware**: Middleware defined with specific routes or routers will run only for those routes.
- **Error-Handling Middleware**: Error-handling middleware should be defined after all other middleware and routes to catch errors from previous middleware.

---

### **Chaining Middleware**

You can chain multiple middleware functions for complex logic.

```javascript
app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, Middleware!');
});
```
- Both middleware functions are executed in order before the route handler.

---

### **Custom Middleware Example**

A simple middleware that logs the HTTP method and request URL:

```javascript
function logRequest(req, res, next) {
    console.log(`${req.method} request to ${req.url}`);
    next();
}

app.use(logRequest);

app.get('/', (req, res) => {
    res.send('Home Page');
});
```
- This middleware logs each request's HTTP method and URL.


### **Summary of Middleware Concepts**

- **Middleware** is a function that processes the request and response objects in the request-response cycle.
- **Types**: Application-level, Router-level, Built-in, Third-party, and Error-handling middleware.
- **Order of Execution**: Middleware is executed in the order it is defined.
- **Chaining**: You can chain multiple middleware functions for complex logic.
- **Error-handling**: Special middleware to handle errors in your application.


### **Conclusion**

Middleware functions are an essential part of Express.js, allowing developers to intercept and modify requests, responses, and handle errors. Understanding how to use them properly enables the development of robust and scalable applications by decoupling common tasks like authentication, logging, validation, and error handling.


---

## Callbacks


A **callback** is a function that is passed into another function as an argument and is executed after the completion of that function. Callbacks are widely used in asynchronous programming to handle operations like reading files, making network requests, or any other tasks that take time to complete.

---

### **What is a Callback?**

A **callback function** is a function that you pass as an argument to another function. The second function can call back (execute) the passed function at a later point in time, typically once it finishes its task.

#### **Simple Example of Callback**

```javascript
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback(); // Calling the callback function
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// Using callback
greet('Alice', sayGoodbye);
```

**Output:**
```
Hello, Alice
Goodbye!
```

In this example, `sayGoodbye` is passed as a callback to `greet`, and is called after the greeting message is printed.

---

### **Synchronous Callback**

A **synchronous callback** is executed immediately after the parent function completes its operation. It happens in the same thread and blocks the rest of the code until it's done.

#### **Example of Synchronous Callback**

```javascript
function fetchData(callback) {
    console.log('Fetching data...');
    callback(); // callback is called after the fetchData is done
}

fetchData(() => {
    console.log('Data fetched!');
});
```

**Output:**
```
Fetching data...
Data fetched!
```

In the above example, the callback function is executed immediately after the parent function finishes, without any delay.

---

### **Asynchronous Callback**

An **asynchronous callback** is used when an operation is performed that takes time (e.g., reading a file, making an API call). The callback is executed only after the operation completes, without blocking the rest of the code from running.

#### **Example of Asynchronous Callback (setTimeout)**

```javascript
console.log('Start');

setTimeout(() => {
    console.log('This is a delayed message');
}, 2000);

console.log('End');
```

**Output:**
```
Start
End
This is a delayed message
```

In this example, the `setTimeout` function is asynchronous. The message "This is a delayed message" is printed after a delay of 2 seconds, while the rest of the code continues to execute without waiting for it.

---

### **Callback Functions with Error Handling**

In many asynchronous operations, callbacks are used for handling errors. This pattern is called the **Error-First Callback** or **Node.js Callback Convention**, where the first argument is reserved for an error (if any), and the second is for the result.

#### **Example of Error-First Callback**

```javascript
function readFile(filename, callback) {
    if (filename === '') {
        callback('Error: Filename cannot be empty', null);
    } else {
        callback(null, 'File content here');
    }
}

readFile('data.txt', (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
});
```

**Output:**
```
File content here
```

If an error occurs (such as a missing filename), the error will be passed to the callback. If everything works, the result is passed.

---

### **Callback Hell (Pyramid of Doom)**

A problem that arises from the extensive use of callbacks, especially in asynchronous programming, is known as **callback hell**. This happens when you nest multiple callbacks inside each other, which can make your code hard to read and maintain.

#### **Example of Callback Hell**

```javascript
doSomething((err, result1) => {
    if (err) {
        console.log(err);
    } else {
        doSomethingElse(result1, (err, result2) => {
            if (err) {
                console.log(err);
            } else {
                doAnotherThing(result2, (err, result3) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Final result:', result3);
                    }
                });
            }
        });
    }
});
```

This kind of nested callback structure leads to hard-to-maintain and error-prone code. 

### **Handling Callback Hell with Promises or Async/Await**

To handle callback hell, **Promises** or **Async/Await** can be used to flatten the structure and make it more readable.

---

### **Benefits of Using Callbacks**

1. **Handling Asynchronous Operations**: Callbacks are ideal for managing asynchronous tasks, such as handling I/O operations, network requests, and timers.
2. **Non-blocking Code**: Callbacks allow code to continue running while waiting for the completion of time-consuming tasks.
3. **Custom Logic**: Callbacks enable custom logic to be executed after certain actions are completed.

---

### **Drawbacks of Callbacks**

1. **Callback Hell**: Nested callbacks can lead to unreadable and difficult-to-maintain code.
2. **Error Handling**: It can sometimes be difficult to handle errors properly in deeply nested callbacks.

---

### **Summary of Callbacks**

- **A callback** is a function passed into another function, which is invoked after some operations are completed.
- **Synchronous callbacks** are executed immediately.
- **Asynchronous callbacks** are executed after a delay, allowing the program to continue without waiting.
- **Error-first callbacks** follow a common pattern, where the first argument is for errors.
- Callbacks can sometimes lead to **callback hell** in asynchronous operations, but this can be mitigated by using **Promises** or **Async/Await**.

By understanding how to work with callbacks, you can manage asynchronous code effectively, though in modern JavaScript, many developers prefer using **Promises** or **Async/Await** for cleaner, more readable code.


---

## Routes


In web development, a **route** refers to a specific path or URL that a web server listens for, and performs a specific action or returns data when that path is accessed. Routes are essential for defining the different endpoints of an application, and they map requests to specific functions that handle the logic associated with those routes.

In the context of Node.js with **Express.js**, a route is typically defined for HTTP requests such as `GET`, `POST`, `PUT`, `DELETE`, etc., and these routes define how the server responds to different requests.


### **Types of Routes**

Routes are categorized based on the HTTP method they respond to and the URL pattern they match. These include:

1. **GET** Route: Used to request data from the server.
2. **POST** Route: Used to submit data to the server (e.g., creating new data).
3. **PUT** Route: Used to update existing data on the server.
4. **DELETE** Route: Used to delete data from the server.
5. **PATCH** Route: Used to apply partial updates to data.
6. **OPTIONS** Route: Used to return the allowed HTTP methods for a particular URL.

Each route is defined with a **URL pattern** and the associated handler function that executes when a request to that pattern is made.

---

### **Basic Route Syntax in Express.js**

In Express.js, you can define routes using the following syntax:

```javascript
// For GET requests
app.get('/path', (req, res) => {
    res.send('Hello World');
});

// For POST requests
app.post('/path', (req, res) => {
    res.send('Data received');
});
```

In the example above:
- `app.get('/path', handler)` responds to **GET** requests to the `/path` route.
- `app.post('/path', handler)` responds to **POST** requests to the `/path` route.

---

### **Route Parameters**

Express allows for dynamic route parameters, making routes more flexible and reusable. A route parameter is denoted by a colon (`:`) before the parameter name in the URL.

#### **Example of Route Parameters**

```javascript
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
```

In this example, the route `/users/:id` is dynamic, and the value passed for `id` in the URL is captured as a route parameter.

- If a request is made to `/users/123`, the server will respond with `User ID: 123`.

---

### **Query Parameters**

Query parameters are additional parameters passed in the URL, typically following the `?` symbol.

#### **Example of Query Parameters**

```javascript
app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    res.send(`You searched for: ${searchTerm}`);
});
```

If you visit `/search?q=Node.js`, the server will respond with `You searched for: Node.js`.

---

### **Route Handling Functions (Middleware)**

Express allows you to define multiple functions to handle a request to a route. These functions are executed in sequence, which is known as **middleware**. Each middleware function has access to the request and response objects and can either terminate the request-response cycle or pass control to the next function.

#### **Example of Multiple Handlers for a Route**

```javascript
app.get('/profile', (req, res, next) => {
    console.log('First handler');
    next(); // Passing control to the next middleware
}, (req, res) => {
    console.log('Second handler');
    res.send('Profile Page');
});
```

Here, two functions are defined for the `/profile` route. The first logs something to the console and then calls `next()`, passing control to the second handler, which sends the response.

---

### **Route Methods**

Express provides route methods that correspond to HTTP methods. You can define different types of routes using these methods:

#### **GET Route**

```javascript
app.get('/about', (req, res) => {
    res.send('About Us');
});
```

#### **POST Route**

```javascript
app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});
```

#### **PUT Route**

```javascript
app.put('/update', (req, res) => {
    res.send('Data Updated');
});
```

#### **DELETE Route**

```javascript
app.delete('/delete', (req, res) => {
    res.send('Data Deleted');
});
```

---

### **Route Chaining**

You can chain multiple route methods to handle the same route for different HTTP methods.

#### **Example of Route Chaining**

```javascript
app.route('/user')
    .get((req, res) => {
        res.send('Get User');
    })
    .post((req, res) => {
        res.send('Create User');
    })
    .put((req, res) => {
        res.send('Update User');
    })
    .delete((req, res) => {
        res.send('Delete User');
    });
```

In this example, all HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) are chained for the `/user` route.

---

### **Route Wildcards**

Express allows you to use wildcards in routes to handle multiple similar routes.

#### **Example of Route Wildcard**

```javascript
app.get('/users/*', (req, res) => {
    res.send('User Profile');
});
```

In this example, any route starting with `/users/` will be matched, like `/users/123` or `/users/john`.

---

### **Route Groups (Router)**

You can group related routes together using **express.Router()**. This is useful for organizing routes into logical modules.

#### **Example of Using Router**

```javascript
const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('All Products');
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product with ID: ${productId}`);
});

module.exports = router;
```

In the main application, you can import and use this router:

```javascript
const productRouter = require('./routes/products');
app.use('/api', productRouter); // All routes will be prefixed with /api
```

Now, the routes will be accessible as `/api/products` and `/api/products/:id`.


### **Error Handling Routes**

You can define a route that catches all errors using a special middleware handler, usually placed at the end of all route definitions.

#### **Example of Error Handling Route**

```javascript
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});
```

This will catch all unmatched routes and send a `404` response.


### **Summary**

- **Routes** map specific paths and HTTP methods (GET, POST, etc.) to functions that define the behavior for those paths.
- **Dynamic routes** can include parameters like `:id` or query parameters like `?q=value`.
- Routes can be grouped using **express.Router()** for better organization.
- **Middleware** functions can be used to process requests before they reach route handlers.
- Express allows for **error handling** using a special route that catches unmatched routes.


---


## JWT


**JSON Web Token (JWT)** is an open standard (RFC 7519) used for securely transmitting information between parties as a JSON object. The information can be verified and trusted because it is digitally signed. JWTs are commonly used in web applications to handle authentication and authorization processes.


### **Structure of a JWT**

A JWT consists of three parts, each separated by a dot (`.`):

1. **Header**: Contains metadata about the token, like the signing algorithm (e.g., `HS256` or `RS256`).
2. **Payload**: Contains the claims or the data. Claims are statements about an entity (typically, the user) and additional metadata.
3. **Signature**: Ensures that the token hasn't been tampered with. It's created by signing the header and payload with a secret key or private key.

The full JWT structure looks like this:
```
HEADER.PAYLOAD.SIGNATURE
```

#### Example JWT:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

### **1. Header**

The header typically consists of two parts:
- **alg** (Algorithm): The algorithm used to sign the token (e.g., `HS256` for HMAC SHA-256).
- **typ** (Type): The type of the token, which is typically `JWT`.

Example header (Base64 encoded):
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

---

### **2. Payload**

The payload contains the claims. There are three types of claims in the JWT:
- **Registered claims**: Predefined claims, like `iss` (issuer), `exp` (expiration time), `sub` (subject), `aud` (audience), etc.
- **Public claims**: Claims that are defined by the users and can be used to share information. These should be collision-resistant.
- **Private claims**: Custom claims created to share information between parties that agree on them (e.g., user role, permissions).

Example payload (Base64 encoded):
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

---

### **3. Signature**

To create the signature part, you need to:
- Take the encoded header and payload.
- Apply a secret key (using the algorithm specified in the header) to sign it.

For example, using HMAC SHA-256 (`HS256`):
```javascript
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret)
```

This results in a signature that ensures the integrity and authenticity of the token. If the data is altered, the signature will no longer match.

---

### **JWT Flow (Authentication)**

1. **User Login**:
   - The user sends a login request (e.g., with a username and password).
   - The server authenticates the user (by checking the credentials).
   - Once authenticated, the server generates a JWT token with relevant information (e.g., user ID, expiration time).
   - The JWT is sent back to the client (browser, mobile app).

2. **User Accessing Protected Routes**:
   - The client stores the JWT (commonly in the localStorage or cookies).
   - For subsequent requests to protected routes, the client includes the JWT in the request header (`Authorization: Bearer <token>`).
   
3. **Server Validation**:
   - The server validates the JWT in the `Authorization` header by decoding it and verifying the signature with the server's secret key.
   - If valid, the server grants access to the protected resource. Otherwise, it returns an error (e.g., `401 Unauthorized`).

---

### **JWT Use Cases**

1. **Authentication**: 
   - After logging in, the server issues a JWT. The client uses this JWT to authenticate future requests. 
   - The server verifies the JWT to authenticate the user.

2. **Authorization**:
   - After authentication, the JWT contains the user's role/permissions, allowing the server to authorize access to specific resources based on the user's role.

3. **Single Sign-On (SSO)**:
   - JWT can be used across multiple applications, allowing users to authenticate once and access various services without re-authenticating.

---

### **JWT Example in Node.js with Express**

**1. Install Required Packages:**
```bash
npm install express jsonwebtoken dotenv
```

**2. Sample Code:**

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Secret key for signing JWT (should be stored securely)
const SECRET_KEY = process.env.JWT_SECRET;

// Route to authenticate user and issue a token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Example: Check user credentials (In real life, query database)
    if (username === 'admin' && password === 'password123') {
        // Create JWT token
        const token = jwt.sign({ username: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        return res.status(403).json({ message: 'Access denied' });
    }
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next(); // Proceed to the protected route
    });
};

// Protected route that requires JWT for access
app.get('/dashboard', authenticateJWT, (req, res) => {
    res.send('Welcome to the Dashboard');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```

---

### **JWT Advantages**

1. **Compact**: JWT tokens are compact, meaning they can be sent as URL parameters, in HTTP headers, or in cookies.
2. **Stateless**: Since JWTs contain the user data and are signed, no session is required on the server-side. This makes it easier to scale applications.
3. **Cross-Domain Authentication**: JWT is useful for applications that need to authenticate users across different domains or services (SSO).


### **JWT Expiration and Refresh Tokens**

- **Expiration (`exp`)**: JWTs have an expiration time, which is set during token creation. After it expires, the token is no longer valid.
- **Refresh Tokens**: When a JWT expires, a **refresh token** can be used to obtain a new JWT without re-authenticating the user.


### **JWT Risks and Best Practices**

1. **Token Storage**: Store JWT securely (e.g., in HTTPOnly cookies, not in localStorage) to prevent XSS attacks.
2. **Short Expiration Time**: Set a reasonable expiration time for JWTs to minimize security risks.
3. **Secure Transmission**: Always use **HTTPS** to transmit JWTs to avoid interception by attackers.


### **Summary**

- **JWT** is a compact and secure way of transmitting data (often used for authentication and authorization).
- It consists of three parts: **Header**, **Payload**, and **Signature**.
- JWTs are used in web applications for user authentication and authorization, offering statelessness and ease of scaling.
- Use **HTTP headers** to send JWT tokens and validate them on the server for protected routes.

---

## Example (Optional)

Here's a simple application that implements all the important topics, using Node.js, Express.js, Socket.io, Event Loop, the `fs` module, Middleware, Callbacks, Routes, and JWT.

### **Step-by-Step Implementation**

1. **Install Dependencies**:

You will need the following npm packages:
```bash
npm init -y
npm install express socket.io jsonwebtoken dotenv
```

2. **Application Structure**:

```
- app.js
- routes/
  - auth.js
- models/
  - user.js
- public/
  - index.html
  - styles.css
```

### **app.js (Main Application)**

```javascript
const express = require('express');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const fs = require('fs');
const authRoute = require('./routes/auth');
const app = express();

// Load environment variables
dotenv.config();

// Middleware: Log each request
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
});

// Middleware to parse JSON
app.use(express.json());

// Serve static files (like index.html, styles.css)
app.use(express.static('public'));

// Use the authentication route
app.use('/auth', authRoute);

// Example of reading from a file using the fs module
fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Read file:', data);
});

// Event Loop Simulation: Perform non-blocking operations
setImmediate(() => {
    console.log('This runs after I/O tasks, demonstrating event loop.');
});

// Socket.io setup for real-time communication
const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const io = socketIo(server);
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('message', (data) => {
        console.log('Message from client:', data);
        socket.emit('response', 'Hello from the server!');
    });
});
```

### **routes/auth.js (Authentication Route)**

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Secret key for JWT
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// Simulate a user login for JWT authentication
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Example: Check user credentials (In real-life, query the database)
    if (username === 'admin' && password === 'password123') {
        // Create JWT token
        const token = jwt.sign({ username: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware to verify JWT token
router.use((req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Access denied' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next(); // Proceed to the protected route
    });
});

// Example of a protected route
router.get('/dashboard', (req, res) => {
    res.json({ message: `Welcome to the Dashboard, ${req.user.username}!` });
});

module.exports = router;
```

### **models/user.js (Simulating a User Model)**

```javascript
// Simulating a simple User model
module.exports = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    save() {
        return new Promise((resolve) => {
            // Simulate saving the user data to a database
            setTimeout(() => {
                resolve({ name: this.name, age: this.age, id: Date.now() });
            }, 1000);
        });
    }
};
```

### **public/index.html (Client Side HTML)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to the Node.js App</h1>
    <button id="sendMessage">Send Message to Server</button>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();

        document.getElementById('sendMessage').addEventListener('click', () => {
            socket.emit('message', 'Hello from the client!');
        });

        socket.on('response', (message) => {
            alert(message);
        });
    </script>
</body>
</html>
```

### **public/styles.css (Client Side CSS)**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
}

h1 {
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

### **.env (Environment Variables)**

```
JWT_SECRET=your-secure-secret-key
```

---

### **What This Application Does:**

1. **Express.js**: The application uses Express.js to set up routes, handle HTTP requests, and serve static files like `index.html` and `styles.css`.
   
2. **Socket.io**: The application creates a real-time communication channel between the server and client using Socket.io. When a user clicks the button on the webpage, a message is sent to the server, which responds with a message back to the client.

3. **Event Loop**: Demonstrates a non-blocking, asynchronous operation using `setImmediate`, which prints a message after I/O operations are completed.

4. **Fs Module**: Reads the `index.html` file from the file system asynchronously and prints the content to the console.

5. **Middleware**: A middleware is used to log every incoming request, showing the HTTP method and URL path.

6. **JWT**: The `/auth/login` route handles authentication by issuing a JWT token when valid credentials are provided. The `/auth/dashboard` route is a protected route that requires a valid JWT to access.

7. **Callbacks**: Used within the `fs.readFile()` method to read the file asynchronously. Also, callbacks are used for JWT verification and in other asynchronous operations (e.g., saving a user).

8. **Routes**: The routes are organized under the `/auth` path, handling both login and protected dashboard access using JWT.

---

### **How to Run the Application:**

1. Ensure you have Node.js and npm installed.
2. Install the dependencies:
   ```bash
   npm install express socket.io jsonwebtoken dotenv
   ```
3. Create the required files (app.js, routes/auth.js, models/user.js, public/index.html, public/styles.css).
4. Run the server:
   ```bash
   node app.js
   ```
5. Open the browser and navigate to `http://localhost:3000`. You can log in with the credentials `admin` and `password123`, and then try accessing the protected route.


This application covers all the important topics, including how they fit together in a simple yet functional web application.


---
---


## **Other Imp Topics**

## Restful APIs


A **RESTful API** (Representational State Transfer) is an architectural style for providing standards between computer systems on the web, allowing them to communicate with each other. It is based on the principles of REST, which uses HTTP requests to perform CRUD operations on resources.

**Main Concepts of RESTful APIs**:

1. **Resources**: Each resource (e.g., user, post, product) is identified by a unique URL.
2. **HTTP Methods**: The API uses standard HTTP methods for CRUD operations:
   - `GET` to retrieve a resource
   - `POST` to create a new resource
   - `PUT` to update an existing resource
   - `DELETE` to remove a resource
3. **Stateless**: Every HTTP request is independent; no session is stored between requests.
4. **Data Formats**: Data is typically sent in JSON or XML format.
5. **Uniform Interface**: The API has a consistent set of rules to access resources.

---

### **RESTful API Characteristics**:

- **Stateless**: The server does not store any information about previous requests. Each request from the client must contain all the information the server needs to fulfill that request.
  
- **Client-Server Architecture**: The client and server are separate, which allows for scalability and flexibility. The client handles the user interface, and the server manages data.

- **Cacheable**: Responses from the server can be cached to improve performance.

- **Layered System**: A REST API can have multiple layers (e.g., load balancers, proxies) that don't affect the client's interaction with the API.

---

### **Common HTTP Methods in RESTful API**:

- **GET**: Retrieve data from the server (e.g., list of users or a specific user).
- **POST**: Send data to the server to create a new resource (e.g., create a new user).
- **PUT**: Send data to the server to update an existing resource (e.g., update a user's details).
- **DELETE**: Remove a resource from the server (e.g., delete a user).

---

### **Simple Example of a RESTful API using Node.js and Express**

Let's implement a simple RESTful API for managing users.

#### **Step 1: Install Dependencies**

You need to install `express` to build the API:
```bash
npm init -y
npm install express
```

#### **Step 2: Create the `app.js` file**

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data (In real applications, this would be in a database)
let users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
];

// GET request to fetch all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// GET request to fetch a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
});

// POST request to create a new user
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        age
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT request to update a user's details
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    const { name, age } = req.body;
    user.name = name;
    user.age = age;
    res.status(200).json(user);
});

// DELETE request to remove a user
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');

    users.splice(userIndex, 1);
    res.status(200).send('User deleted');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

---

### **Explanation of the Code**:

1. **GET `/users`**: Fetches a list of all users. This is a typical use of the GET method.
2. **GET `/users/:id`**: Fetches a single user based on the `id` parameter from the URL.
3. **POST `/users`**: Creates a new user by receiving the `name` and `age` from the request body.
4. **PUT `/users/:id`**: Updates an existing user’s data by `id` (i.e., updates `name` and `age`).
5. **DELETE `/users/:id`**: Deletes a user by their `id`.

---

### **How to Test the API**

- **GET** `/users`: To get all users
  ```bash
  curl http://localhost:3000/users
  ```

- **GET** `/users/:id`: To get a specific user (replace `:id` with a valid user ID)
  ```bash
  curl http://localhost:3000/users/1
  ```

- **POST** `/users`: To create a new user (using JSON data)
  ```bash
  curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "New User", "age": 28}'
  ```

- **PUT** `/users/:id`: To update an existing user's details
  ```bash
  curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name": "Updated User", "age": 35}'
  ```

- **DELETE** `/users/:id`: To delete a user by ID
  ```bash
  curl -X DELETE http://localhost:3000/users/1
  ```


### **RESTful API Best Practices**

1. **Use meaningful resource names**: URLs should represent the resources in a clear and meaningful way. E.g., `/users`, `/posts`.
2. **HTTP Status Codes**: Always use appropriate HTTP status codes to indicate the result of a request.
   - `200 OK`: The request was successful.
   - `201 Created`: The resource was created successfully.
   - `204 No Content`: The request was successful, but no content is returned.
   - `400 Bad Request`: Invalid request (e.g., missing data).
   - `404 Not Found`: Resource not found.
   - `500 Internal Server Error`: Server error.
3. **Versioning**: If your API changes significantly, consider versioning it, e.g., `/api/v1/users`.
4. **Error Handling**: Return clear and detailed error messages when something goes wrong.


### **Summary**:

A **RESTful API** is an architectural style for building APIs that allows clients and servers to communicate using standard HTTP methods (GET, POST, PUT, DELETE). It is based on resources, which are accessed via URLs and represented in a format like JSON. The above example demonstrates how to build a simple RESTful API using Node.js and Express, implementing the core CRUD operations.


---

## Promises
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to attach callbacks instead of using nested functions, making the code more readable.

#### **Example of a Promise:**
```javascript
// Example of a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => console.log(result))  // Success: logs "Operation successful!"
    .catch(error => console.log(error));  // Failure: logs "Operation failed!"
```
---

## Async/Await

**Async/Await** is a syntactic sugar built on top of Promises. It makes asynchronous code easier to write and read by avoiding chaining `.then()` and `.catch()` methods.

- **`async`** makes a function return a Promise.
- **`await`** pauses the execution of the function until the Promise is resolved.

#### **Example of Async/Await:**
```javascript
// Example using Async/Await
async function myFunction() {
    let result = await myPromise;
    console.log(result);  // Success: logs "Operation successful!"
}

myFunction();
```

### **Key Differences:**
1. **Promises** allow chaining `.then()` and `.catch()`.
2. **Async/Await** makes asynchronous code look synchronous, simplifying error handling and making the code cleaner.

### **Benefits of Async/Await Over Promises:**
- Cleaner, more readable code.
- Easier to handle errors with `try/catch` blocks.

#### **Async/Await with Error Handling Example:**
```javascript
async function fetchData() {
    try {
        let result = await myPromise;
        console.log(result);  // Success: logs "Operation successful!"
    } catch (error) {
        console.log(error);  // Failure: logs "Operation failed!"
    }
}

fetchData();
```

### Summary:
- **Promises** are used to handle asynchronous operations with `.then()` and `.catch()`.
- **Async/Await** simplifies the usage of Promises by making the code more synchronous-looking and easy to manage.


---


## Fetching data with Async await, Promises along with error Handling

To handle errors in promises using `try/catch`, you need to use `async/await`. The `try` block contains the promise code, while the `catch` block handles errors thrown by the promise.

**Syntax**:  
```javascript
async function handlePromise() {
    try {
        const result = await someAsyncOperation();
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
```

**Example**:  
```javascript
const fetchData = async () => {
    try {
        const response = await fetch('https://islamkhan.in/docs/mytxt1.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData();
```

---

## MongoDb (CRUD operations)


To perform CRUD operations with MongoDB in Node.js, we need to follow these steps:

1. **Set Up MongoDB**
   - Ensure that MongoDB is installed and running on your machine, or you can use a cloud-based MongoDB service like **MongoDB Atlas**.

2. **Install Required Packages**
   - You need the `mongoose` package to interact with MongoDB in a Node.js environment.

```bash
npm init -y
npm install mongoose express
```

3. **Create a MongoDB Model**
   - Models define the structure of your documents in MongoDB. A model is tied to a specific collection.

---

### **Step-by-Step Example**

#### **Step 1: Create the `app.js` file**

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Body parser middleware
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB URI if using Atlas)
mongoose.connect('mongodb://localhost:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// MongoDB Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Create a new user (POST /users)
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all users (GET /users)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a user by ID (GET /users/:id)
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a user by ID (PUT /users/:id)
app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a user by ID (DELETE /users/:id)
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

---

### **Explanation of the Code:**

1. **Express and Mongoose Setup:**
   - `express` is used to set up the API server, and `mongoose` is used to interact with MongoDB.
   - `mongoose.connect()` connects to the MongoDB database (`crudApp` in this case).
   
2. **Schema and Model:**
   - The `userSchema` defines the structure of the user document, including required fields `name` (String) and `age` (Number).
   - `User` is a Mongoose model created from the schema. It represents the `users` collection in MongoDB.

3. **CRUD Operations:**

   - **POST `/users`**: Creates a new user by accepting JSON data in the request body.
   - **GET `/users`**: Retrieves all users from the database.
   - **GET `/users/:id`**: Retrieves a specific user based on their MongoDB `id`.
   - **PUT `/users/:id`**: Updates a user by `id` with new data provided in the request body.
   - **DELETE `/users/:id`**: Deletes a user by their `id`.

4. **Error Handling:**
   - If any error occurs (e.g., invalid ID, server error), the API will return a relevant error message.

---

### **How to Test the API Using `curl` or Postman**

1. **POST `/users`**: To create a new user:
   ```bash
   curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 30}'
   ```

2. **GET `/users`**: To get all users:
   ```bash
   curl http://localhost:3000/users
   ```

3. **GET `/users/:id`**: To get a user by ID (replace `:id` with an actual user ID):
   ```bash
   curl http://localhost:3000/users/<user_id>
   ```

4. **PUT `/users/:id`**: To update a user by ID:
   ```bash
   curl -X PUT http://localhost:3000/users/<user_id> -H "Content-Type: application/json" -d '{"name": "Updated Name", "age": 35}'
   ```

5. **DELETE `/users/:id`**: To delete a user by ID:
   ```bash
   curl -X DELETE http://localhost:3000/users/<user_id>
   ```


### **Testing with Postman:**

- **GET** requests can be tested by sending a `GET` request to `http://localhost:3000/users` or `http://localhost:3000/users/:id`.
- **POST** requests can be tested by sending a `POST` request to `http://localhost:3000/users` with a JSON body containing `name` and `age`.
- **PUT** and **DELETE** requests can also be tested similarly by providing the user ID in the URL.


### **Summary**

This application demonstrates how to implement **CRUD operations** with **MongoDB** using **Node.js** and **Express.js**. It performs the following:

- **Create** a user (POST)
- **Read** all users or a specific user (GET)
- **Update** a user (PUT)
- **Delete** a user (DELETE)

---

## Connecting Sql database

To connect to a SQL database (such as MySQL, PostgreSQL, or SQLite) in a Node.js application, you'll need to install the appropriate database driver and configure the connection. Below is an example of how to connect to **MySQL** using **Node.js**.

### **Steps to Connect MySQL Database with Node.js**

1. **Install MySQL Driver (MySQL2)**
   First, you need to install the MySQL driver `mysql2` to connect to your MySQL database.

   ```bash
   npm install mysql2
   ```

2. **Create a Connection to the MySQL Database**
   Create a file named `db.js` to set up the connection to the MySQL database.

   ```javascript
   const mysql = require('mysql2');

   // Create a connection to the database
   const connection = mysql.createConnection({
       host: 'localhost',  // Database host
       user: 'root',       // Your MySQL username
       password: 'password', // Your MySQL password
       database: 'testdb'   // Name of the database you want to connect to
   });

   // Connect to the database
   connection.connect((err) => {
       if (err) {
           console.error('Error connecting to the database:', err.stack);
           return;
       }
       console.log('Connected to the database');
   });

   module.exports = connection;
   ```

   - **host**: The host where your MySQL database is running. Use `localhost` if it’s on your local machine or the IP address of the server.
   - **user**: Your MySQL username (default is `root`).
   - **password**: Your MySQL password.
   - **database**: The name of the database you want to connect to.

3. **Use the Connection for Queries**
   Now that the connection is set up, you can use it to perform CRUD operations.

   ```javascript
   const express = require('express');
   const app = express();
   const connection = require('./db');

   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });

   // Example: Get all users from the database
   app.get('/users', (req, res) => {
       const query = 'SELECT * FROM users'; // Replace with your table name
       
       connection.query(query, (err, results) => {
           if (err) {
               res.status(500).send('Error fetching users');
               return;
           }
           res.json(results); // Send the results as JSON response
       });
   });

   // Example: Create a new user
   app.post('/users', express.json(), (req, res) => {
       const { name, age } = req.body;
       const query = 'INSERT INTO users (name, age) VALUES (?, ?)';

       connection.query(query, [name, age], (err, results) => {
           if (err) {
               res.status(500).send('Error creating user');
               return;
           }
           res.status(201).send('User created');
       });
   });

   app.listen(3000, () => {
       console.log('Server is running on port 3000');
   });
   ```

   - In this example, the **GET** endpoint fetches all users from the `users` table.
   - The **POST** endpoint allows you to create a new user by inserting data into the `users` table.


---



## OAuth and OAuth2


#### **OAuth (Open Authorization)**
OAuth is a protocol for authorization. It allows a third-party application to access resources on behalf of a user without the need for the user to share their credentials (like passwords). It is primarily used for token-based authorization, enabling a secure and delegated access mechanism for web applications and services.

##### **OAuth Flow (OAuth 1.0a)**
In OAuth 1.0, the flow involves 3 parties:
1. **Resource Owner (User)**: The person who owns the resource (e.g., a user’s Google account).
2. **Client (Application)**: The application trying to access the user's resource (e.g., a third-party app like a calendar service).
3. **Authorization Server**: The server that authorizes the access on behalf of the user and issues access tokens.

OAuth 1.0 requires both the client and server to share a **consumer key** and **consumer secret** to authenticate requests. The protocol has a bit of complexity due to the need for cryptographic signatures.

#### **OAuth2 (Open Authorization 2)**
OAuth 2.0 is a much simpler and more flexible version of OAuth. It’s the most widely used authorization framework today. OAuth 2.0 provides various flow types to accommodate different use cases, such as web applications, mobile applications, and devices with limited input capabilities.

##### **OAuth2 Flow**
OAuth 2.0 allows different **grant types** (methods for obtaining an access token), which are used to authenticate and authorize the client. These include:

1. **Authorization Code Grant** (for web apps):
   - The user is redirected to the authorization server, where they grant or deny permission.
   - If permission is granted, the server sends an authorization code to the client.
   - The client exchanges this code for an **access token** (and optionally a **refresh token**).
   
2. **Implicit Grant** (for single-page apps):
   - Similar to Authorization Code Grant but no server-side exchange. The access token is directly returned to the client after user authorization.
   
3. **Resource Owner Password Credentials Grant** (less secure, for trusted apps):
   - The user provides their username and password directly to the client app.
   - The client then uses this information to get an access token from the authorization server.
   
4. **Client Credentials Grant** (for server-to-server authentication):
   - The client authenticates directly with the authorization server using its own credentials (client ID and secret) to obtain an access token.
   
5. **Refresh Token Grant**:
   - When an access token expires, a refresh token is used to get a new access token without re-authenticating the user.

##### **Key Components of OAuth2**:
1. **Authorization Server**: Issues access tokens after successfully authenticating the user and receiving their consent.
2. **Resource Server**: Holds the user's data and responds to requests made with access tokens.
3. **Client**: The application requesting access to resources (e.g., a mobile app).
4. **Access Token**: A token that grants access to the user’s resources. It has a limited lifetime.
5. **Refresh Token**: A token used to get a new access token after the old one expires, usually without user interaction.

#### **Key Differences between OAuth and OAuth2**:

| Feature               | **OAuth (1.0a)**                                          | **OAuth 2.0**                                          |
|-----------------------|----------------------------------------------------------|-------------------------------------------------------|
| **Token Type**        | Access token and request token (signed)                  | Access token (Bearer Token)                           |
| **Security**          | Complex (requires cryptographic signatures)              | Simpler, uses bearer tokens (less secure but flexible) |
| **Flow Complexity**   | More complicated due to signature requirements           | More flexible and simpler to implement                |
| **Refresh Tokens**    | Not explicitly supported                                 | Supports refresh tokens                               |
| **Client Types**      | Supports only web applications (consumer key/secret)     | Supports multiple client types (web, mobile, etc.)    |
| **Standardization**   | Lacks proper standardization and flexibility             | Well-defined and standardized by IETF RFC 6749        |



---


## GraphQL (Optional)


**GraphQL** is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. Unlike REST, where the server defines the data to be returned at specific endpoints, GraphQL allows clients to request exactly what data they need.

### **Key Concepts**
1. **Queries**: Fetch data from the server.
2. **Mutations**: Modify data on the server (create, update, delete).
3. **Subscriptions**: Receive real-time updates from the server.
4. **Schema**: Defines types and the relationships between them (like models in a database).
5. **Resolvers**: Functions responsible for returning data for a query.

### **GraphQL vs REST**
- **Over-fetching**: In REST, you may get more data than you need. In GraphQL, you specify exactly what you want.
- **Single Endpoint**: All GraphQL operations are done through a single endpoint (e.g., `/graphql`), unlike REST, which has multiple endpoints.

### **Simple Example**

#### **Schema Definition**
```javascript
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

// Define a User type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return { id: args.id, name: "John Doe", email: "john@example.com" };
      }
    }
  }
});

// Define the schema
const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
```

#### **Server Setup (using Express)**
```javascript
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true  // UI for testing queries
}));

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000/graphql');
});
```

#### **Example Query**
```graphql
query {
  user(id: "1") {
    id
    name
    email
  }
}
```

#### **Result**
```json
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

### **Conclusion**
- **GraphQL** allows clients to query exactly the data they need and provides a more flexible and efficient way to interact with APIs compared to REST.
- The schema-driven approach makes it easier to define, query, and manipulate data.













<!-- ======================================================================== -->




# 2nd InSem 

### FS Module

The `fs` module in Node.js provides an API for interacting with the file system. It allows you to perform operations like reading, writing, deleting, and renaming files or directories, both synchronously and asynchronously.

#### Key Methods in the `fs` Module

1. **Reading Files**
   - `fs.readFile(path, options, callback)`: Asynchronously reads the content of a file.
   - `fs.readFileSync(path, options)`: Synchronously reads the content of a file.

   **Examples**:
   ```javascript
   const fs = require('fs');

   // Asynchronous
   fs.readFile('example.txt', 'utf-8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });

   // Synchronous
   const data = fs.readFileSync('example.txt', 'utf-8');
   console.log(data);
   ```

2. **Writing Files**
   - `fs.writeFile(path, data, options, callback)`: Asynchronously writes data to a file, replacing the file if it exists.
   - `fs.writeFileSync(path, data, options)`: Synchronously writes data to a file.

   **Examples**:
   ```javascript
   // Asynchronous
   fs.writeFile('example.txt', 'Hello, World!', (err) => {
       if (err) throw err;
       console.log('File written successfully.');
   });

   // Synchronous
   fs.writeFileSync('example.txt', 'Hello, World!');
   console.log('File written successfully.');
   ```

3. **Appending to Files**
   - `fs.appendFile(path, data, options, callback)`: Asynchronously appends data to a file.
   - `fs.appendFileSync(path, data, options)`: Synchronously appends data to a file.

   **Examples**:
   ```javascript
   // Asynchronous
   fs.appendFile('example.txt', '\nAppended text.', (err) => {
       if (err) throw err;
       console.log('Text appended successfully.');
   });

   // Synchronous
   fs.appendFileSync('example.txt', '\nAppended text.');
   console.log('Text appended successfully.');
   ```

4. **Checking File/Directory Existence**
   - `fs.existsSync(path)`: Synchronously checks if a file or directory exists.

   **Example**:
   ```javascript
   if (fs.existsSync('example.txt')) {
       console.log('File exists.');
   } else {
       console.log('File does not exist.');
   }
   ```

5. **Renaming Files**
   - `fs.rename(oldPath, newPath, callback)`: Asynchronously renames a file.
   - `fs.renameSync(oldPath, newPath)`: Synchronously renames a file.

   **Examples**:
   ```javascript
   // Asynchronous
   fs.rename('example.txt', 'newName.txt', (err) => {
       if (err) throw err;
       console.log('File renamed successfully.');
   });

   // Synchronous
   fs.renameSync('newName.txt', 'example.txt');
   console.log('File renamed successfully.');
   ```

6. **Deleting Files**
   - `fs.unlink(path, callback)`: Asynchronously deletes a file.
   - `fs.unlinkSync(path)`: Synchronously deletes a file.

   **Examples**:
   ```javascript
   // Asynchronous
   fs.unlink('example.txt', (err) => {
       if (err) throw err;
       console.log('File deleted successfully.');
   });

   // Synchronous
   fs.unlinkSync('example.txt');
   console.log('File deleted successfully.');
   ```

7. **Working with Directories**
   - `fs.mkdir(path, options, callback)`: Creates a new directory.
   - `fs.mkdirSync(path, options)`: Synchronously creates a directory.
   - `fs.rmdir(path, callback)`: Deletes a directory.
   - `fs.rmdirSync(path)`: Synchronously deletes a directory.

   **Examples**:
   ```javascript
   // Create directory
   fs.mkdir('newDir', (err) => {
       if (err) throw err;
       console.log('Directory created successfully.');
   });

   // Remove directory
   fs.rmdir('newDir', (err) => {
       if (err) throw err;
       console.log('Directory removed successfully.');
   });
   ```

8. **Reading Directories**
   - `fs.readdir(path, callback)`: Reads the content of a directory.
   - `fs.readdirSync(path)`: Synchronously reads the content of a directory.

   **Examples**:
   ```javascript
   // Asynchronous
   fs.readdir('.', (err, files) => {
       if (err) throw err;
       console.log('Files in directory:', files);
   });

   // Synchronous
   const files = fs.readdirSync('.');
   console.log('Files in directory:', files);
   ```

9. **Watching Files and Directories**
   - `fs.watchFile(filename, options, listener)`: Watches for changes to a file.
   - `fs.watch(path, options, listener)`: Watches for changes in a directory.

   **Examples**:
   ```javascript
   // Watch a file for changes
   fs.watchFile('example.txt', (curr, prev) => {
       console.log(`File changed from ${prev.size} to ${curr.size}`);
   });

   // Watch a directory
   fs.watch('.', (eventType, filename) => {
       console.log(`Event: ${eventType} on file: ${filename}`);
   });
   ```

10. **File Streams**
    - `fs.createReadStream(path, options)`: Creates a readable stream for a file.
    - `fs.createWriteStream(path, options)`: Creates a writable stream for a file.

    **Examples**:
    ```javascript
    // Read stream
    const readStream = fs.createReadStream('example.txt', 'utf-8');
    readStream.on('data', chunk => console.log(chunk));

    // Write stream
    const writeStream = fs.createWriteStream('output.txt');
    writeStream.write('Streamed content.');
    writeStream.end();
    ```

11. **File Permissions**  
- **Use** : To change file permissions (read, write, execute).
 
- **Example** : Changing file permissions.

```javascript
fs.chmod('example.txt', '755', (err) => {
    if (err) throw err;
    console.log('Permissions changed successfully');
});
```


#### Notes:
- **Sync vs Async**: Prefer asynchronous methods to avoid blocking the event loop. Use synchronous methods only in small scripts or non-critical paths.
- **Error Handling**: Always handle errors to avoid crashes.
   ```javascript
   fs.readFile('missing.txt', 'utf-8', (err, data) => {
       if (err) {
           console.error('File not found:', err.message);
           return;
       }
       console.log(data);
   });
   ```

#### Summary of Key Uses: 
 
- **File Management** : Read, write, append, delete, and rename files. 
- **Directory Management** : Create and delete directories, list directory contents. 
- **Stream Management** : Efficiently read/write large files in chunks. 
- **File Watching** : Monitor file changes for real-time updates. 
- **Error Handling** : Detect and manage errors during file operations.

---

### Socket.io

**Socket.IO** is a library that enables real-time, bidirectional communication between web clients (browsers) and servers. It's primarily used for building chat applications, live notifications, online games, and other real-time apps.

#### Key Features:
1. **Real-Time Communication**: Enables instant message exchange between the client and server.
2. **Bidirectional**: Both client and server can send and receive messages independently.
3. **WebSocket or HTTP Fallback**: Uses WebSockets for modern browsers and falls back to HTTP long polling in older browsers.
4. **Event-Based**: Communication is based on custom events, making it flexible.

#### **Installation**

To install Socket.IO in a Node.js project, run:

```bash
npm install socket.io
```

#### **Types of Socket.IO**

1. **Socket.IO Server**: Runs on the backend (Node.js) and listens for incoming connections.
2. **Socket.IO Client**: Runs on the frontend (browser) and connects to the server.

#### **Socket.IO Basic Workflow**

- **Server**: Listens for incoming connections and emits messages.
- **Client**: Connects to the server, listens for events, and emits messages back to the server.


#### Simple Example: Chat Application

##### 1. **Server Side (Node.js)**

```javascript
// Import socket.io and http modules
const http = require('http');
const socketIo = require('socket.io');

// Create a server
const server = http.createServer((req, res) => {
    res.write('Socket.IO Server');
    res.end();
});

// Initialize Socket.IO on the server
const io = socketIo(server);

// Event listener for new client connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Event listener for receiving messages from the client
    socket.on('message', (msg) => {
        console.log('Message from client:', msg);
        // Emit the message back to all connected clients
        io.emit('message', msg);
    });

    // Event listener for client disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

##### 2. **Client Side (HTML + JavaScript)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Chat</title>
    <script src="/socket.io/socket.io.js"></script> <!-- Include Socket.IO client -->
</head>
<body>
    <h1>Socket.IO Chat</h1>
    <input type="text" id="message" placeholder="Enter message" />
    <button onclick="sendMessage()">Send</button>
    <ul id="messages"></ul>

    <script>
        // Connect to the server
        const socket = io();

        // Listen for incoming messages
        socket.on('message', (msg) => {
            const li = document.createElement('li');
            li.textContent = msg;
            document.getElementById('messages').appendChild(li);
        });

        // Function to send a message
        function sendMessage() {
            const message = document.getElementById('message').value;
            socket.emit('message', message);  // Emit the message to the server
        }
    </script>
</body>
</html>
```

##### Key Socket.IO Methods

1. **`io.on('connection', callback)`**  
   - Triggered when a new client connects to the server.
   - Example:
     ```javascript
     io.on('connection', (socket) => {
         console.log('Client connected');
     });
     ```

2. **`socket.emit(event, data)`**  
   - Emit a message to the client.
   - Example:
     ```javascript
     socket.emit('message', 'Hello, Client!');
     ```

3. **`socket.on(event, callback)`**  
   - Listen for events from the client.
   - Example:
     ```javascript
     socket.on('message', (msg) => {
         console.log('Message from client:', msg);
     });
     ```

4. **`io.emit(event, data)`**  
   - Emit a message to all connected clients.
   - Example:
     ```javascript
     io.emit('message', 'This is a broadcast message');
     ```

5. **`socket.disconnect()`**  
   - Disconnect the client from the server.
   - Example:
     ```javascript
     socket.disconnect();
     ```

##### **Socket.IO Features**

1. **Rooms**:  
   - Rooms allow clients to join groups to receive messages only within their group.
   - Example:
     ```javascript
     socket.join('room1'); // Join room1
     io.to('room1').emit('message', 'Hello Room 1'); // Send message to room1
     ```

2. **Namespaces**:  
   - You can create multiple namespaces for different areas of your application.
   - Example:
     ```javascript
     const chat = io.of('/chat'); // Namespace for chat
     chat.on('connection', (socket) => {
         console.log('User connected to chat namespace');
     });
     ```

3. **Broadcasting**:  
   - Broadcast a message to all connected clients except the sender.
   - Example:
     ```javascript
     socket.broadcast.emit('message', 'This message is for everyone except the sender');
     ```

##### **Socket.IO Error Handling**

- **Handling connection errors**:  
  The `connection` event can also be used to handle errors.
  ```javascript
  io.on('connection', (socket) => {
      socket.on('error', (err) => {
          console.log('Error:', err);
      });
  });
  ```

##### Conclusion

- **Socket.IO** enables real-time communication between client and server.
- It uses **WebSocket** and **HTTP fallback** for compatibility.
- With **events**, you can send and listen for messages between clients and servers.
- It offers **rooms** and **namespaces** to handle groups and specific parts of your app.

This makes Socket.IO a great tool for building interactive, real-time web applications like chat apps, live notifications, or multiplayer games.

---

## Routing

Routing in Node.js is the mechanism of defining the paths in an application that handle HTTP requests. Routing is essential in web applications to define how the application responds to client requests for a particular endpoint.

**Express.js** is one of the most popular web frameworks for Node.js, providing a simple and flexible routing system.

### Types of Routing

1. **Basic Routing**
2. **Route Parameters**
3. **Query Parameters**
4. **Route Handling with HTTP Methods**
5. **Middleware in Routing**
6. **Dynamic Routing**
7. **Nested Routing**
8. **Route Aliases**


### 1. **Basic Routing**

In Express, you define routes using `app.get()`, `app.post()`, `app.put()`, etc. Each route corresponds to a URL pattern and the HTTP method.

#### Example: Simple GET Route

```javascript
const express = require('express');
const app = express();

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

**Explanation**:
- The route `'/'` responds to a GET request and sends a "Hello, World!" message.


### 2. **Route Parameters**

Route parameters are used to capture values from the URL and pass them to the route handler.

#### Example: Route with Parameters

```javascript
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
```

**Explanation**:
- `:id` is a route parameter. In the request URL like `/user/123`, `123` will be captured as `req.params.id`.


### 3. **Query Parameters**

Query parameters are sent in the URL after the `?` symbol and are accessed through `req.query`.

#### Example: Query Parameters

```javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});
```

**Explanation**:
- The route `/search?q=Node.js` captures the query parameter `q` from the URL.


### 4. **Route Handling with HTTP Methods**

Express provides methods for handling different HTTP request types (GET, POST, PUT, DELETE, etc.).

#### Example: Multiple HTTP Methods for a Route

```javascript
// GET method for reading data
app.get('/posts', (req, res) => {
    res.send('Get all posts');
});

// POST method for creating data
app.post('/posts', (req, res) => {
    res.send('Create a new post');
});

// PUT method for updating data
app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Update post with ID: ${postId}`);
});

// DELETE method for deleting data
app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Delete post with ID: ${postId}`);
});
```

**Explanation**:
- Different HTTP methods handle various actions for the same route `/posts`.


### 5. **Middleware in Routing**

Middleware functions are used to handle requests before they reach the route handler. They can be used for logging, authentication, or modifying the request/response.

#### Example: Middleware

```javascript
const logger = (req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next(); // Passes control to the next handler
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

**Explanation**:
- The `logger` middleware logs all incoming requests before they reach the route handler.


### 6. **Dynamic Routing**

Dynamic routes use variables within the route to match different URLs. Express allows for matching complex URL patterns.

#### Example: Dynamic Routes

```javascript
// Dynamic route to handle blog post with slug
app.get('/blog/:slug', (req, res) => {
    const slug = req.params.slug;
    res.send(`This is the blog post with the slug: ${slug}`);
});
```

**Explanation**:
- The route `/blog/:slug` will match any URL like `/blog/how-to-learn-node` and capture the `slug` value.


### 7. **Nested Routing**

You can create nested routes by creating routes inside other routes, often for modularity.

#### Example: Nested Routes

```javascript
const userRouter = express.Router();

// Define a subroute
userRouter.get('/profile', (req, res) => {
    res.send('User Profile');
});

// Mount the router to the main app
app.use('/user', userRouter);
```

**Explanation**:
- The `userRouter` is nested under the `/user` route, so the full route is `/user/profile`.


### 8. **Route Aliases**

You can create aliases for routes, where one route can redirect to another.

#### Example: Route Aliases (Redirect)

```javascript
app.get('/home', (req, res) => {
    res.redirect('/');
});
```

**Explanation**:
- A request to `/home` will redirect to the root path `'/'`.


### 9. **Chained Route Handlers**

Express allows you to chain multiple route handlers for the same route. This is helpful for modularizing complex routes.

#### Example: Chained Route Handlers

```javascript
app.route('/users')
    .get((req, res) => {
        res.send('Get all users');
    })
    .post((req, res) => {
        res.send('Create a user');
    });
```

**Explanation**:
- The `app.route()` method allows you to define multiple handlers for different HTTP methods on the same route (`/users`).


### Conclusion

Routing in Express.js allows you to manage URL patterns and HTTP methods to create dynamic web applications. The key components of routing include:

- **Route Parameters**: Dynamic variables in the URL.
- **Query Parameters**: URL parameters that come after `?`.
- **Middleware**: Functions that process requests before the route handler.
- **Route Handlers**: Functions that handle HTTP requests.

With Express's powerful routing capabilities, you can create flexible and scalable backends for your web applications.


---

## Query Parameters

**Query parameters** are used to send additional data in the URL of an HTTP request. They are typically used in `GET` requests to filter, sort, or customize the data that the server returns.

A query parameter comes after the `?` symbol in a URL and consists of key-value pairs separated by an `&`.

**Example URL with query parameters**:  
```
https://www.example.com/search?q=nodejs&sort=desc&page=2
```

Here, `q`, `sort`, and `page` are the **query parameters** with their respective values.

### Characteristics of Query Parameters

1. **Key-Value Pairs**: Query parameters consist of keys and values separated by an `=` symbol. The key is a name or label (e.g., `q`), and the value is the corresponding value for that key (e.g., `nodejs`).   
2. **Separation by `&`**: Multiple query parameters are separated by an `&` symbol. For example, in `q=nodejs&sort=desc`, there are two parameters: `q=nodejs` and `sort=desc`.
3. **Optional**: Query parameters are optional and depend on the requirements of the server or application.
4. **Encoded**: Special characters (e.g., spaces, &, ?, etc.) are encoded in URLs, ensuring valid query strings. For example, a space is encoded as `%20`.


### How Query Parameters are Used

Query parameters are typically used in situations where:
- **Filtering** data (e.g., products, users).
- **Sorting** results (e.g., ascending or descending order).
- **Pagination** (e.g., displaying results on multiple pages).

### Query Parameters in Express.js

In **Express.js**, you can access query parameters through `req.query`. This object contains all the key-value pairs sent in the query string.

#### Example 1: Accessing Query Parameters

```javascript
const express = require('express');
const app = express();

// Simple route to demonstrate query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;  // 'q' is the query parameter
    const sort = req.query.sort;  // 'sort' is another query parameter
    const page = req.query.page;  // 'page' is for pagination

    res.send(`Search term: ${query}, Sort: ${sort}, Page: ${page}`);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

**Accessing query parameters**:
- `req.query.q` will return the value of the `q` parameter.
- `req.query.sort` will return the value of the `sort` parameter.
- `req.query.page` will return the value of the `page` parameter.


### Example: Query Parameters in a Search Function

```javascript
app.get('/search', (req, res) => {
    // Get query parameters from the URL
    const query = req.query.q || ''; // Default to empty string if no query
    const sort = req.query.sort || 'asc'; // Default sort order
    const page = req.query.page || 1; // Default to page 1

    // Return the data based on the query parameters
    res.send(`Search term: ${query}, Sort order: ${sort}, Page: ${page}`);
});
```

**Example URL**:  
```
GET /search?q=nodejs&sort=desc&page=2
```

The response would be:  
```
Search term: nodejs, Sort order: desc, Page: 2
```


### Handling Missing or Invalid Query Parameters

You can handle cases where query parameters might be missing or invalid by setting default values or performing validation.

#### Example: Setting Defaults

```javascript
app.get('/search', (req, res) => {
    const query = req.query.q || 'default';  // Default search term if not provided
    const page = req.query.page ? parseInt(req.query.page) : 1;  // Default to page 1

    res.send(`Search term: ${query}, Page: ${page}`);
});
```

#### Example: Validating Query Parameters

```javascript
app.get('/items', (req, res) => {
    const page = parseInt(req.query.page);
    if (isNaN(page) || page < 1) {
        return res.status(400).send('Invalid page number');
    }

    res.send(`Displaying items on page: ${page}`);
});
```

**Response for invalid query**:
```
400 Bad Request: Invalid page number
```

### Encoding and Decoding Query Parameters

Query parameters in URLs need to be encoded properly, especially when they contain special characters such as spaces, commas, or other non-alphanumeric characters. In JavaScript, the `encodeURIComponent()` and `decodeURIComponent()` functions can be used for this.

#### Example: Encoding Query Parameters

```javascript
const searchTerm = 'Node.js & Express';
const encodedTerm = encodeURIComponent(searchTerm);
console.log(encodedTerm);  // Outputs: 'Node.js%20%26%20Express'

const url = `https://www.example.com/search?q=${encodedTerm}`;
console.log(url);  // Outputs: 'https://www.example.com/search?q=Node.js%20%26%20Express'
```

#### Example: Decoding Query Parameters

```javascript
const encodedTerm = 'Node.js%20%26%20Express';
const decodedTerm = decodeURIComponent(encodedTerm);
console.log(decodedTerm);  // Outputs: 'Node.js & Express'
```

### Use Cases for Query Parameters

1. **Search and Filtering**: 
   - Used to pass search terms or filter criteria for a specific resource.
   - Example: `/search?q=nodejs&sort=asc`

2. **Pagination**:
   - To specify which page of results to retrieve.
   - Example: `/products?page=2&limit=20`

3. **Sorting**:
   - Sort the results in ascending or descending order.
   - Example: `/products?sort=price&order=asc`

4. **User Preferences**:
   - To pass custom preferences such as language or theme.
   - Example: `/preferences?theme=dark&lang=en`


### Best Practices for Query Parameters

1. **Keep it Simple**: Use clear and intuitive names for query parameters.
   - Good: `/search?q=nodejs&sort=asc`
   - Bad: `/search?x=js&y=sort`

2. **Use Default Values**: Always set default values for optional query parameters to avoid errors if they are missing.   
3. **Limit the Length**: Avoid excessively long query strings, as they can impact performance and readability.
4. **URL Encoding**: Ensure query parameters are encoded to handle special characters safely.
5. **Validation**: Always validate query parameters to prevent security issues and ensure correct behavior.


### Conclusion

Query parameters are an essential part of web development, especially for filtering, sorting, and paginating data. In **Express.js**, they are easily accessed using `req.query`. By following best practices, such as providing default values and validating inputs, you can ensure your application works efficiently and securely.


## CRUD functionality

**CRUD** stands for **Create, Read, Update, and Delete**, which represent the basic operations for managing data in an application, particularly for interacting with databases or APIs. These four operations allow users to perform basic data management tasks.

### 1. **Create**: Adding New Data
- This operation allows adding new records to the database or system.
- Commonly uses the HTTP `POST` method in web applications.
  
#### Example in Express.js:
```javascript
// Create a new user
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { id: Date.now(), name, age };  // Simulated DB insert
    users.push(newUser);  // Add user to the users array
    res.status(201).json(newUser);  // Return created user with 201 status
});
```

### 2. **Read**: Retrieving Data
- This operation retrieves data from the database, often based on queries (e.g., filtering, sorting).
- It uses the HTTP `GET` method in web applications.

#### Example in Express.js:
```javascript
// Read all users
app.get('/users', (req, res) => {
    res.json(users);  // Return all users
});

// Read a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);  // Return the user
});
```

### 3. **Update**: Modifying Existing Data
- This operation modifies an existing record in the database.
- Typically, it uses the HTTP `PUT` or `PATCH` methods.
  - `PUT` is used to replace the entire resource.
  - `PATCH` is used to update only specific fields.

#### Example in Express.js:
```javascript
// Update a user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    const { name, age } = req.body;
    user.name = name || user.name;
    user.age = age || user.age;
    res.json(user);  // Return the updated user
});

// Partial update using PATCH
app.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    if (req.body.name) user.name = req.body.name;
    if (req.body.age) user.age = req.body.age;
    res.json(user);  // Return the partially updated user
});
```


### 4. **Delete**: Removing Data
- This operation removes a record from the database.
- It uses the HTTP `DELETE` method in web applications.

#### Example in Express.js:
```javascript
// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);  // Remove the user from the array
    res.status(204).send();  // Return 204 No Content status
});
```


### CRUD with a Database (Example: MongoDB)

When working with a database like **MongoDB**, the operations are performed through a model. Here's how CRUD operations are structured using **Mongoose**, an ODM (Object Document Mapper) for MongoDB.

#### 1. **Create** (Add a Document)

```javascript
const User = require('./models/user');

// Creating a new user
const newUser = new User({
    name: 'John Doe',
    age: 30
});
newUser.save()
    .then(user => console.log(user))
    .catch(err => console.error(err));
```

#### 2. **Read** (Find Documents)

```javascript
// Read all users
User.find()
    .then(users => console.log(users))
    .catch(err => console.error(err));

// Read a single user by ID
User.findById('userId')
    .then(user => console.log(user))
    .catch(err => console.error(err));
```

#### 3. **Update** (Modify Documents)

```javascript
// Update user by ID
User.findByIdAndUpdate('userId', { name: 'Jane Doe' }, { new: true })
    .then(user => console.log(user))
    .catch(err => console.error(err));
```

#### 4. **Delete** (Remove Documents)

```javascript
// Delete user by ID
User.findByIdAndDelete('userId')
    .then(() => console.log('User deleted'))
    .catch(err => console.error(err));
```

### Full Example: CRUD Operations in Express.js with an In-Memory Database

Let's create a simple in-memory database for user management with CRUD operations:

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];

// CREATE
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { id: Date.now(), name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ all
app.get('/users', (req, res) => {
    res.json(users);
});

// READ single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// UPDATE
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    const { name, age } = req.body;
    user.name = name || user.name;
    user.age = age || user.age;
    res.json(user);
});

// DELETE
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### HTTP Methods Mapping to CRUD Operations:

| Operation | HTTP Method | Endpoint   | Description                                       |
|-----------|-------------|------------|---------------------------------------------------|
| Create    | POST        | `/users`   | Add a new user                                   |
| Read      | GET         | `/users`   | Get all users                                    |
| Read      | GET         | `/users/:id` | Get a specific user by ID                        |
| Update    | PUT         | `/users/:id` | Update an existing user by ID                    |
| Delete    | DELETE      | `/users/:id` | Delete a user by ID                              |


### Conclusion

The **CRUD** functionality is a critical part of any application that needs to manage persistent data. It includes operations for creating, reading, updating, and deleting resources. In web development, these operations are typically tied to HTTP methods (`POST`, `GET`, `PUT`, `DELETE`). Using frameworks like **Express.js** or **Mongoose** makes it easy to implement these operations in web applications and APIs.

---

## Code From GitHub

`7-params-query.js`

```javascript
const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
```

`Explanation`:

### 1. **Setup and Initialization**:
- **Express**: The code uses the **Express.js** framework to create a web server.
- `app` is the Express application that handles HTTP requests.
- `products` is imported from a **data** file (likely an array or object) and contains product information.

### 2. **Routes**:
- **`/` (Home Page)**:
  - Displays a simple HTML home page with a link to `/api/products`.

- **`/api/products` (Get All Products)**:
  - Maps over the `products` array and returns only the `id`, `name`, and `image` for each product.
  - Sends a JSON response with the processed product data.

- **`/api/products/:productID` (Get Single Product by ID)**:
  - Extracts the `productID` from the URL parameters (`req.params`).
  - Searches for a product with the corresponding ID.
  - If the product is found, it returns the product; otherwise, it returns a 404 error with the message "Product Does Not Exist".

- **`/api/products/:productID/reviews/:reviewID`**:
  - Placeholder route that logs the `productID` and `reviewID` from the URL params but doesn’t do anything further.

- **`/api/v1/query` (Search and Limit Products)**:
  - Accepts **query parameters** like `search` and `limit`.
  - Filters the products list based on the `search` query, which matches product names that start with the `search` value.
  - Limits the number of products returned based on the `limit` query.
  - Returns the filtered products in a JSON response, or an empty array if no products match.

### 3. **Server Listening**:
- **`app.listen(5000)`** starts the Express server and listens for requests on port 5000.

### Summary:
This Express app handles basic **CRUD-like operations** for products:
- Lists products (`/api/products`).
- Fetches a specific product by ID (`/api/products/:productID`).
- Supports searching and limiting product results (`/api/v1/query`).
- Has placeholders for more detailed operations like reviews.

The server listens on **port 5000** and responds to HTTP requests made to the defined routes.

---

`12-router-app.js`

```javascript
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
```

`Explanation`

### 1. **Setup and Initialization**:
- The code uses **Express.js** to create a web server.
- `app` is the Express application instance.

### 2. **Middleware**:
- **`express.static('./methods-public')`**:
  - Serves static files from the `methods-public` folder (e.g., images, HTML, CSS, JS).
  - Any request to a static file will be served directly from this folder.

- **`express.urlencoded({ extended: false })`**:
  - Parses incoming **URL-encoded** data (from form submissions).
  - The `extended: false` option means the data will be parsed using the querystring library.

- **`express.json()`**:
  - Parses incoming **JSON** data in the request body, making it accessible in `req.body`.

### 3. **Routes**:
- **`/api/people`**:
  - This route is handled by a separate module located at `./routes/people`.
  - This likely contains the logic for dealing with people-related API requests.

- **`/login`**:
  - This route is handled by another module at `./routes/auth`.
  - This likely contains the logic for handling authentication-related API requests.

### 4. **Server Listening**:
- **`app.listen(5000)`** starts the server and listens for HTTP requests on **port 5000**.

### Summary:
- The app sets up static file serving, data parsing middleware, and routes for handling API requests related to people and authentication. It listens for requests on **port 5000**.

---

`13-router-people.js`

```javascript
const express = require('express')
const router = express.Router()

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
```

This code defines an **Express router** for handling requests related to people, using various HTTP methods and routes. Here's a short breakdown:

### 1. **Router Setup**:
- **`express.Router()`**: Creates a new router instance to define multiple routes for handling HTTP requests.

### 2. **Controller Functions**:
- The router imports controller functions (`getPeople`, `createPerson`, `createPersonPostman`, `updatePerson`, `deletePerson`) from the `../controllers/people` module. These functions will handle the logic for the respective routes.

### 3. **Defining Routes**:
- **`router.route('/')`**:
  - **`GET /`**: Maps to `getPeople` to retrieve all people.
  - **`POST /`**: Maps to `createPerson` to create a new person.

- **`router.route('/postman')`**:
  - **`POST /postman`**: Maps to `createPersonPostman` (likely a function for testing or sending data through Postman).

- **`router.route('/:id')`**:
  - **`PUT /:id`**: Maps to `updatePerson` to update a specific person identified by `id`.
  - **`DELETE /:id`**: Maps to `deletePerson` to delete a specific person identified by `id`.

### 4. **Exporting Router**:
- The `router` is exported so it can be used in the main Express application (`app.use('/api/people', peopleRouter)`).

### Summary:
This code defines routes for managing "people" using CRUD operations (GET, POST, PUT, DELETE) and exports the router to be used in the main app. The routes correspond to various controller functions to handle the business logic for each operation.

---

`14-router-auth.js`

```javascript
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

module.exports = router
```

This code defines a simple **POST** route using an **Express router** for handling login or authentication requests. Here's a short explanation:

### 1. **Route Definition**:
- The router listens for **POST** requests to the root route (`/`).

### 2. **Request Handling**:
- **`req.body`** is used to access the data sent in the request's body, specifically extracting the `name` property.
- If the `name` is provided in the request body:
  - It responds with a **200 OK** status and a welcome message (`Welcome ${name}`).
- If the `name` is missing:
  - It responds with a **401 Unauthorized** status and a message asking to provide credentials (`Please Provide Credentials`).

### 3. **Exporting Router**:
- The router is exported so it can be used in the main application (likely mounted at `/login`).

### Summary:
This code handles a login-like scenario where it checks if a `name` is provided in the request body. If so, it sends a success message; otherwise, it asks for credentials.

---

`2-http-app.js`

```javascript
const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
```

This code creates a basic **HTTP server** using Node.js's built-in `http` and `fs` modules. Here's a breakdown:

### 1. **File Imports**:
- The code reads files (HTML, CSS, SVG, and JavaScript) from the `navbar-app` directory using **`readFileSync`** from the `fs` module.
  - `homePage` contains the HTML file (`index.html`).
  - `homeStyles` contains the CSS file (`styles.css`).
  - `homeImage` contains the SVG image (`logo.svg`).
  - `homeLogic` contains the JavaScript file (`browser-app.js`).

### 2. **Creating the Server**:
- **`http.createServer()`**: Creates an HTTP server that listens for incoming requests.
- For each request, it checks the **URL** (`req.url`) and serves the appropriate response based on the URL.

### 3. **Route Handling**:
- **Root URL (`/`)**: Serves the home page HTML (`index.html`).
- **About Page (`/about`)**: Serves a simple text response (`<h1>about page</h1>`).
- **CSS (`/styles.css`)**: Serves the `styles.css` file with the correct content type.
- **Logo Image (`/logo.svg`)**: Serves the `logo.svg` image with the correct content type.
- **JavaScript (`/browser-app.js`)**: Serves the `browser-app.js` JavaScript file with the correct content type.

### 4. **404 Handling**:
- If the URL doesn't match any of the above routes, it responds with a **404 Not Found** page (`<h1>page not found</h1>`).

### 5. **Server Listening**:
- The server listens on **port 5000** for incoming requests.

### Summary:
This code sets up a simple HTTP server that serves various static files (HTML, CSS, image, JavaScript) depending on the request URL. If the URL doesn't match any predefined routes, it returns a 404 error.


---


## Assignment 3rd

`Section A`

### Q1: What is Socket.io used for in web applications?
**Answer**:  
Socket.io is a JavaScript library used to enable **real-time, bi-directional communication** between web clients and servers. It supports features like event-based communication and works over WebSocket or falls back to HTTP long-polling when WebSocket is unavailable.

**Example**:  
Used in chat applications, collaborative tools, or live notifications.

---

### Q2: What are the key features of Socket.io?
**Answer**:  
1. **Real-Time Communication**: Bi-directional communication between client and server.  
2. **Automatic Fallbacks**: Falls back to HTTP long-polling if WebSocket is not supported.  
3. **Event-Based Model**: Allows emitting and listening to custom events.  
4. **Room/Namespace Support**: Organize connections into groups or specific channels.  
5. **Cross-Browser Support**: Works across various browsers.

---

### Q3: What is real-time communication?  
**Answer**:  
Real-time communication is the **instant exchange of data** between devices without noticeable delay.  
It is used in applications like live chats, multiplayer games, and real-time analytics.

**Example**:  
In a chat app, when one user sends a message, others instantly receive it.

---

### Q4: How do you install Socket.io in a Node.js project?  
**Answer**:  
Run the following commands:  
1. Install the server-side library:
   ```bash
   npm install socket.io
   ```
2. Install the client-side library (optional):
   ```bash
   npm install socket.io-client
   ```

---

### Q5: What events are commonly used in a Socket.io chat app?  
**Answer**:  
1. **Connection Events**:  
   - `connection`: When a client connects to the server.  
   - `disconnect`: When a client disconnects.  
   
2. **Message Events**:  
   - `message`: Sending or receiving a message.  

3. **Custom Events**:  
   - `joinRoom`: When a user joins a specific chat room.  
   - `typing`: Indicating when a user is typing.  

**Example**:  
```javascript
io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
```
---

`Section B`


### Q1: How does Socket.io ensure compatibility with older browsers?

**Answer**:  
Socket.io ensures compatibility with older browsers by using **transport fallbacks**. If a browser does not support WebSockets, Socket.io automatically falls back to alternative communication methods, such as **HTTP long-polling**. This approach enables it to establish and maintain a real-time connection in environments where WebSockets are unavailable.

**Key Features for Compatibility**:  
1. **Automatic Detection**: Detects browser capabilities and selects the best available transport protocol.  
2. **Fallback Mechanism**: Switches to methods like long-polling when WebSockets fail.  
3. **Cross-Browser Support**: Works seamlessly on both modern and legacy browsers.

---

### Q2: How do WebSockets differ from traditional HTTP requests?

**Answer**:  
| **Feature**            | **WebSockets**                                      | **Traditional HTTP Requests**                  |
|-------------------------|----------------------------------------------------|------------------------------------------------|
| **Communication Type**  | Full-duplex (bi-directional).                      | Half-duplex (client requests, server responds). |
| **Connection Persistence** | Persistent connection established once.           | New connection created for each request.       |
| **Data Format**         | Lightweight, often JSON or binary.                 | HTTP headers and body, more verbose.           |
| **Use Case**            | Real-time apps like chats and games.               | Static content retrieval or APIs.              |
| **Latency**             | Low latency as no repeated handshake is required.  | Higher latency due to repeated handshakes.     |

**Example**:  
- WebSocket: A chat app where messages are exchanged in real-time.  
- HTTP: Fetching a webpage or making a REST API call.

---

### Q3: How do you handle errors in promises using `try/catch`?

**Answer**:  
To handle errors in promises using `try/catch`, you need to use `async/await`. The `try` block contains the promise code, while the `catch` block handles errors thrown by the promise.

**Syntax**:  
```javascript
async function handlePromise() {
    try {
        const result = await someAsyncOperation();
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
```

**Example**:  
```javascript
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData();
```

**Explanation**:  
1. The `try` block attempts to execute the promise.  
2. If an error occurs, it’s caught by the `catch` block, ensuring the application doesn't crash.  
3. Proper error handling provides clear feedback and debugging information.

---

`Section C`

### Q1: How does Socket.io handle client connections? What is a "room" in Socket.io, and how is it used?

**Answer**:  
**Handling Client Connections**:  
1. **Event-Based Connection**:  
   - When a client connects, Socket.io triggers a `connection` event on the server.  
   - Each client is assigned a unique **socket ID**, which can be used to track and manage them.

2. **Example**:  
   ```javascript
   const io = require('socket.io')(3000);
   io.on('connection', (socket) => {
       console.log('A user connected:', socket.id);
       socket.on('disconnect', () => {
           console.log('A user disconnected:', socket.id);
       });
   });
   ```

**What is a "Room" in Socket.io?**  
A "room" is a **logical grouping of sockets** that allows the server to send messages to specific subsets of clients. Rooms are identified by a string name, and clients can join or leave rooms dynamically.

**How is it Used?**  
1. **Joining a Room**:  
   ```javascript
   socket.join('room1');
   ```
2. **Leaving a Room**:  
   ```javascript
   socket.leave('room1');
   ```
3. **Broadcasting to a Room**:  
   ```javascript
   io.to('room1').emit('message', 'Hello, Room 1!');
   ```

**Use Case**:  
In a chat app, rooms can represent individual chat groups, ensuring messages are only sent to members of a specific group.

---

### Q2: How does `console.log` compare to structured logging tools like Winston? What is the advantage of using Node.js's built-in `debug` module?

**Answer**:  
**Comparison Between `console.log` and Winston**:  

| Feature                | `console.log`                              | Winston                                     |
|------------------------|--------------------------------------------|--------------------------------------------|
| **Purpose**            | Basic debugging and logging.              | Structured, customizable, and advanced logging. |
| **Log Levels**         | No built-in levels (manual filtering).     | Built-in levels (e.g., `info`, `error`, `warn`). |
| **Log Formatting**     | Plain text.                               | Supports JSON, timestamps, and colors.     |
| **File Logging**       | Requires manual setup (e.g., `fs`).        | Supports file logging out of the box.      |
| **Performance**        | Slower for large-scale logging.            | Optimized for production logging.          |

**Advantages of Using the `debug` Module**:  
1. **Selective Debugging**: Enables and disables logs based on namespaces.  
2. **Performance**: Logs are skipped entirely when the corresponding namespace is disabled.  
3. **Simple Usage**: Easy to integrate into Node.js projects.  

**Example Using `debug`**:  
```javascript
const debug = require('debug')('app');
debug('This is a debug message!');
```

**Use Case**:  
- Use `console.log` for quick debugging during development.  
- Use `Winston` or `debug` for structured logging in production environments.

---

### Q3: How can you broadcast a message to all connected clients? How do you handle user disconnection in a chat app?

**Answer**:  
**Broadcasting a Message**:  
To broadcast a message to all connected clients, use the `broadcast` feature of Socket.io.

**Code Example**:  
```javascript
io.on('connection', (socket) => {
    // Broadcast a message to all other clients
    socket.broadcast.emit('message', 'A new user has joined the chat!');
});
```

**Use Case**:  
In a chat app, you might notify all users when someone joins or leaves.

---

**Handling User Disconnection**:  
When a client disconnects, the server triggers a `disconnect` event. You can use this to clean up resources or notify other users.

**Code Example**:  
```javascript
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        io.emit('message', 'A user has left the chat.');
    });
});
```

**Use Case**:  
In a chat app, you might notify the chat room when a user leaves or update the user list.

---

### Assignment 4th

`Section A`

### Q1: What is microservices architecture, and how does it differ from monolithic architecture?  
**Answer**:  
- **Microservices Architecture**: A design approach where an application is built as a collection of small, loosely coupled, independently deployable services. Each service handles a specific function and communicates via APIs.  
- **Monolithic Architecture**: A single, tightly integrated application where all components are bundled together and run as a single unit.

**Key Differences**:  
1. **Deployment**: Microservices allow independent deployment, while monoliths require the entire application to be redeployed.  
2. **Scalability**: Microservices enable scaling specific components, whereas monoliths require scaling the whole application.  
3. **Fault Tolerance**: A failure in one microservice doesn’t crash the whole system, unlike in monoliths.  

---

### Q2: What are the key benefits and challenges of microservices architecture?  

**Benefits**:  
1. **Scalability**: Scale individual components independently.  
2. **Flexibility**: Use different technologies for different services.  
3. **Fault Isolation**: Isolated failures prevent system-wide crashes.  
4. **Faster Development**: Teams work on different services simultaneously.  

**Challenges**:  
1. **Complexity**: Requires managing multiple services, APIs, and deployments.  
2. **Monitoring and Debugging**: More difficult due to distributed nature.  
3. **Data Management**: Synchronizing data across services can be challenging.  
4. **Network Overhead**: Communication between services adds latency.

---

### Q3: How does Node.js fit into the microservices architecture paradigm?  

**Answer**:  
Node.js is well-suited for microservices because:  
1. **Asynchronous I/O**: Handles multiple concurrent requests efficiently.  
2. **Lightweight**: Fast startup and low resource usage.  
3. **Rich Ecosystem**: Tools like `Express`, `Koa`, and `Socket.io` simplify microservice development.  
4. **Scalability**: Ideal for small, independent services requiring rapid response times.

**Example**:  
Node.js can be used to create REST APIs for microservices or as a gateway to manage requests to various services.

---

### Q4: How can you structure a Node.js microservice project effectively?  

**Answer**:  
A common structure:  
1. **Directories**:  
   - `src/`: Contains the main service code.  
     - `controllers/`: Request handling logic.  
     - `routes/`: API routes.  
     - `services/`: Business logic.  
     - `models/`: Database models.  
   - `config/`: Environment configurations.  
   - `test/`: Unit and integration tests.  

2. **Code Example**:  
   ```plaintext
   ├── src/
   │   ├── controllers/
   │   ├── routes/
   │   ├── services/
   │   ├── models/
   ├── config/
   ├── test/
   ├── package.json
   └── server.js
   ```

3. **Best Practices**:  
   - Use `.env` for environment variables.  
   - Include logging and monitoring (e.g., `Winston`, `Morgan`).  
   - Write modular and reusable code.

---

### Q5: What is containerization, and how does it benefit microservices architecture?  

**Answer**:  
- **Containerization**: Packaging an application and its dependencies into a lightweight, portable container that can run consistently across environments. Docker is a common tool for this purpose.

**Benefits**:  
1. **Isolation**: Each microservice runs in its own container without dependency conflicts.  
2. **Portability**: Containers work consistently across development, testing, and production environments.  
3. **Scalability**: Spin up multiple instances of a service as needed.  
4. **Faster Deployment**: Containers are lightweight and start quickly.  

**Example**:  
- A Node.js microservice can be containerized using a `Dockerfile`:
   ```dockerfile
   FROM node:16
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   CMD ["node", "server.js"]
   ```

`Section B`

### Q1: What are the key factors to consider when choosing a framework for a microservices project?

**Answer**:  
When choosing a framework for microservices, consider the following factors:  

1. **Scalability**: The framework should support horizontal scaling to handle increased loads.  
   - Example: **Express.js** is lightweight and works well with other scaling tools like Kubernetes.

2. **Asynchronous Support**: Should efficiently handle concurrent I/O and asynchronous tasks.  
   - Example: **Node.js** frameworks like Fastify are designed for non-blocking I/O.

3. **Performance**: The framework should offer low latency and high throughput.  
   - Example: **Koa.js** has a smaller footprint and better performance compared to Express.

4. **Modularity**: Allows breaking the project into small, manageable modules.  
   - Example: **NestJS** promotes modular development.

5. **Ease of Integration**: Should work seamlessly with databases, message queues, and monitoring tools.  
   - Example: **Hapi.js** offers rich plugin support.

6. **Community Support and Documentation**: A well-documented framework with an active community is easier to work with.  
   - Example: **Express.js** is widely used and documented.

7. **Security Features**: Should support authentication, rate-limiting, and protection against common attacks.  
   - Example: **NestJS** has built-in support for secure authentication mechanisms.  

---

### Q2: How do you handle asynchronous operations and I/O in Node.js microservices?  

**Answer**:  
Node.js supports asynchronous operations via **callbacks**, **promises**, and **async/await** to handle I/O efficiently.  

1. **Promises**:  
   Simplifies handling of asynchronous code and error management.  
   ```javascript
   fetchData()
       .then(data => process(data))
       .catch(err => console.error(err));
   ```

2. **Async/Await**:  
   Provides cleaner syntax for promises and better error handling.  
   ```javascript
   async function handleRequest() {
       try {
           const data = await fetchData();
           console.log(data);
       } catch (err) {
           console.error(err);
       }
   }
   ```

3. **Streams**:  
   Handle large data transfers efficiently by processing chunks of data.  
   ```javascript
   const fs = require('fs');
   const readStream = fs.createReadStream('file.txt');
   readStream.on('data', chunk => console.log(chunk));
   ```

4. **Event-Driven Architecture**:  
   Use `EventEmitter` or libraries like **RxJS** to handle asynchronous events.  
   ```javascript
   const EventEmitter = require('events');
   const emitter = new EventEmitter();
   emitter.on('event', data => console.log(data));
   emitter.emit('event', 'Hello, world!');
   ```

5. **Best Practices**:  
   - Use **message queues** (e.g., RabbitMQ, Kafka) for decoupled communication between microservices.  
   - Apply **circuit breakers** to handle failures gracefully.  

---

### Q3: How can you containerize a Node.js microservice using Docker?  

**Answer**:  
To containerize a Node.js microservice, follow these steps:

1. **Create a `Dockerfile`**:  
   Define the container's setup and dependencies.  

   **Example**:  
   ```dockerfile
   # Use Node.js base image
   FROM node:16
   
   # Set the working directory
   WORKDIR /app
   
   # Copy package files and install dependencies
   COPY package*.json ./
   RUN npm install
   
   # Copy source code
   COPY . .
   
   # Expose the service port
   EXPOSE 3000
   
   # Command to run the service
   CMD ["node", "server.js"]
   ```

2. **Build the Docker Image**:  
   ```bash
   docker build -t my-node-microservice .
   ```

3. **Run the Container**:  
   ```bash
   docker run -d -p 3000:3000 my-node-microservice
   ```

4. **Verify the Container**:  
   - Check running containers:  
     ```bash
     docker ps
     ```
   - Test the service in the browser or via `curl`:  
     ```bash
     curl http://localhost:3000
     ```

5. **Best Practices**:  
   - Use **multi-stage builds** to minimize image size.  
   - Include a `.dockerignore` file to exclude unnecessary files.  
   ```plaintext
   node_modules
   *.log
   .env
   ```

**Benefits**:  
- Consistent environments across development and production.  
- Simplified deployment.  
- Easy scalability and portability.

`Section C`

### Q1: Compare and contrast popular Node.js frameworks for microservices (Express, Hapi, Fastify)

| **Feature**           | **Express**                              | **Hapi**                                | **Fastify**                              |
|------------------------|------------------------------------------|-----------------------------------------|------------------------------------------|
| **Performance**        | Moderate, general-purpose               | Slower due to built-in validation       | Very fast, optimized for performance     |
| **Flexibility**        | Highly flexible, minimalistic           | Opinionated with rich plugin support    | Flexible but optimized for speed         |
| **Built-in Features**  | Requires third-party middleware         | Comprehensive built-in features         | Minimal, relies on plugins for features  |
| **Ecosystem**          | Mature, widely used, extensive plugins  | Moderate with decent community support  | Growing community, modern tooling        |
| **Validation**         | Relies on middleware like `Joi`         | Built-in request validation with `Joi`  | Plugin-based validation support          |
| **Use Case**           | Best for simple APIs or when flexibility is required | Ideal for enterprise-level applications | Best for performance-critical applications|

**Example**:  
- Use **Express** for lightweight REST APIs.  
- Use **Hapi** for complex projects with extensive requirements.  
- Use **Fastify** for projects needing high throughput.

---

### Q2: Why is error monitoring and logging crucial for microservices? What are the best practices for logging in Node.js applications?

**Importance**:  
1. **Error Monitoring**:  
   - Identifies and fixes issues promptly, ensuring high availability.  
   - Tracks error trends and root causes in distributed systems.  

2. **Logging**:  
   - Provides insights into application behavior.  
   - Helps debug and troubleshoot effectively.  
   - Ensures compliance with audit requirements.  

**Best Practices for Logging in Node.js**:  
1. **Use a Logging Library**:  
   - Example: `Winston`, `Bunyan`, or `Pino` for structured logging.  
   ```javascript
   const winston = require('winston');
   const logger = winston.createLogger({
       level: 'info',
       format: winston.format.json(),
       transports: [new winston.transports.Console()],
   });
   logger.info('App started successfully!');
   ```

2. **Log Levels**:  
   - Use levels like `info`, `debug`, `warn`, and `error` for clarity.  

3. **Centralized Logging**:  
   - Use tools like **ELK Stack**, **Datadog**, or **AWS CloudWatch** for aggregating logs.  

4. **Avoid Sensitive Data**:  
   - Mask sensitive information (e.g., API keys, passwords) in logs.  

5. **Correlation IDs**:  
   - Track requests across microservices using unique identifiers.  

6. **Error Handling**:  
   - Log errors with detailed stack traces.  

---

### Q3: How can you ensure security and scalability in a microservices architecture? Discuss real-world case studies of successful microservices implementations using Node.js.

**Security in Microservices**:  
1. **Authentication and Authorization**:  
   - Use **OAuth2**, **JWT**, or API gateways for secure authentication.  
2. **Service Communication**:  
   - Use **TLS/SSL** for encrypted communication.  
   - Employ **service mesh** tools like Istio for managing service-to-service communication securely.  
3. **Rate Limiting**:  
   - Prevent abuse with rate-limiting tools like `express-rate-limit`.  
4. **Regular Updates**:  
   - Keep dependencies and libraries up to date.  

**Scalability in Microservices**:  
1. **Horizontal Scaling**:  
   - Add instances of services based on traffic.  
2. **Containerization**:  
   - Use Docker and Kubernetes for deployment and scaling.  
3. **Load Balancing**:  
   - Distribute traffic efficiently using tools like NGINX or AWS ELB.  

**Case Studies**:  
1. **Netflix**:  
   - **Problem**: Scalability and resilience for video streaming.  
   - **Solution**: Migrated to microservices, each handling a specific feature like recommendations or billing.  
   - **Result**: Improved scalability and faster deployments.  

2. **Uber**:  
   - **Problem**: Scaling ride-matching algorithms and handling real-time requests.  
   - **Solution**: Used Node.js for lightweight, asynchronous APIs in their microservices.  
   - **Result**: Achieved faster performance and responsiveness.  

3. **PayPal**:  
   - **Problem**: Monolithic application led to slower deployments.  
   - **Solution**: Adopted microservices with Node.js for payment processing.  
   - **Result**: Reduced response times by 35%.  

By combining strong security practices and scalable infrastructure, organizations like Netflix and Uber have harnessed the power of Node.js in microservices to achieve efficiency and reliability.  

$$
\Large \text{2nd Insem Ends Here}
$$

---

# API`s

An **API** (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other by defining how requests and responses should be structured. It enables one program to interact with another program or service, often over the internet.


Here is a simple **Node.js** program using **Express** to create a functional API that can handle HTTP requests and respond with some data. This example demonstrates a basic API that serves a list of users.

### Steps to set up:
1. **Install Node.js** if you haven't already.
2. Create a new directory for your project and navigate into it.
3. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
4. Install **Express**:
   ```bash
   npm install express
   ```

### Create a simple API using Express:
Now, create a file called `app.js` and add the following code:

```javascript
const express = require('express');
const app = express();

// Sample data
const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Brown', age: 22 }
];

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the API!</h1>');
});

// Get all users (GET request)
app.get('/api/users', (req, res) => {
  res.json(users); // Sends the users array as JSON
});

// Get a user by ID (GET request with parameter)
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user); // Sends the specific user as JSON
});

// Create a new user (POST request)
app.use(express.json()); // Middleware to parse JSON body
app.post('/api/users', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send('Name and age are required');
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser); // Add the new user to the array
  res.status(201).json(newUser); // Respond with the newly created user
});

// Server setup
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
```

### Explanation:
1. **Basic Routes**:
   - `/` - Home route that just welcomes the user.
   - `/api/users` - Returns a list of all users (GET request).
   - `/api/users/:id` - Returns a specific user by their ID (GET request with parameter).
   - `/api/users` - Allows you to add a new user (POST request). It requires sending a JSON body with `name` and `age`.

2. **Middleware**:
   - `express.json()` is used to parse incoming JSON data for the POST request.

### Running the Server:
1. In your terminal, navigate to your project folder and run:
   ```bash
   node app.js
   ```

2. Your server will start running on `http://localhost:5000`.

### Testing the API:
You can test the API using Postman or by visiting the URLs in your browser:

1. **Get all users**:
   Open your browser and go to `http://localhost:5000/api/users`. You should see the list of users in JSON format.

2. **Get a specific user**:
   Go to `http://localhost:5000/api/users/1` to get the user with ID 1.

3. **Add a new user**:
   You can use Postman or any other HTTP client to send a **POST** request to `http://localhost:5000/api/users` with a JSON body:
   ```json
   {
     "name": "Sam Green",
     "age": 28
   }
   ```

   This will add a new user to the list and return the newly added user in the response.


That's it! You've now created a simple but functional API using **Node.js** and **Express**. You can extend this by adding more functionality, like updating or deleting users, validating input, etc.

In the context of the above program, the **"rules"** of the API are essentially the **routes** and **HTTP methods** that define how the server should respond to incoming requests. Let's break this down in the simplest terms:

### Where the rules are defined:

In the above example, the **rules** are defined by:
1. **HTTP Methods** (GET, POST, etc.)
2. **Routes** (the paths like `/api/users` or `/api/users/:id`)
3. **Request handling** (what happens when a certain request is made to a route)

Let's look at the specific places where these rules are defined:

### 1. **GET `/api/users` (Get all users)**
```javascript
app.get('/api/users', (req, res) => {
  res.json(users); // Respond with the list of users
});
```
- **Rule**: When a `GET` request is made to `/api/users`, the server responds with a JSON array of all users.
- **Method**: `GET`
- **Route**: `/api/users`

### 2. **GET `/api/users/:id` (Get a specific user)**
```javascript
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params; // Extract the user ID from the URL
  const user = users.find(u => u.id === parseInt(id)); // Find the user by ID
  
  if (!user) {
    return res.status(404).send('User not found'); // If user not found, return 404
  }

  res.json(user); // Return the user data as JSON
});
```
- **Rule**: When a `GET` request is made to `/api/users/:id` (where `:id` is a dynamic parameter), the server looks for the user with the specified `id`. If the user exists, it sends their data; otherwise, it returns a 404 error.
- **Method**: `GET`
- **Route**: `/api/users/:id`

### 3. **POST `/api/users` (Create a new user)**
```javascript
app.post('/api/users', (req, res) => {
  const { name, age } = req.body; // Extract data from the body of the request

  if (!name || !age) {
    return res.status(400).send('Name and age are required'); // Validation rule
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser); // Add the new user to the array
  res.status(201).json(newUser); // Respond with the new user data and status 201 (Created)
});
```
- **Rule**: When a `POST` request is made to `/api/users` with a JSON body containing `name` and `age`, a new user is created and added to the list.
- **Method**: `POST`
- **Route**: `/api/users`

### So, where are the **rules** defined?

- **Route**: In Express, each route is defined using methods like `app.get()`, `app.post()`, etc. The **route** is the URL path that the client will send the request to (like `/api/users`).
- **HTTP Method**: The type of request made (like `GET`, `POST`, `PUT`, `DELETE`) is what defines the action. Each HTTP method has a different meaning and corresponds to a different type of action:
  - `GET` is used to retrieve data.
  - `POST` is used to send data to the server to create a new resource.
  - `PUT` is used to update data.
  - `DELETE` is used to delete a resource.
  
- **Request Handlers**: The logic that happens inside the route function (`req, res => {...}`) defines how the server handles the request. This logic is where you check conditions (like if a user exists or if the data is valid), and it defines what kind of response will be sent back.

- **Validation Rules**: For example, in the `POST /api/users` route, there's a validation rule:
  ```javascript
  if (!name || !age) {
    return res.status(400).send('Name and age are required');
  }
  ```
  This is a rule that ensures the request contains the required `name` and `age` fields. If not, it returns a `400 Bad Request` error.

### Summary:
- **Routes** and **HTTP methods** define the **rules** for the API.
- These rules tell the server how to respond to different kinds of requests.
- Inside each route, you can add **business logic** and **validation rules** to control what happens when the API is used.

In short, the rules for how the API works are defined by the routes, the HTTP methods, and the logic inside the route handlers.



---

















---
---

```plaintext
200 : status OK


6 Sept 2024
-------------------------------------------------------

Callback function - function passed as an argument in other function
Delaying - setInterval and async await


example - 

arrow functions and anonymous functions are the same thing


13 Sept 2024
---------------------------------------------------------------------

async and await
Promises (resolve and reject based on the condition)

States of promises:
succcessfull
reject
pending

syntax: 
cosnt myPromise = new Promise(resolve, reject) => {
    if(success) resolve()
    else reject ()

}

syntax : 
if mypromise.then(result) => {

} catch (error) => {

}



-----
Event Loops: we use libuv library to perform multithreading
Nodejs is a single thread but we send it to os so nodejs can also work as multithreaded language
v8 engine - the compiler of js

when delaying tasks os comes into play

    timers
    pending callbacks
    idle, prepare
    polling - check whether its idle,prepared or etc
    check - it executes our callback function
    close callback- finishes and closes the callback

all these defination are in the library libuv

so fl




10 Sept 2024
Imp Topics for exam
--------------------------------------------
unit 1 mostly and then unit 2
difference between nodejs and expressjs
creating server in nodejs



6 November 2024
-----------------------------------------------------


```




