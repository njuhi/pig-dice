var total = 0;
var anyNumber;
var output;
var dice  = {
  sides: 6,
  roll: function () {
    var anyNumber = Math.floor(Math.random() * 6) + 1;
       total+=anyNumber
        if(1 < anyNumber){
          $('.dice').prop(false);
          return anyNumber;
        }else if (anyNumber===1) {
          total=0
          $('.dice').
          prop(true);
          $('.dice').prop(false)
        }




     //return randomNumber += 1;

  }
}





function printNumber(number) {
  var player1 = document.getElementById('player1');
  player1.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

//roll2: function () {
  //var anyNumber = Math.floor(Math.random() * 6) + 1;
    // total+=anyNumber
      //if(1 < anyNumber){
        //$('.dice').prop(false);
        //return anyNumber;
      //}else if (anyNumber===1) {
        //total=0
      //   $('.dice').prop(true);
      //   $('.dice').prop(false)
      // }
      //
      //
      //  function rolldice() {
      //   var output = anyNumber.roll();
      //   return output;
      //
      // }
        // roll: function () {
        //   var anyNumber = Math.floor(Math.random() * 6) + 1;
        //      total+=anyNumber
        //       if(1 < anyNumber){
        //         $('.dice').prop(false);
        //         return anyNumber;
        //       }else if (anyNumber===1) {
        //         total=0
        //         $('.dice').
        //         prop(true);
        //         $('.dice').prop(false)
        //       }
        //
        //
        //
        //       function printNumber(number) {
        //         var player2 = document.getElementById('player2');
        //         player2.innerHTML = number;
        //       }
        //
        //       var button = document.getElementById('button');
        //
        //       button.onclick = function() {
        //         var result = dice.roll();
        //         printNumber(result);
        //       };
