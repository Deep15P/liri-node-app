console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var axios = require("axios");
var holdsArgs = process.argv;
var movieName = "";


// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < holdsArgs.length; i++) {

    if (i > 2 && i < holdsArgs.length) {
      movieName = movieName + "+" + holdsArgs[i];
    }
    else {
      movieName += holdsArgs[i];
  
    }
  }


  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  }
);