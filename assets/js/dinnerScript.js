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



// ################################## Button Listeners ##################################

summaryPageButton.addEventListener("click", function (clickEvent) {

  recipeCardNameTitleEL.textContent = "Daves Famous Bruger";
  recipeNameTitleEL.textContent = recipeCardNameTitleEL.textContent;
  recipeCardFullrecipeEL.textContent = "This is where all the detailed recipe information goes....";
  beerCardBeerTitleEL.textContent = "Fosters";
  beerCardBeerFactsEL.textContent = "Taste like beer";

  beerImgEL.src = "./assets/img/FOSTERS-Beer.png";
  beerCardBeerFactsEL.textContent = "The first beer in the world was brewed by the ancient Chinese around the year 7000 BCE (known as kui). In the west, however, the process now recognized as beer brewing began in Mesopotamia at the Godin Tepe settlement now in modern - day Iran between 3500 - 3100 BCE."


});

// ################################## Mouse Over/Out Listeners ##################################

summaryPageButton.addEventListener('mouseover', function handleMouseOver() {

  summaryPageButton.style.backgroundColor = '#63863C';
  document.getElementById("summaryButtonShadow").style.boxShadow = "10px 10px 50px 50px #C2CAB9";

});

summaryPageButton.addEventListener('mouseout', function handleMouseOut() {

  summaryPageButton.style.backgroundColor = '#C3D9AA';
  document.getElementById("summaryButtonShadow").style.boxShadow = "none";
});

// ========================== MAIN ==========================

