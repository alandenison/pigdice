


  var multiDice = "";
  var player1Score = "0";
  var player2Score = "0";
  var turnTotal = [0];
  var oneArray = ["false"];
  // var one = "false";
  resetArray = ["false"];
  rollArray = [];


  var rollDice = function(roll) {
    roll = parseInt(Math.floor((Math.random() * 6) + 1));
    if (roll === 1 ){
      oneArray.unshift("true");
      console.log("oneArray: " + oneArray[0] + ". Also the full array is:" + oneArray);
    }
    return roll;
  };

  var rollDice2 = function(roll1, roll2) {
    var one = "false";
    roll1 = parseInt(Math.floor((Math.random() * 6) + 1));
    console.log(roll1);
    roll2 = parseInt(Math.floor((Math.random() * 6) + 1));
    console.log(roll2);
    roll = roll1+roll2;

    if (roll1 === 1 && roll2 === 1) {
    resetArray.unshift("true");
    console.log("Reset: " + resetArray[0]);
    }
    else if (roll1 === 1 || roll2 === 1){
    oneArray.unshift("true");
    console.log("oneArray: " + oneArray[0] + ". Also the full array is:" + oneArray);
    }
    return roll;
  };






$(document).ready(function(){
  $("#btn-roll1").click(function(){
    $(".lose").remove();
    $("#diceRadio").fadeOut(100);
    multiDice = $("input:radio[name=diceValue]:checked").val();
    console.log(multiDice);
    if (multiDice === "1dice"){
      // $("#roll-result").text(" ");
      rollResult = rollDice();
      $("#roll-result").append(rollResult + ", ");
      } else {
      rollResult = rollDice2();
      $("#roll-result").append(rollResult + ", ");
      }
      if(resetArray[0] === "true"){
        player1Score = 0;
        $("#Player1").text(player1Score);
        alert("BUAHHAHAHHAH");
        $("#player1Buttons").hide();
        $("#player2Buttons").show();
        resetArray.shift();
      }
    if(oneArray[0] === "true") {
      turnTotal = 0;
      $("#turn-total").text(turnTotal);
      $("#roll-result").html("<span class='lose'>Rolled a 1. YOU LOSE</span>");
      $("#player1Buttons").hide();
      $("#player2Buttons").show();
      oneArray.shift();
      console.log("oneArray has been cleared");
      console.log(oneArray);
    } else {
      var newTotal = parseInt(turnTotal) + rollResult;
      turnTotal = newTotal;
      $("#turn-total").text(turnTotal);
    }

  });

  $("#btn-hold1").click(function(){
    player1Score = turnTotal + parseInt(player1Score);
    turnTotal = 0
    if (player1Score >=100 && multiDice != "2dice") {
      alert(" PLAYER 1 WINNER ");
    } else if (player1Score >= 200){
      alert("PLAYER 1 WINNER");
    }
      else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player1").text(player1Score);
    $("#player1Buttons").hide();
    $("#player2Buttons").show();
    }

  });
  $("#btn-roll2").click(function(){
    $(".lose").remove();
    if (multiDice === "1dice"){
      // $("#roll-result").text(" ");
      rollResult = rollDice();
      $("#roll-result").append(rollResult + ", ");
      } else {
      rollResult = rollDice2();
      $("#roll-result").append(rollResult + ", ");
      }
      if(resetArray[0] === "true"){
        player2Score = 0;
        $("#Player2").text(player2Score);
        alert("BUAHHAHAHHAH");
        $("#player2Buttons").hide();
        $("#player1Buttons").show();
        resetArray.shift();
      }
      if(oneArray[0] === "true") {
        turnTotal = 0;
        $("#turn-total").text(turnTotal);
        $("#roll-result").html("<span class='lose'>Rolled a 1. YOU LOSE</span>");
        $("#player2Buttons").hide();
        $("#player1Buttons").show();
        oneArray.shift();
        console.log("oneArray has been cleared");
        console.log(oneArray);
      } else {

        var newTotal = parseInt(turnTotal) + rollResult;
        turnTotal = newTotal;
        $("#turn-total").text(turnTotal);
      }

    });

  $("#btn-hold2").click(function(){
    player2Score = turnTotal + parseInt(player2Score);
    turnTotal = 0
    if (player2Score >=100 && multiDice != "2dice") {
      alert(" PLAYER 2 WINNER ");
    } else if (player2Score >= 200){
      alert("PLAYER 2 WINNER");
    }
      else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player2").text(player2Score);
    $("#player2Buttons").hide();
    $("#player1Buttons").show();
    }
  });
});
