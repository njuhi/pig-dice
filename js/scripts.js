var Total = 21;
var anyNumber;
var output;
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
      return randomNumber += 1;

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
