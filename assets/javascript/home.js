$(document).ready(function() {
  $(".bambooemoji").click(function(){
    $(".background").hide();
    $(".light").hide();
    $(".water").hide();
    $(".city").hide();
    $(".bamboo").fadeIn(800);
  });
});

$(document).ready(function() {
  $(".wateremoji").click(function(){
    $(".background").hide();
    $(".bamboo").hide();
    $(".city").hide();
    $(".light").hide();
    $(".water").fadeIn(800);
  });
});

$(document).ready(function() {
  $(".cityemoji").click(function(){
    $(".background").hide();
    $(".bamboo").hide();
    $(".water").hide();
    $(".light").hide();
    $(".city").fadeIn(800);
  });
});

$(document).ready(function() {
  $(".lightbulbemoji").click(function(){
    $(".background").hide();
    $(".bamboo").hide();
    $(".water").hide();
    $(".city").hide();
    $(".light").fadeIn(800);
  });
});
