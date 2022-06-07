//
// DinnerWithSchmucks
// 

// DEFINING SESSIONSTORAGE VARIABLES
var quoteTextEL = document.querySelector(".quoteTex†");
var authorTextEL = document.querySelector(".authorTex†");
var authorImageEL = document.querySelector(".authorImage");

var drinkNameEL = document.querySelector(".drinkName");
var drinkPhotoEL = document.querySelector(".drinkPhoto");
var drinkInstructionsEL = document.querySelector(".drinkInstructions");

var mealNameEL = document.querySelector(".mealName");
var mealPictureURLEL = document.querySelector(".mealPictureURL");
var mealInstructionsEL = document.querySelector(".mealInstructions");

var michaelScott = "assets/images/summary-Michael.jpeg";
var ronSwanson = "assets/images/summary-Ron.jpeg";
var nicholasCage = "assets/images/summary-Nicholas.jpeg";
var chuckNorris = "assets/images/summary-Chuck.jpeg";

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
  // UPDATING TEXT CONTENT AND DRINK PHOTO
  authorTextEL.textContent = summary.author;
  quoteTextEL.textContent = summary.joke;

  drinkNameEL.textContent = summary.drinkName;
  drinkPhotoEL.src = summary.drinkPictureURL;
  drinkInstructionsEL.textContent = summary.drinkInstructions;

  mealNameEL.textContent = summary.mealName;
  mealInstructionsEL.textContent = summary.mealInstructions;
  mealPictureURLEL.src = summary.mealPictureURL;

  // UPDATING CHARACTER PHOTO
  if (summary.author == "Michael Scott") {
    authorImageEL.src = michaelScott;
  }
  else if (summary.author == "Ron Swanson") {
    authorImageEL.src = ronSwanson;
  }
  else if (summary.author == "Nicholas Cage") {
    authorImageEL.src = nicholasCage;
  }
  else if (summary.author == "Chuck Norris") {
    authorImageEL.src = chuckNorris;
  }
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

updatePage();


// ========================== MAIN END ==========================