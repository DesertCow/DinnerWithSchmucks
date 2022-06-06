
const key = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c5f40d2f12msh5e7c8401ba44777p1e29ddjsn4cd0dc063ece'
  }
};

//##################### Variable Decleration #####################

let summary = {
  "joke": "~~BAD JOKE ~~",
  "author": "VOID",
  "year": "1950",
  "movieTitle": "SNAKES ON A PLANE"
}

var chuckQuoteEL = document.getElementById('chuckQuote');
var ronQuoteEL = document.getElementById('ronQuote');
var nicholasQuoteEL = document.getElementById('nicholasQuote');
var michaelQuoteEL = document.getElementById('michaelQuote');


var quoteMessageEL = document.getElementById('quote-message');
var userInfoEL = document.getElementById('userDirections');

var hiddenButtonsEl = document.getElementById("hidden-buttons")


chuckQuoteEL.addEventListener("click", function (clickEvent) {

  chuckQuote();
  buttonDisplayer();
});


ronQuoteEL.addEventListener("click", function (clickEvent) {

  ronSwansonQuote();
  buttonDisplayer();
});

nicholasQuoteEL.addEventListener("click", function (clickEvent) {

  nicholasCageQuote();
  buttonDisplayer();
});

michaelQuoteEL.addEventListener("click", function (clickEvent) {

  michaelScottQuote();
  buttonDisplayer();
});

//##################### Functions #####################

async function chuckQuote() {

  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', key)
    .then(function (response) {

      return response.json();
    })

    .then(function (data) {

      summary.joke = data.value;
      summary.author = "Chuck Norris";
      var jokeEL = document.createElement("h1");
      var authorEL = document.createElement("h3");
      authorEL.textContent = "~ Chuck Norris ~";
      jokeEL.textContent = summary.joke;
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);
      quoteMessageEL.replaceChild(authorEL, quoteMessageEL.childNodes[2]);

      updateSessionStore();

      return;

    })
}


async function ronSwansonQuote(reqCount, term) {

  var apiURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  fetch(apiURL)
    .then(function (response) {

      return response.json();

    })
    .then(function (data) {

      summary.joke = data;
      summary.author = "Ron Swanson";
      var jokeEL = document.createElement("h1");
      var authorEL = document.createElement("h3");

      jokeEL.textContent = summary.joke;
      authorEL.textContent = "~ Ron Swanson ~";

      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);
      quoteMessageEL.replaceChild(authorEL, quoteMessageEL.childNodes[2]);

      updateSessionStore();

      return summary.joke;

    });
  return;
}

async function michaelScottQuote() {

  var apiURL = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";

  apiURL = "https://api.allorigins.win/raw?url=" + apiURL;

  fetch(apiURL)
    .then(function (response) {

      return response.json();
    })
    .then(function (data) {


      summary.joke = data.quote;
      summary.author = "Michael Scott";
      var jokeEL = document.createElement("h1");
      var authorEL = document.createElement("h3");
      jokeEL.textContent = summary.joke;
      authorEL.textContent = " ~ Michael Scott ~";
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);
      quoteMessageEL.replaceChild(authorEL, quoteMessageEL.childNodes[2]);

      updateSessionStore();

      return;

    });
  return;
}

async function nicholasCageQuote() {

  var apiURL = "https://nicolas-cage-quotes.herokuapp.com/quotes?info=true";

  fetch(apiURL)
    .then(function (response) {

      return response.json();
    })
    .then(function (data) {

      summary.joke = data[0].quote;
      summary.movieTitle = data[0].title;
      summary.year = data[0].year;
      summary.author = "Nicholas Cage";

      var jokeEL = document.createElement("h1");
      var movieEL = document.createElement("h3");

      jokeEL.textContent = summary.joke;
      movieEL.textContent = "~ Nicholas Cage - " + " " + summary.movieTitle + " (" + summary.year + ") ~";

      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);
      quoteMessageEL.replaceChild(movieEL, quoteMessageEL.childNodes[2]);

      updateSessionStore();

      return summary.joke;

    });
  return;


}

function buttonDisplayer() {
  hiddenButtonsEl.style.opacity = "100"
}


function updateSessionStore() {

  sessionStorage.setItem("QuoteSessionData", JSON.stringify(summary));

  summaryStore = JSON.parse(sessionStorage.getItem("QuoteSessionData"));
}