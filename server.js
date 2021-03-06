/*importing all dependencies; express for routing,
mongoose for connecting to and interacting with mongoDB
passport for authentication*/
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
//{path: path/filename}

const app = express();

//CORS middleware
//applying CORS middleware
app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Content-Type",
      "Origin, X-Requested-With, Accept, Authorization, remember-me, type",
    ],
    exposedHeaders: ["sessionId, Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

//loading routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log("failed to connect", err));

// app.get("/", (req, res) => {
//   res.send("Hello, i'm working");
// });

//passport midddleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//process.env variables
let port = process.env.PORT;
let host = process.env.HOST;

app.listen(port, host, () =>
  console.log(`server is listening to port ${host}:${port}`)
);
