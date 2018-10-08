// Crystal game

// Default scores at game start
var wins = 0;
var loses = 0;

// generate random number for player to match with
var gameNum = Math.floor(Math.random() * (70 - 40) + 40);
var game = gameNum;



// DISPLAY ITEMS
var disp = document.getElementById("#numbers");
// display generated random number
// randNum = document.innerHTML("number");
console.log("Game Number", gameNum);
// display number on HTML page
// disp.innerHTML = game;


// CRYSTAL LOGIC
// add logic to randomize the score value of the crystals for every doc reload

// Random numbers for crystals ranging from 5 to 15
function crysNum1() {
    return Math.floor(Math.random() * (15 - 5) + 5);
}
function crysNum2() {
    return Math.floor(Math.random() * (15 - 5) + 5);
}
function crysNum3() {
    return Math.floor(Math.random() * (15 - 5) + 5);
}
function crysNum4() {
    return Math.floor(Math.random() * (15 - 5) + 5);
}

console.log("Number for Crystal 1", crysNum1());
console.log("Number for Crystal 2", crysNum2());
console.log("Number for Crystal 3", crysNum3());
console.log("Number for Crystal 4", crysNum4());

/* with each click on crystal, update score++ based on random crystNum value assigned to each cyrstal */

// Assigned each crystal the crysNum() function
$("#cryst1").click(function(){
    crysNum1()
});
$("#cryst2").click(function(){
    crysNum2()
});
$("#cryst3").click(function(){
    crysNum3()
});
$("#cryst4").click(function(){
    crysNum4()
});

// GAME LOGIC/OUTCOMES
/*if player total score matches the random number from the beginning of the game, display message "You win!" - add var wins++ to tally a player win. Reset doc to preserve wins score (NOT RELOAD!) */

/*else if, player score exceeds random number at beginning, display message "You lose!" - add var loses++ to tally a player lose. Reset doc to preserve loses score (NOT RELOAD!) */