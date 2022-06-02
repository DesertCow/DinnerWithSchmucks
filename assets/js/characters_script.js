const key = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c5f40d2f12msh5e7c8401ba44777p1e29ddjsn4cd0dc063ece'
  }
};

let summary = {
  "joke": "~~BAD JOKE ~~",

}

var chuckQuoteEL = document.getElementById('chuckQuote');
var ronQuoteEL = document.getElementById('ronQuote');
var nicholasQuoteEL = document.getElementById('nicholasQuote');
var michaelQuoteEL = document.getElementById('michaelQuote');


var quoteMessageEL = document.getElementById('quoteMessage');

var userInfoEL = document.getElementById('userInfo');




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

//var tempJoke = chuckQuote();

async function ronSwansonQuote(reqCount, term) {

  var apiURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  fetch(apiURL)
    .then(function (response) {

      return response.json();

    })
    .then(function (data) {

      summary.joke = data;
      quoteMessageEL.textContent = summary.joke;

      return summary.joke;

    });
  return;
}

async function michaelScottQuote() {

  var apiURL = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";

  fetch(apiURL)
    .then(function (response) {

      //console.log(response.status)

      return response.json();
    })
    .then(function (data) {


      console.log("Data = " + data);
      summary.joke = data;
      console.log("summary.joke =" + summary.joke);

      quoteMessageEL.textContent = summary.joke;

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

      summary.joke = data;
      // quoteMessageEL.textContent = summary.joke;

      //jokeEL.textContent = summary.joke;

      var jokeEL = document.createElement("h2");
      quoteMessageEL.removeChild(quoteMessageEL.firstChild);
      quoteMessageEL.appendChild(jokeEL);

      return summary.joke;

    });
  return;
}

