var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var correctColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = correctColor;

for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === correctColor){
            messageDisplay.textContent = "Correct";
            reset.textContent = "Play Again";
            SetAllColors();
            h1.style.backgroundColor = correctColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function SetAllColors(){
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = correctColor;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var colors = new Array();
    var first, second, third;
    for(var i=0; i<num; i++){
        first = Math.floor(Math.random()*256);
        second = Math.floor(Math.random()*256);
        third = Math.floor(Math.random()*256);
        colors[i] = "rgb("+first+", "+second+", "+third+")";
    }
    return colors;
}

reset.addEventListener("click", function(){
    colors = generateRandomColors(6);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for(var i=0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})