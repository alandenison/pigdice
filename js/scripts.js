// function runningTotal(base, roll) {
//  this.base = base;
//  this.roll = roll;
// };


$(document).ready(function(){
 $("#btn-roll").click(function(){

   var roll = Math.floor((Math.random() * 6) + 1);
   $("#roll-result").text(roll);

 });
});
