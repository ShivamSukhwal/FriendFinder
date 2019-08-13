var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

app.listen(port, function() {
  console.log("FriendFinder listening on PORT " + port);
});
