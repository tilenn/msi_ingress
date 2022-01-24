const express = require("express");

// Constants
const PORT = 8000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from custom-built multi-stage nodejs server\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
