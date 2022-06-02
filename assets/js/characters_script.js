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

document.getElementById('chuckQuote').addEventListener
('click', chuckQuote);

async function chuckQuote() {
  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',key)
    .then(function (response) {
      
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      quoteMessageEl.textContent = "Quote: " + data.value ;

    })
  }