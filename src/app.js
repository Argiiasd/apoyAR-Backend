const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const server = express();
const routes = require("./routes/index");

server.use(morgan("dev"));
// server.use(cookieParser());

// const allowedOrigins = ["*"];

server.use(express.json());

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

server.use("/", routes);

module.exports = server;