const express = require ("express");np
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});

