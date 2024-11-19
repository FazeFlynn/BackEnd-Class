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




