


$(document).ready(function(){
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
   alert(turnTotal);
   $("#turn-total").text(turnTotal);
 }



 });
});
