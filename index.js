for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
    
});
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {

        case "w":
            var tom1 = new Audio('sounds/tom (13).wav');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom (6).wav');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom (4).wav');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom (1).wav');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/clap (4).wav');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/cymbal (4).wav');
            crash.play();
            break;
        case "l":
            //var kick = new Audio('sounds/bass (4).wav');
            var kick1 = new Audio('sounds/kick (4).wav');
            //kick.play();
            kick1.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}