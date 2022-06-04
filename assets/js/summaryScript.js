
var quoteTextEL = document.querySelector(".quoteTex†");
var authorTextEL = document.querySelector(".authorTex†");
var authorImageEL = document.querySelector(".authorImage");

var drinkNameEL = document.querySelector(".drinkName");
var drinkPhotoEL = document.querySelector(".drinkPhoto");
var drinkInstructionsEL = document.querySelector(".drinkInstructions");

var mealNameEL = document.querySelector(".mealName");
// var mealPictureURLEL = document.querySelector(".mealPicture");
var mealInstructionsEL = document.querySelector(".mealInstructions");

var michaelScott = "https://media.gq.com/photos/5a53e9fca929253c4d20a04f/16:9/w_1280,c_limit/does-the-office-hold-up-gq.jpg";
var ronSwanson = "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/12/Parks-and-Rec-The-Fight-opening-Ron-Swanson.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5";
var nicholasCage = "https://i.kym-cdn.com/photos/images/facebook/000/456/353/05a.jpg";
var chuckNorris = "https://images.metadata.sky.com/pd-image/b1fa4f7f-cec8-4819-874f-306ae4e85a46/16-9/1000";

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

  mealNameEL.textContent = summary.mealName;
  mealInstructionsEL.textContent = summary.mealInstructions;
}

function updateImage() {

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

// ========================== Local Store ==========================

function updateSessionStore() {

  sessionStorage.setItem("QuoteSessionData", JSON.stringify(summary));

}

function loadSessionStore() {
  summary = JSON.parse(sessionStorage.getItem("QuoteSessionData"));

}

function init() {

  loadSessionStore();

  updateImage();

}

// ========================== MAIN START ==========================

init();

updatePage();


// ========================== MAIN END ==========================