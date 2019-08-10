var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("FriendFinder listening on PORT " + port);
});
