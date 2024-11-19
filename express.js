let express = require("express");
let app = express();

// let mid = app.use()
app.get("/", (req, res) => {
  res.end("hello world 1");
});

app.get("/api", (req, res) => {
    res.send('hello world 2')
  });

app.listen(8000, () => {
  console.log("listening at 8000");
});

// res.end();
