const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "27017";
const dbUser = process.env.DB_USER || "admin";
const dbPass = process.env.DB_PASS || "admin123";
const dbName = "UsersDatabase";

const url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

async function seedData() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("users");

    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany([
        { name: "Rohit", age: 25 },
        { name: "Mohit", age: 30 },
        { name: "Aman", age: 28 },
        { name: "Rohan", age: 32 },
        { name: "Yash", age: 27 },
      ]);
      console.log("Sample data inserted.");
    } else {
      console.log("Data already exists. Skipping seeding.");
    }

    await client.close();
  } catch (err) {
    console.error("Seeding error:", err.message);
  }
}

seedData();

app.get("/", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const result = await db.collection("users").find().toArray();
    res.json(result);
    client.close();
  } catch (err) {
    res.status(500).send("Database connection error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
