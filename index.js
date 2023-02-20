// basic requirements for express node app
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 3000;

// api key
const apiKey = "AIzaSyCdlDmZicdxh3rk6v6cMa4waBYCvYfbEy8";

// top languages
const languages = ["es", "zh-CN", "hi", "ar", "pt", "bn", "ru", "ja", "pa", "de"];

// this is the default api endpoint
app.get("/api", async (req, res) => {
  res.json({
    message: "server is live",
  });
});

// this is the data api endpoint
app.get("/api/:textToTranslate?", async (req, res) => {
  const text = req.params.textToTranslate;
  const targetLanguage = languages[Math.floor(Math.random() * languages.length)];

  fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data.data.translations[0].translatedText);
      res.json({
        translated: data.data.translations[0].translatedText,
        language: targetLanguage
      })
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
});

// sets up path to serve static files
const path = require("path");
const { get } = require("https");
const { response, json } = require("express");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets/js")));
app.use(express.static(path.join(__dirname, "assets/css")));
app.use(express.static(path.join(__dirname, "assets/img")));

// starts the server
app.listen(port, async () => {
  console.log(`Social media app listening on port ${port}`);
});
