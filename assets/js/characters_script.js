const key = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c5f40d2f12msh5e7c8401ba44777p1e29ddjsn4cd0dc063ece'
  }
};

document.getElementById('chuckQuote').addEventListener
('click', chuckQuote);

async function chuckQuote() {
  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',key)
  .then(response => response.json())
  .then(response => console.log(response.value))
  // const data = await response.json();
  // const {norris} = data;
 
  // document.getElementById('val').innerHTML = response.value
  
  .catch(err => console.error(err));
}

