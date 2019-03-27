var dotenv = require("dotenv").config();
var keys = require("./keys.js");

// axios
var axios = require("axios");

var Spotify = require("node-spotify-api");

// keys
var spotify = new Spotify(keys.spotify);

// time
var moment = require("moment");

// arguments
var userinput = process.argv
var go = userinput[2];
var value = userinput[3];


for (i = 4; i < userinput.length; i++) { 
    value += '+' + userinput[i];
}

console.log(value);
// switch commands
switch(go) {
    case "concert-this":
    concert();
    break;

    case "spotify-this-song":
    spotifySearch();
    break;

    case "movie-this":
    movie();
    break;

    case "do-what-it-says":
    whatItSays();
    break;
}

// creating the fs variable, and reading the random.txt file
// if else statements there in case it doesn't work. It will push out an error which will 
// tell us whats wrong
// function (whatItSays) {
// var fs = require("fs");

// fs.readFile("random.txt", "utf-8", function(err, data) {
//     if(err) {

//         console.log(err);
//     }

//     // console.log(data);
// })
// }

// axios.get("")

// declaring the concert function that we called in the switch commands
function concert() {
    var artist = value;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(
        function(concertResponse) {
            for (var i = 0; i < concertResponse.data.length; i++) {

                var concert = concertResponse.data[i].venue
                console.log("Event Date: " + moment(concert.date).format("L"));
                console.log("Venue Name: " + concert.name);
                console.log("Venue City: " + concert.city); 
            }
        }
    )
}

// spotify this song / spotify function declaration
function spotifySearch() {
    if (!value) {
      value = 'reminder';
    } 
      spotify.search({ type: 'track', query: value, limit:1 }).then( function (data) {
        
          console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
          console.log("Song Name: " + data.tracks.items[0].name);
          console.log("song Preview: " + data.tracks.items[0].preview_url);
          console.log("Album Name: " + data.tracks.items[0].album.name)
          
      })
      .catch(function(err) {
        console.log(err);
        })
    
}


// declaring movie/OMDB function that was called in the switch commands
function movie() {
    var movieInput = "";

    if (value === "") {
        movieInput = "Mr. Nobody"
    } else {
        movieInput = value
    }

    axios.get("http://www.omdbapi.com/?t=" + movieInput + "&apikey=fccf59cc")
    .then (function (response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("Imdb Rating: " + response.data.imdbRating);
          console.log("Rotten Tomatoes Score: " + response.data.Ratings[0].Value);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);

    })

};

