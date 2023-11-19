
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".drum");

    for (let i = 0; i < buttons.length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
    }

    function handleclick() {
        var innerhtml = this.innerHTML;
        makesound(innerhtml);
        buttonanimation(innerhtml);
    }

    document.addEventListener("keypress",function(event){
        makesound(event.key);
    });
});



function makesound(key){
    switch (key) {

        case "w":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }
}

function buttonanimation(currentbutton) {
   var buttonanimated = document.querySelector("."+currentbutton);
   buttonanimated.classList.add("pressed");

   setTimeout(function() {
    buttonanimated.classList.remove("pressed");
   }, 100);
    
}