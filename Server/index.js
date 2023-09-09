const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("../Server/Models/Users");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose.connect("mongodb://localhost:27017/CRUD");
mongoose
  .connect(
    "mongodb+srv://@cluster0.x3ou1a3.mongodb.net/CRUD"
  )
  .then(() => {
    console.log("MongoDB is Connected...");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({ _id: id }, req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running...");
});
