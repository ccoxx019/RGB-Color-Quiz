var colors = generateRandomColors(6);

var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    }
})


resetButton.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    //reset title background color
    h1.style.background = "#232323";
    //reset resetButton text
    resetButton.textContent = "New Colors";
    //reset messageDisplay
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //get color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare clicked square color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.background = "#232323" //fade square by making it same as background color on CSS sheet
            messageDisplay.textContent = "Try Again";
        }
    });
};


//function to change all colors to pickedColor when game is won
function changeColors(color) {
    //loop through all squares, change colors to match pickedColor
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a "red"
    let r = Math.floor(Math.random() * 256);
    //pick a "green"
    let g = Math.floor(Math.random() * 256);
    //pick a "blue"
    let b = Math.floor(Math.random() * 256);
    //combine colors
    return "rgb(" + r + ", " + g + ", " + b + ")";
}