// src/index.ts
import express from "express";
import bodyParser from "body-parser";
import { addUser, getUsers } from "./memory-db";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/earth-mars-comm/message", (req, res) => {
  const postData = req.body; // Data sent in the POST request body
  console.log("Received data:", postData);
  addUser(postData);
  res.json({ message: "Data received successfully", data: postData });
});

app.get("/api/earth-mars-comm/message", (req, res) => {
  getUsers().then((users) => {
    console.log('--->', users)
    res.json(users);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port:  http://localhost:${port}`);
});
