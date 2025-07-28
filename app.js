const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "27017";

const url = `mongodb://${dbHost}:${dbPort}`;

app.get("/", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db("test");
    const result = await db.collection("sample").find().toArray();
    res.json(result);
    client.close();
  } catch (err) {
    res.status(500).send("Database connection error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
