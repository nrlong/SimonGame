var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];


$(".btn").click(function(){
    var userChosenClick = $(this).attr("id");
    userPattern.push(userChosenClick);
    playSound(userChosenClick);
    animatePress(userChosenClick);
})

function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
       $("#" + currentColor).removeClass("pressed") 
    }, 100);
    
}