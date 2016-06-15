



  var player1Score = "0";
  var player2Score = "0";
  var turnTotal = [0];

  var rollDice = function(roll) {
   roll = parseInt(Math.floor((Math.random() * 6) + 1));
   return roll;
  };



$(document).ready(function(){
  $("#btn-roll1").click(function(){
    $("#roll-result").text("");
    rollResult = rollDice();
    $("#roll-result").append(rollResult + ", ");
    if(rollResult != 1) {
    var newTotal = parseInt(turnTotal) + rollResult;
    turnTotal = newTotal;
    $("#turn-total").text(turnTotal);
    } else {
    turnTotal = 0;
    $("#turn-total").text(turnTotal);
    $("#roll-result").text("YOU LOSE");
    $("#player1Buttons").hide();
    $("#player2Buttons").show();
    }

  });

  $("#btn-hold1").click(function(){
    player1Score = turnTotal+ parseInt(player1Score);
    turnTotal = 0
    if (player1Score >=100) {
      alert(" PLAYER 1 WINNER ");
    } else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player1").text(player1Score);
    $("#player1Buttons").hide();
    $("#player2Buttons").show();
    }

  });
  $("#btn-roll2").click(function(){
    $("#roll-result").text("");
    rollResult = rollDice();
    $("#roll-result").append(rollResult + ", ");
    if(rollResult != 1) {
    var newTotal = parseInt(turnTotal) + rollResult;
    turnTotal = newTotal;
    $("#turn-total").text(turnTotal);
    } else {
    turnTotal = 0;
    $("#turn-total").text(turnTotal);
    $("#roll-result").text("YOU LOSE");
    $("#player2Buttons").hide();
    $("#player1Buttons").show();

    }

  });

  $("#btn-hold2").click(function(){
    player2Score = turnTotal+ parseInt(player2Score);
    turnTotal = 0
    if (player2Score >=100) {
      alert(" PLAYER 2 WINNER ");
    } else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player2").text(player2Score);
    $("#player2Buttons").hide();
    $("#player1Buttons").show();
    }
  });
});
