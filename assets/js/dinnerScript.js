//
//
// // Clayton Skaggs
// 5-31-2022
// ==================== Varriable Decleration =====================

// Grab Display Fields in HTML

var recipeNameTitleEL = document.querySelector(".recipeNameTitle");

var recipeCardNameTitleEL = document.querySelector(".recipeCardNameTitle");
var recipeCardFullrecipeEL = document.querySelector(".recipeCardFullrecipe");

var beerCardBeerTitleEL = document.querySelector(".beerCardBeerTitle");
var beerCardBeerFactsEL = document.querySelector(".beerCardBeerFacts");

var summaryPageButton = document.querySelector(".summaryButton");

var beerImgEL = document.querySelector(".beerImg");
var recipeImgEL = document.querySelector(".recipeImg");


let summary = {
  "joke": "~~BAD JOKE ~~",
  "author": "VOID",
  "year": "1950",
  "movieTitle": "SNAKES ON A PLANE",
  "drinkName": "Irish Carbomb",
  "drinkInstructions": "Put the lime in the coconut...",
  "drinkPictureURL": "https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg"
}


// ################################## Button Listeners ##################################

summaryPageButton.addEventListener("click", function (clickEvent) {

  //recipeCardNameTitleEL.textContent = "Daves Famous Bruger";
  //recipeNameTitleEL.textContent = recipeCardNameTitleEL.textContent;
  //recipeCardFullrecipeEL.textContent = "This is where all the detailed recipe information goes....";
  //recipeImgEL.src = "./assets/images/burger_example.jpg";

  //beerCardBeerTitleEL.textContent = "Fosters";
  //beerCardBeerFactsEL.textContent = "Taste like beer";

  //beerImgEL.src = "./assets/images/FOSTERS-Beer.png";
  //beerCardBeerFactsEL.textContent = "The first beer in the world was brewed by the ancient Chinese around the year 7000 BCE (known as kui). In the west, however, the process now recognized as beer brewing began in Mesopotamia at the Godin Tepe settlement now in modern - day Iran between 3500 - 3100 BCE."


});

// ################################## Mouse In/Out Listeners ##################################

summaryPageButton.addEventListener('mouseover', function handleMouseOver() {

  summaryPageButton.style.backgroundColor = '#63863C';
  document.getElementById("summaryButtonShadow").style.boxShadow = "10px 10px 50px 50px #C2CAB9";
  document.getElementById("summaryButtonShadow").style.opacity = "0.90";

});

summaryPageButton.addEventListener('mouseout', function handleMouseOut() {

  summaryPageButton.style.backgroundColor = '#C3D9AA';
  document.getElementById("summaryButtonShadow").style.boxShadow = "none";
});

// ################################## Functions ##################################

async function getRandomDrink() {

  var apiURL = "https://thecocktaildb.com/api/json/v1/1/random.php";

  fetch(apiURL)
    .then(function (respone) {

      if (respone.status != 200) {
        console.log("ERROR API(" + respone.status + ") from " + apiURL);
      }

      return respone.json();
    })
    .then(function (data) {

      console.log(data);

      summary.drinkName = data.drinks[0].strDrink;
      summary.drinkInstructions = data.drinks[0].strInstructions;
      summary.drinkPictureURL = data.drinks[0].strDrinkThumb;

      console.log("Random Drink = " + summary.drinkName);
      console.log("Drink Instructions = " + summary.drinkInstructions);
      console.log("Drink Picture = " + summary.drinkPictureURL);

      beerCardBeerTitleEL.textContent = summary.drinkName;
      beerImgEL.src = summary.drinkPictureURL;
      beerCardBeerFactsEL.textContent = summary.drinkInstructions;

      return;

    })
}

function init() {

  //Load data from session storeage...
}

// ========================== MAIN ==========================

init();

getRandomDrink();

