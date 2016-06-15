


$(document).ready(function(){
  var turnTotal = [0];
 $("#btn-roll").click(function(){

   var roll = parseInt(Math.floor((Math.random() * 6) + 1));
   $("#roll-result").append(roll + ", ");
   var newTotal = parseInt(turnTotal) + roll;
   turnTotal = newTotal;
   $("#turn-total").text(turnTotal);



 });
});
