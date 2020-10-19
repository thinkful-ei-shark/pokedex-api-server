const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 8000;

app.use(morgan("dev"));

app.use((req, res) => {
  res.send("Hello from server.js");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:8000");
});
