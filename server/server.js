var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var server = express();

var teamRouter = require("./routes/teamRouter");
var gameRouter = require("./routes/gameRouter");
var imageRouter = require("./routes/imageRouter");

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

const corsOptions = {
  origin: true,
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  credentials: true
};

server.use(cors(corsOptions));

server.use("/v1/team/", teamRouter);
server.use("/v1/games/", gameRouter);
server.use("/v1/images/", imageRouter);

module.exports = function(db) {
  server.set("db", db);
  return server;
};
