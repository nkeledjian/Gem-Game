// Crystal game
$(document).ready(function() {
// Declare all variables
  var wins = 0;
  var losses = 0;
  var score = 0;
  var matchNum = 0;
  var winsCount = $("#wins");
  var lossesCount = $("#losses");
  var gemVals=[0, 0, 0, 0];
  var scoreCount=$("#score");
  var matchNumCount=$("#matchNumCount")
// Player's current score
    function refresh(){
      winsCount.text(wins);
      lossesCount.text(losses);
      matchNumCount.text(matchNum);
      scoreCount.text(score);
    }


// Refresh Match score and all gem values 
// Function will provide random numbers for gems ranging from 1 to 10
  function restart() {
    for(var g=0; g<gemVals.length, g++) {
      gemVals[i]=Math.floor(Math.random() * 10)) + 1);
      }
    // random number for matchNum ranging from 20 to 30
      score = 0;
      matchNum = Math.floor(Math.random() * 30) + 20);
      refresh();
    }

    // Assign the values from gemVals to all 4 gems
    $(".gem").click(function(){
      // gem is borrowing the value produced by gemVals[i] - the given i, that is
      var gem = gemVals[this.value];
      score = score + gem;
        if(score == matchNum) {
          wins++
          restart();
        }
        else if(score > matchNum) {
          losses++;
          restart();
        }
      refresh();
    })
  restart();
})


// GAME LOGIC/OUTCOMES
/*if player total score matches the random number from the beginning of the game, display message "You win!" - add var wins++ to tally a player win. Reset doc to preserve wins score (NOT RELOAD!) */

/*else if, player score exceeds random number at beginning, display message "You lose!" - add var loses++ to tally a player lose. Reset doc to preserve loses score (NOT RELOAD!) */

}) // End document ready function