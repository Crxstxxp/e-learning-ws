const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require('./routes/auth');

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error al conectar MongoDB:", err));



app.get("/", (req, res) => {
  res.send("E-Learning Web Services");
});

app.use("/api/auth", authRoutes);

module.exports = app;
