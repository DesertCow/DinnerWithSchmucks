//
//
//
// 
// ################################## Varriable Decleration ##################################

// #################### HTML Page Elements ####################
// Grab Display Fields in HTML

var recipeNameTitleEL = document.querySelector(".recipeNameTitle");
var titleDrinkEL = document.querySelector(".titleDrink");

var recipeCardNameTitleEL = document.querySelector(".recipeCardNameTitle");
var recipeCardFullrecipeEL = document.querySelector(".recipeCardFullrecipe");

var beerCardBeerTitleEL = document.querySelector(".beerCardBeerTitle");
var beerCardBeerFactsEL = document.querySelector(".beerCardBeerFacts");

var beerImgEL = document.querySelector(".beerImg");
var recipeImgEL = document.querySelector(".recipeImg");

// #################### HTML Buttons ####################
var summaryPageButton = document.querySelector(".summaryButton");

let summary = {
  "joke": "~~BAD JOKE ~~",
  "author": "VOID",
  "year": "1950",
  "movieTitle": "SNAKES ON A PLANE",
  "drinkName": "Irish Carbomb",
  "drinkInstructions": "Put the lime in the coconut...",
  "drinkPictureURL": "https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
  "mealName": "Brie wrapped in prosciutto & brioche",
  "mealInstructions": "Mix the flour, 1 tsp salt, ...",
  "mealPictureURL": "VOID",
  "mealYouTubeURL": "VOID"
}


// ################################## Button Listeners ##################################

summaryPageButton.addEventListener("click", function (clickEvent) {

});

// ################################## Mouse In/Out Listeners ##################################

summaryPageButton.addEventListener('mouseover', function handleMouseOver() {

  summaryPageButton.style.backgroundColor = '#63863C';
  document.getElementById("summaryButtonShadow").style.boxShadow = "10px 10px 50px 50px #C2CAB9";
  document.getElementById("summaryButtonShadow").style.opacity = "0.90";

});

summaryPageButton.addEventListener('mouseout', function handleMouseOut() {

  summaryPageButton.style.backgroundColor = '#C3D9AA';
  document.getElementById("summaryButtonShadow").style.boxShadow = "1px 1px 30px black";
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

      summary.drinkName = data.drinks[0].strDrink;
      summary.drinkInstructions = data.drinks[0].strInstructions;
      summary.drinkPictureURL = data.drinks[0].strDrinkThumb;

      beerCardBeerTitleEL.textContent = summary.drinkName;
      beerImgEL.src = summary.drinkPictureURL;
      beerCardBeerFactsEL.textContent = summary.drinkInstructions;
      updateSessionStore();

      return;

    })
}

async function getRandomDinner() {

  var apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(apiURL)
    .then(function (respone) {

      if (respone.status != 200) {
        console.log("ERROR API(" + respone.status + ") from " + apiURL);
      } else {
        return respone.json();
      }
      return;

    })
    .then(function (data) {

      summary.mealName = data.meals[0].strMeal;
      summary.mealInstructions = data.meals[0].strInstructions;
      summary.mealPictureURL = data.meals[0].strMealThumb;
      summary.mealYouTubeURL = data.meals[0].strYoutube;

      recipeCardNameTitleEL.textContent = summary.mealName;
      recipeImgEL.src = summary.mealPictureURL;
      recipeCardFullrecipeEL.textContent = summary.mealInstructions;

      titleDrinkEL.textContent = summary.drinkName;
      recipeNameTitleEL.textContent = summary.mealName;

      updateSessionStore();

      return;
    })
}

// ========================== Session Store ==========================

function updateSessionStore() {

  sessionStorage.setItem("QuoteSessionData", JSON.stringify(summary));
}

function loadSessionStore() {
  summary = JSON.parse(sessionStorage.getItem("QuoteSessionData"));

}

function init() {

  loadSessionStore();

}

// ========================== MAIN START ==========================

init();

getRandomDrink();
getRandomDinner();


// ========================== MAIN END ==========================
