// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var axios = require("axios");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// ============================================================================
axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "f8cce81526ce4df9b3ed59d4f0208a8c",
    'q': "oil",
    'begin_date': "20160101",
    'end_date': "20170101",
    'sort': "newest"
  },
}, function(err, response, body) {
  body = JSON.parse(body);
  console.log(body);
})


// ============================================================================

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
