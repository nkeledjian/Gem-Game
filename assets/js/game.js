// Gem game
$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var score = 0;
  var matchNum = 0;
  var winsCount = $("#wins");
  var lossesCount = $("#losses");
  var gemVals=[0, 0, 0, 0];
  var scoreCount = $("#score");
  var matchNumCount = $("#matchNumCount")

// Player's stats and match number updated and displayed 
    function refresh() {
      winsCount.text(wins);
      lossesCount.text(losses);
      matchNumCount.text(matchNum);
      scoreCount.text(score);
    }

// Function provides random numbers for gems ranging from 1 to 10 
    function restart() {
      // Loops through gemVals indices and assigns a random value to each gem
      for (var g = 0; g < gemVals.length; g++) {
        gemVals[g] = Math.floor(Math.random()* (10-1)) + 1;
      }
      // random number for matchNum ranging from 20 to 30 for match point
      // Player's score is reset to 0
      score = 0;
      matchNum = Math.floor(Math.random() * (65 - 20)) + 20;
      // Refresh Match score and all gem values 
      refresh(); 
    }

    // Assign the values from gemVals to all 4 gems
    $(".gem").click(function() {
      // this points to html elements with the class "gem"
      /* this.value allows for accessing indices of gemVals array - gemVals array is a global variable and is already populated with random numbers via function restart*/
        var gemStone = gemVals[this.value];
        // gem values entered and accumulate the player's score
        score += gemStone;
        // If player score matches the match number, player wins!
        if(score == matchNum) {
          wins++
          alert("You Win! Congrats!");
          restart();
        }
        // If player surpasses match number, player losses!
        else if(score > matchNum) {
          losses++;
          alert("You Lose! Better Luck Next Time!");
          restart();
        }
      refresh();
    })
  restart();
}) // End document ready function