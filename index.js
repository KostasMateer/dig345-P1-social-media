// basic requirements for express node app
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 3000;

const serviceUrl = "https://developers.lingvolive.com";

const apiKey =
  "MDcyZDlmYTktYjBkOS00ODlmLWI1NGQtZWIwMmM2Y2ZmOTAxOjE5MGIyMTg1NTMwMzRiZmI5Njg5NTQ3MzBiMTZmMmFj";

// global token for authentication
var token = "";

// this is the default api endpoint
app.get("/api", async (req, res) => {
  res.json({
    message: "server is live",
  });
});

// this is the data api endpoint
app.get("/api/:textToTranslate?", async (req, res) => {
});

// sets up path to serve static files
const path = require("path");
const { get } = require("https");
const { response } = require("express");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets/js")));
app.use(express.static(path.join(__dirname, "assets/css")));
app.use(express.static(path.join(__dirname, "assets/img")));

// starts the server
app.listen(port, async () => {
  console.log(`Social media app listening on port ${port}`);
});



