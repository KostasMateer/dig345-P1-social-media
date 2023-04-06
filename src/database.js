require('dotenv').config();
const { MongoClient } = require("mongodb");
const admin_user = process.env.DATABASE_USER
const admin_pass = process.env.DATABASE_PASSWORD

const uri =
  `mongodb+srv://${admin_user}:${admin_pass}@dig345-p1-social-media.gcosjqx.mongodb.net/?retryWrites=true&w=majority`;

// Create a new MongoClient instance with the provided URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  minPoolSize: 50,
});

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB server:", err);
  } else {
    console.log("Connected to MongoDB server");
  }
});

async function post(postData) {
  try {
    const database = client.db("dig-345-social-media");
    const posts = database.collection("posts");

    // create a post
    const post = postData;

    // insert the post into the database
    const result = await posts.insertOne(post);
    console.log(`Post with ID ${result.insertedId} has been inserted.`);

  } catch (err) {
    console.error(err);
  }
}

async function getPosts() {
  try {
    const collection = client.db("dig-345-social-media").collection("posts");

    const documents = await collection.find({}).toArray();

    // create an empty array to store the retrieved documents
    const list = [];

    // loop through each document and add it to the list
    documents.forEach(doc => {
      list.push(doc);
    });
    
    console.log("loading posts complete")

    return list;

  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  post,
  getPosts
}
