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
  var scoreCount = $("#score");
  var matchNumCount = $("#matchNumCount")

// Player's stats updated and displayed 
  function refresh() {
    winsCount.text(wins);
    lossesCount.text(losses);
    matchNumCount.text(matchNum);
    scoreCount.text(score);
  }

// Function provides random numbers for gems ranging from 1 to 10 
    function restart() {
      $("#gem1").score = Math.floor(Math.random()* (10 - 1)) + 1;
      $("#gem2").score = Math.floor(Math.random()* (10 - 1)) + 1;
      $("#gem3").score = Math.floor(Math.random()* (10 - 1)) + 1;
      $("#gem4").score = Math.floor(Math.random()* (10 - 1)) + 1;

      // Create for loop? gemValues[i] for gemStone var?

      // random number for matchNum ranging from 20 to 30 for match point
        matchNum = Math.floor(Math.random() * (65 - 20)) + 20;
        console.log("Match number", matchNum);
        refresh(); // Refresh Match score and all gem values 
    }

    // Assign the values from gemVals to all 4 gems
    $(".gem").click(function() {
        // assign gemVals indices to variables
        // var gem1 = gemVals[0];
        // var gem2 = gemVals[1];
        // var gem3 = gemVals[2];
        // var gem4 = gemVals[3];
        var gemStone = gemVals[this.value]; 
        console.log("Gem Values", gemVals[this.value]);
        // gem values entered and accumulate the player's score
        score = score + gemStone;
        // If player score matches the match number, player wins!
        if(score == matchNum) {
          wins++
          // win message
          alert("You Win! Congrats!");
          restart();
        }
        // If player surpasses match number, player losses!
        else if(score > matchNum) {
          losses++;
          // lose message
          alert("You Lose! Better Luck Next Time!");
          restart();
        }
        refresh();
    })
    restart();
}) // End document ready function