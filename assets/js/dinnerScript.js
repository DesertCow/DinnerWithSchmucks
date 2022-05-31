//
//
// // Clayton Skaggs
// 5-31-2022
// ==================== Varriable Decleration =====================

// Grab Display Fields in HTML

var recpieNameTitleEL = document.querySelector(".recpieNameTitle");

var recpieCardNameTitleEL = document.querySelector(".recpieCardNameTitle");
var recpieCardFullRecpieEL = document.querySelector(".recpieCardFullRecpie");

var beerCardBeerTitleEL = document.querySelector(".beerCardBeerTitle");
var beerCardBeerFactsEL = document.querySelector(".beerCardBeerFacts");

var summaryPageButton = document.querySelector(".summaryButton");



// ################################## Button Listeners ##################################

summaryPageButton.addEventListener("click", function (clickEvent) {

  recpieCardNameTitleEL.textContent = "Daves Famous Bruger";
  recpieNameTitleEL.textContent = recpieCardNameTitleEL.textContent;
  recpieCardFullRecpieEL.textContent = "This is where all the detailed recpie information goes....";
  beerCardBeerTitleEL.textContent = "Bud Light";
  beerCardBeerFactsEL.textContent = "Taste like beer";

});

// ################################## Mouse Over/Out Listeners ##################################

summaryPageButton.addEventListener('mouseover', function handleMouseOver() {

  summaryPageButton.style.backgroundColor = '#F46269';

});

summaryPageButton.addEventListener('mouseout', function handleMouseOut() {

  summaryPageButton.style.backgroundColor = '#13a92c';

});

// ========================== MAIN ==========================

