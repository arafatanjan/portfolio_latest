const express = require("express");
const app = express();
// const jwt = require("jsonwebtoken");
 const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
 const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://arafatanjan:a8qbnGW5T8ezHQDS@cluster0.zy39elg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Route is working");
  });
  
  app.listen(port, (req, res) => {
    console.log("App is listening on port :", port);
  });


  //arafatanjan
  //a8qbnGW5T8ezHQDS