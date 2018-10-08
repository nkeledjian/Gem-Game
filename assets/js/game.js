// Crystal game
var wins = 0;
var loses = 0;
var score = 0;

// generate random number for player to match with
var randNum = Math.floor(Math.random() * (70 - 20) + 20);

// DISPLAY ITEMS

// display generated random number
// randNum = document.innerHTML("number");
console.log("randNum", randNum);
// -display crystals-


// CRYSTAL LOGIC
// add logic to randomize the score value of the crystals for every doc reload
// random number set for crystals
var crystNum = Math.floor(Math.random() * (15 - 5) + 5);
console.log("randNum for Crystal", crystNum);
/* with each click on crystal, update score++ based on random crystNum value assigned to each cyrstal */
$("#cryst1").click(function(){

});
$("#cryst2").click(function(){

});
$("#cryst3").click(function(){

});
$("#cryst4").click(function(){

});

// GAME LOGIC/OUTCOMES
/*if player total score matches the random number from the beginning of the game, display message "You win!" - add var wins++ to tally a player win. Reset doc to preserve wins score (NOT RELOAD!) */

/*else if, player score exceeds random number at beginning, display message "You lose!" - add var loses++ to tally a player lose. Reset doc to preserve loses score (NOT RELOAD!) */