

// document.addEventListener("DOMContentLoaded", function() {
//     var i = 0;
// var txt = "Fate Brought you here! Well Probably I did..."; /* The text */
// var speed = 50;  The speed/duration of the effect in milliseconds 
//   if (i < txt.length) {
//     document.getElementById("typeWriterEffect").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);s
//   }
// });

// function typeWriter() {

// }
//s


var text = ["<span style='color: red'><a href='https://github.com/ayushxx7'>I'm Here</a></span>", "<a href='https://facebook.com/ayush.mandowara'>I'm Also Here</a>", "<a href='https://www.twitter.com/ayushxx7'>And Here</a>", "<a href=https://www.google.co.in/search?q=ayushxx7>Because, Why Not?</a>"];
var counter = 0;
var elem = document.getElementById("here");
counter_color = ["red", "green", "blue", "white"];

function change() {
  //elem.className += " colorlink";   
  //elem.style.color = color[counter];
  elem.innerHTML = text[counter];
  elem.style.color = counter_color[counter];
  counter++;
  if (counter >= text.length) {counter = 0;}
}
setInterval(change, 2500);

$('#vr').on('click', function (event) {
  window.open("https://drive.google.com/file/d/0ByGd2xHHajBgTHJKR3U4ZldhN2s/view?usp=sharing", "_blank");
});

$("#af").click(function () {
  $("#awhat").toggle();
  $("#ahow").toggle();
});

$("#awhat").click(function () {
  $("#awhat1").toggle();
});

$("#ahow").click(function () {
  $("#ahow1").toggle();
});


$("#fa").click(function () {
  $("#fwhat").toggle();
  $("#fhow").toggle();
});

$("#fwhat").click(function () {
  $("#fwhat1").toggle();
});

$("#fhow").click(function () {
  $("#fhow1").toggle();
});


$("#ww").click(function () {
  $("#cm").toggle();
  $("#ad").toggle();
  $("#adt").toggle();
});

$("#cm").click(function () {
  $("#cwhat").toggle();
  $("#cwhy").toggle();
  $("#chow").toggle();
});


$("#cwhat").click(function () {
  $("#cwhat1").toggle();
});

$("#chow").click(function () {
  $("#chow1").toggle();
});

$("#cwhy").click(function () {
  $("#cwhy1").toggle();
});

$("#ad").click(function () {
  $("#adwhat").toggle();
  $("#adwhy").toggle();;
});


$("#adwhat").click(function () {
  $("#adwhat1").toggle();
});


$("#adwhy").click(function () {
  $("#adwhy1").toggle();
});


$("#adt").click(function () {
  $("#adtwhat").toggle();
  $("#adtwhy").toggle();
  $("#adthow").toggle();
});


$("#adtwhat").click(function () {
  $("#adtwhat1").toggle();
});

$("#adthow").click(function () {
  $("#adthow1").toggle();
});

$("#adtwhy").click(function () {
  $("#adtwhy1").toggle();
});


$("#zl").click(function () {
  $("#zlwhat").toggle();
  $("#zlhow").toggle();
});


$("#zlwhat").click(function () {
  $("#zlwhat1").toggle();
});

$("#zlhow").click(function () {
  $("#zlhow1").toggle();
});



