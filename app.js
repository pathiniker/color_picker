var colors = ['red', 'blue', 'yellow', 'green'];
var correctColor;

//short-hand doc ready
$(function() {
    createBoxes();
    registerListeners();
    chooseRandomBlock();
}); //end doc ready

function createBoxes() {
    colors.forEach(function(color) {
        var $box = $('<div></div>');
        $box.addClass('box');
        $box.data('color', color);
        $box.css('background-color', color);
        $('#game').append($box);
    });
} //end createBoxes
    function chooseRandomBlock() {
        var index = randomNumber(0, colors.length - 1);
        correctColor = colors[index];
        $('#correct-color').text(correctColor);
    } //chooseRandomBlock

    function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function registerListeners() {
  $('#game').on('click', 'box', handleClick);

}

function handleClick() {
  var $clickedBox = $(this);
  var color = $clickedBox.data('color');

  if (color === correctColor) {
    //success
    $('#message').text('Correct!');
    chooseRandomBlock;
  } else {
    $('#message').text('Try again!');
  }
}
