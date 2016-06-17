function Record(nameOne, player1Score, nameTwo, player2Score) {
  this.nameOne = nameOne;
  this.player1Score = player1Score;
  this.nameTwo = nameTwo;
  this.player2Score = player2Score;
}


  var multiDice = "";
  var player1Score = "0";
  var player2Score = "0";
  var turnTotal = [0];
  var oneArray = ["false"];
  // var one = "false";
  resetArray = ["false"];
  rollArray = [];
  playerIds = []
  maxScore = [];
  avatarArray = [];


  var rollDice = function(roll) {
    $(".dicePics").hide();
    $("#playerButtons .btn").hide().show(2700);

    for(i=0; i<=6; i++) {

      var diAnimate = "#dic" + parseInt(Math.floor((Math.random() * 6) + 1));
      $(diAnimate).delay(i*100).show(99).hide(1);

      console.log(diAnimate);
    };

    roll = parseInt(Math.floor((Math.random() * 6) + 1));
    // roll = 100;
    rollArray.unshift(roll);
    var idForDice = "#di" + roll;
    $(idForDice).delay(1500).fadeIn(1);
    if (roll === 1 ){
      oneArray.unshift("true");
      console.log("oneArray: " + oneArray[0] + ". Also the full array is:" + oneArray);
    }
    return roll;
  };

  var rollDice2 = function(roll1, roll2) {
    $(".dicePics").hide();
    $("#dubs").text("");
    $("#playerButtons .btn").hide().show(2700);
    var one = "false";
    for(i=0; i<=6; i++) {

      var diAnimate = "#dic" + parseInt(Math.floor((Math.random() * 6) + 1));
      $(diAnimate).delay(i*100).show(99).hide(1);
     }
    roll1 = parseInt(Math.floor((Math.random() * 6) + 1));
    console.log(roll1);
    roll2 = parseInt(Math.floor((Math.random() * 6) + 1));
    console.log(roll2);


    roll = roll1+roll2;

    var idForDice1 = "#di" + roll1;
    var idForDice2 = "#di" + roll2;
    if (idForDice1 === idForDice2) {
      $("#dubs").append('<img src="img/die_face_' + roll2 + '.png"/>');
      $("#dubs").delay(1500).show(1);
      $(idForDice1).delay(1500).fadeIn(1);
    } else {

    $(idForDice1).delay(1500).fadeIn(1);
    $(idForDice2).delay(1500).fadeIn(1);
    }
    if (roll1 === 1 && roll2 === 1) {
    resetArray.unshift("true");
    }
    else if (roll1 === 1 || roll2 === 1){
    oneArray.unshift("true");
    }
    return roll;
  };





$(document).ready(function(){
  $("#1dice").click(function(){
    $("#amount-dice").text("1 di");
    $("#rules2").fadeOut();
    $("#rules1").fadeIn();
    $("#beginButton").fadeIn();
  });
  $("#2dice").click(function(){
    $("#amount-dice").text("2 dice");
    $("#rules1").fadeOut();
    $("#rules2").fadeIn();
    $("#beginButton").fadeIn();
  });

  $("form#player-names").submit(function(event){
    event.preventDefault();

    var nameOne = $("#player1-name").val();
    var nameTwo = $("#player2-name").val();
    maxScore.push(parseInt($("#startingScore").val()));
    avatarArray.push($("#avatar").val());
    avatarArray.push($("#avatar2").val());
    $("#btn-roll1").append("<img src=" + avatarArray[0] + " alt='ROLL'></img>");
    $("#btn-roll2").append("<img src=" + avatarArray[1] + " alt='ROLL'></img>");
    $(".player-one").text(nameOne);
    $(".player-two").text(nameTwo);
    playerIds.push(nameOne, nameTwo);
    $("#player-names").fadeOut();
    $("#game-page").fadeIn();
    $(".rules-die").fadeOut();
    $("#avatarDiv").hide();
  });

//PLAYER 1 ROLL
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
// PLAYER 1 HOLD BUTTON
  $("#btn-hold1").click(function(){
    player1Score = turnTotal + parseInt(player1Score);
    turnTotal = 0
    if (player1Score >=maxScore[0]) {
      var nameOne = playerIds[0];
      var nameTwo = playerIds[1];
      var gameRecord = new Record(nameOne, player1Score, nameTwo, player2Score);
      console.log("testing gameRecord object " + gameRecord.nameOne);
      $("#gameTracker").append('<li>' + gameRecord.nameOne + ', Won with a score of: ' + gameRecord.player1Score + '. ' + gameRecord.nameTwo + ', SCORE: ' + gameRecord.player2Score);
      alert(" PLAYER 1 WINNER ");
      rollResult = 0;
      player1Score = 0;
      player2Score = 0;
      $("#roll-result").text("");
      $("#turn-total").text("");
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
      } else {
        $("#roll-result").text("");
        $("#turn-total").text("");
        $("#Player1").text(player1Score);
        $("#player1Buttons").fadeOut(00);
        $("#indicator").fadeIn(100);
        $("#indicator").fadeOut(1500);
        $("#player2Buttons").fadeIn(2000);
      }

  });
  //PLAYER 2 ROLL
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
//PLAYER 2 HOLD
  $("#btn-hold2").click(function(){
    player2Score = turnTotal + parseInt(player2Score);
    turnTotal = 0
    if (player2Score >=maxScore[0]) {
      $("#winPig").show();
      $("#winPig").fadeOut(5000);
      var nameOne = playerIds[0];
      var nameTwo = playerIds[1];
      var gameRecord = new Record(nameOne, player1Score, nameTwo, player2Score);
      $("#gameTracker").append('<li>' + gameRecord.nameOne + ', SCORE: ' + gameRecord.player1Score + '. ' + gameRecord.nameTwo + ', WON with a score of: ' + gameRecord.player2Score);
      alert(" PLAYER 2 WINNER ");
      rollResult = 0;
      player1Score = 0;
      player2Score = 0;
      $("#roll-result").text("");
      $("#turn-total").text("");
      $("#diceFaces").hide();
    } else {
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
