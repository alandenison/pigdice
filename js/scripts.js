


$(document).ready(function(){
  var player1Score = "0";
  var turnTotal = [0];
 $("#btn-roll").click(function(){

   var roll = parseInt(Math.floor((Math.random() * 6) + 1));
   $("#roll-result").append(roll + ", ");
   if(roll != 1) {
   var newTotal = parseInt(turnTotal) + roll;
   turnTotal = newTotal;
   $("#turn-total").text(turnTotal);
 } else {
   turnTotal = 0;
   $("#turn-total").text(turnTotal);
   $("#roll-result").text("YOU LOSE");
 }

 });
 $("#btn-hold").click(function(){
   player1Score = turnTotal+ parseInt(player1Score);
   turnTotal = 0
   $("#roll-result").text("");
   $("#Player1").text(player1Score);
   alert(player1Score);
 })
});
