$(document).ready(function() {
  $("#tryme").click(function(){
    $(".background").hide();
    $(".bamboo").show();
  });
});


var app = document.getElementById('numone');
var type = new Typewriter(numone, {
    loop: true
});

type.typeString('Student')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Aspiring Data Scientist')
    .pauseFor(2000)
    .deleteChars(7)
    .typeString('Amaetur Photographer')
    .pauseFor(2500)
    .start();
