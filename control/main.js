// NCIE and CLEAN finallly

/* here we set up some variables to store the elements we want to create */
var redBox = $('<div class="red box"></div>');
var roseBox = $('<div class="rose box"></div>');
var orangeBox = $('<div class="orange box"></div>');
var yellowBox = $('<div class="yellow box"></div>');
var limeBox = $('<div class="lime box"></div>');
var jadeBox = $('<div class="jade box"></div>');
var ltblueBox = $('<div class="ltblue box"></div>');
var blueBox = $('<div class="blue box"></div>');
var brownBox = $('<div class="brown box"></div>');
var beigeBox = $('<div class="beige box"></div>');
var blackBox = $('<div class="black box"></div>');
var whiteBox = $('<div class="white box"></div>');
var grayBox = $('<div class="gray box"></div>');


/* then we use jquery's clone and appendTo methods to copy and add the new elements to the .canvas container when we click on one of the buttons */
$(".add-red").click(function () {
  redBox.clone().appendTo(".canvas");
});

$(".add-rose").click(function () {
  roseBox.clone().appendTo(".canvas");
});

$(".add-orange").click(function () {
  orangeBox.clone().appendTo(".canvas");
});

$(".add-yellow").click(function () {
  yellowBox.clone().appendTo(".canvas");
});

$(".add-lime").click(function () {
  limeBox.clone().appendTo(".canvas");
});

$(".add-jade").click(function () {
  jadeBox.clone().appendTo(".canvas");
});

$(".add-ltblue").click(function () {
  ltblueBox.clone().appendTo(".canvas");
});

$(".add-blue").click(function () {
  blueBox.clone().appendTo(".canvas");
});

$(".add-brown").click(function () {
  brownBox.clone().appendTo(".canvas");
});

$(".add-beige").click(function () {
  beigeBox.clone().appendTo(".canvas");
});

$(".add-black").click(function () {
  blackBox.clone().appendTo(".canvas");
});

$(".add-white").click(function () {
  whiteBox.clone().appendTo(".canvas");
});

$(".add-gray").click(function () {
  grayBox.clone().appendTo(".canvas");
});

$(".clear-btn").click(function(){
    $(".canvas").children().remove();
});

// $(".clear-one").click(function(){
//     $(".canvas").children().slice(0, -1);
// });

$(".reveal").click(
    function() {
        $(".result").show();
        $(".reveal").hide();
    }
)