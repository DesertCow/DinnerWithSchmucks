
var quoteTextEL = document.querySelector(".quoteTex†");
var authorTextEL = document.querySelector(".authorTex†");
var drinkNameEL = document.querySelector(".drinkName");
var drinkPhotoEL = document.querySelector(".drinkPhoto");
var drinkInstructionsEL = document.querySelector(".drinkInstructions");


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

function updatePage() {


  authorTextEL.textContent = summary.author;
  quoteTextEL.textContent = summary.joke;

  drinkNameEL.textContent = summary.drinkName;
  drinkPhotoEL.src = summary.drinkPictureURL;
  drinkInstructionsEL.textContent = summary.drinkInstructions;

}



// ========================== Local Store ==========================

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

updatePage();


// ========================== MAIN END ==========================