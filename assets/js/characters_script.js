// Chuck Norris Button API
const key = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c5f40d2f12msh5e7c8401ba44777p1e29ddjsn4cd0dc063ece'
  }
};

var quoteMessageEl = document.getElementById('quote-message')

let summary = {
  "joke": "~~BAD JOKE ~~",

}

var chuckQuoteEL = document.getElementById('chuckQuote');
var ronQuoteEL = document.getElementById('ronQuote');
var nicholasQuoteEL = document.getElementById('nicholasQuote');
var michaelQuoteEL = document.getElementById('michaelQuote');


var quoteMessageEL = document.getElementById('quote-message');
var userInfoEL = document.getElementById('userDirections');




// document.getElementById('chuckQuote').addEventListener ('click', chuckQuote);

chuckQuoteEL.addEventListener("click", function (clickEvent) {

  chuckQuote();

});


ronQuoteEL.addEventListener("click", function (clickEvent) {

  ronSwansonQuote();

});

nicholasQuoteEL.addEventListener("click", function (clickEvent) {

  nicholasCageQuote();

});

michaelQuoteEL.addEventListener("click", function (clickEvent) {

  michaelScottQuote();

});

//##################### Functions #####################

async function chuckQuote() {

  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', key)
    .then(function (response) {

      return response.json();
    })

    .then(function (data) {

      summary.joke = data.value + " - The Chuck Norris";
      var jokeEL = document.createElement("h1");
      jokeEL.textContent = summary.joke;
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);

    })
}


async function ronSwansonQuote(reqCount, term) {

  var apiURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  fetch(apiURL)
    .then(function (response) {

      return response.json();

    })
    .then(function (data) {

      summary.joke = data + " - Ron Swanson";
      var jokeEL = document.createElement("h1");
      jokeEL.textContent = summary.joke;
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);

      return summary.joke;

    });
  return;
}

async function michaelScottQuote() {

  var apiURL = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";

  apiURL = "https://api.allorigins.win/raw?url=" + apiURL;

  console.log(apiURL)

  fetch(apiURL)
    .then(function (response) {

      //console.log(response.status)

      return response.json();
    })
    .then(function (data) {

      summary.joke = data.quote + " - Michael Scott";
      var jokeEL = document.createElement("h1");
      jokeEL.textContent = summary.joke;
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);

      return summary.joke;

    });
  return;
}

async function nicholasCageQuote() {

  var apiURL = "https://nicolas-cage-quotes.herokuapp.com/quotes";

  fetch(apiURL)
    .then(function (response) {

      //console.log(response.status)

      return response.json();
    })
    .then(function (data) {

      summary.joke = data + " - Nicholas Cage";
      var jokeEL = document.createElement("h1");
      jokeEL.textContent = summary.joke;
      quoteMessageEL.replaceChild(jokeEL, quoteMessageEL.childNodes[1]);

      return summary.joke;

    });
  return;
}

