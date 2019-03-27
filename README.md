# liri-node-app
node app project for class.

## GitHub Repo Link
https://github.com/Deep15P/liri-node-app

## Demo Video Link 
https://drive.google.com/file/d/1N_mQ0gXg-B5DXLFvxQVJui00e5m8EKlU/view?usp=sharing

### How to use this in terminal 
use the liri.js file.
Open it in terminal then run one of the following commands: 
* node liri.js concert-this (you can type in the name of an artist that is currently touring)
* node liri.js spotify-this-song (you can type in a song name)
* node liri.js movie-this (you can type in a movie name)
* node liri.js do-what-it-says

## When concert-this command is used you will be provided with:

* Name of the venue
* Venue location
* Date of the Event

### When spotify-this-song command is used you will be provided with:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base.

### When movie-this command is used you will be provided with:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

### When do-what-it-says command:
* A random.txt file with search for spotify-this-song "I want it that way." This will give you the spotify results of "I want it that way."

### Technologies Used
* JavaScript
* Node.js
* Spotify API
* Bands in Town API
* OMDB API