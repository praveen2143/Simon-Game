var colors = ["green", "red", "yellow", "blue"];
var selectedColors = [];
var clickedColors = [];

$(document).on("keydown",function(){
    level = 0;
    nextSequence();
console.log("hsjhsi");

});
function checkAnswer(last){
    
    for(i = 0; i < selectedColors.length;i++){
        if(selectedColors[i] != clickedColors[i]) return false;
    }
    return true;
}
    
function nextSequence(){
    clickedColors = [];
    $("h1").text("Level "+ level);
    var chosenColor = colors[randomNumberGenerator()];
    selectedColors.push(chosenColor);
    
    $("." + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
}
function reset(){
    selectedColors = [];
    clickedColors = [];
    $("h1").text("Press A Key to Start");
}
$(".btn").click(function(event){
    var color = $(this).attr("id");
    console.log(clickedColors);
    console.log(selectedColors);
    playSound(color);
    clickedColors.push(color);
    console.log(clickedColors);
    animatePress(color);
    if(selectedColors.length == clickedColors.length){
        console.log(checkAnswer());
        if(checkAnswer()){
            $("h1").text("Correct Answer! ");
            setTimeout(function(){
                nextSequence();
            }, 1500);
        }else{
            $("h1").text("Wrong Answer! ");
            setTimeout(function(){
                reset();
            }, 1500);
        }

    }
    console.log();

});
function animatePress(name) {
    $("#"+name).addClass("pressed");
    setTimeout(function(){
        $("#"+name).removeClass("pressed");
    }, 100);
}
function playSound(name) {
    var path = "./sounds/" + name + ".mp3";
    console.log(path);
    var sound = new Audio(path);
    sound.play();
}

function randomNumberGenerator(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}