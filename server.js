// basic requirements for express node app
require('dotenv').config()
const path = require("path");
const express = require("express");
const database = require("./src/database.js");
const app = express();
const cors = require('cors');
const port = 3000;


app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "public")));

// api key
const apiKey = process.env.API_KEY;

app.use(cors({
  origin: 'http://localhost:3000'
}));

// top languages
const languages = ["es", "zh-CN", "hi", "ar", "pt", "bn", "ru", "ja", "pa", "de"];
const languageNames = {
  "es": "Spanish",
  "zh-CN": "Chinese",
  "hi": "Hindi",
  "ar": "Arabic",
  "pt": "Portuguese",
  "bn": "Bengali",
  "ru": "Russian",
  "ja": "Japanese",
  "pa": "Punjabi",
  "de": "German"
};

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
  const randomIndex = Math.floor(Math.random() * 5); // 5 = amount of profile pics available currently
 
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
      const postData = {
        translated: data.data.translations[0].translatedText,
        language: languageNames[targetLanguage],
        date: new Date(),
        originalText: text,
        profileIndex: randomIndex
      };
      res.json(postData)
      database.post(postData);
    })
    .catch((error) => {
      console.error(error);
    });
});

// api endpoint to recieve all posts
app.get("/allposts", (req, res) => {
  database.getPosts()
  .then((posts) => {
    res.json(posts);
  })
  .catch((error) => {
    console.log(error);
    res.json({
      error: error
    })
  })
});

// sets up path to serve static files
app.use(express.static(path.join(__dirname, "public")));

// starts the server
app.listen(port, async () => {
  console.log(`Social media app listening on port ${port}`);
});

