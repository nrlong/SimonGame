var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;


$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenClick = $(this).attr("id");
    userPattern.push(userChosenClick);
    playSound(userChosenClick);
    animatePress(userChosenClick);
    checkAnswer(userPattern.length-1);
});



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userPattern[currentLevel]){
        console.log("success");
        if(userPattern.length === gamePattern.length){
            setTimeout(() => {
               nextSequence(); 
            }, 1000);
        }
        }else{
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(() => {
               $("body").removeClass("game-over") 
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
    }
}

function nextSequence() {
    userPattern=[];
    level++
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed")
    }, 100);

}

function startOver(){
    level = 0
    gamePattern =[]
    started = false;
}