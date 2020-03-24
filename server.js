/*importing all dependencies; express for routing,
mongoose for connecting to and interacting with mongoDB
passport for authentication*/
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//loading routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(db)
  .then(() => console.log("db connected successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello, i'm working");
});

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening to port ${port}`));
