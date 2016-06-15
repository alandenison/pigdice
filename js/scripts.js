


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
  $("#1dice").click(function(){
    $("#amount-dice").text("1 di");
    $("#rules2").fadeOut();
    $("#rules1").fadeIn();
  });
  $("#2dice").click(function(){
    $("#amount-dice").text("2 dice");
    $("#rules1").fadeOut();
    $("#rules2").fadeIn();

  });

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
        $("#losePig").show();
        $("#losePig").fadeOut(5000);
        alert("BUAHHAHAHHAH");
        $("#roll-result").html("<span class='lose'>You rolled TWO 1s, your score is GONE!</span>");
        $("#player1Buttons").fadeOut(00);
        $("#indicator").fadeIn(100);
        $("#indicator").fadeOut(1500);
        $("#player2Buttons").fadeIn(2000);
        resetArray.shift();
      }
    if(oneArray[0] === "true") {
      turnTotal = 0;
      $("#turn-total").text(turnTotal);
      $("#roll-result").html("<span class='lose'>You rolled a 1, your turn is OVER!</span>");
      $("#player1Buttons").fadeOut(00);
      $("#indicator").fadeIn(100);
      $("#indicator").fadeOut(1500);
      $("#player2Buttons").fadeIn(2000);
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
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
    } else if (player1Score >= 200){
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
      alert("PLAYER 1 WINNER");
    }
      else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player1").text(player1Score);
    $("#player1Buttons").fadeOut(00);
    $("#indicator").fadeIn(100);
    $("#indicator").fadeOut(1500);
    $("#player2Buttons").fadeIn(2000);
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
        $("#losePig").show();
        $("#losePig").fadeOut(5000);
        alert("BUAHHAHAHHAH");
        $("#roll-result").html("<span class='lose'>You rolled TWO 1s, your score is GONE!</span>");
        $("#player2Buttons").fadeOut(00);
        $("#indicator").fadeIn(100);
        $("#indicator").fadeOut(1500);
        $("#player1Buttons").fadeIn(2000);
        resetArray.shift();
      }
      if(oneArray[0] === "true") {
        turnTotal = 0;
        $("#turn-total").text(turnTotal);
        $("#roll-result").html("<span class='lose'>You rolled a 1, your turn is OVER!</span>");
        $("#player2Buttons").fadeOut(00);
        $("#indicator").fadeIn(100);
        $("#indicator").fadeOut(1500);
        $("#player1Buttons").fadeIn(2000);
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
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
      alert(" PLAYER 2 WINNER ");
    } else if (player2Score >= 200){
      alert("PLAYER 2 WINNER");
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
    }
      else {
    $("#roll-result").text("");
    $("#turn-total").text("");
    $("#Player2").text(player2Score);
    $("#player2Buttons").fadeOut(00);
    $("#indicator").fadeIn(100);
    $("#indicator").fadeOut(1500);
    $("#player1Buttons").fadeIn(2000);
    }
  });
});
