const dbconnection = require("./mongodb");
const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnection();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  let data = await dbconnection();
  let result = data.insertOne(req.body);
  res.send(result);
});

app.put("/", async (req, res) => {
  let data = await dbconnection();
  let result = data.updateOne({ name: req.body.name }, { $set: req.body });
  res.send({ result: "Update" });
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await dbconnection();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});
app.listen(5000);
