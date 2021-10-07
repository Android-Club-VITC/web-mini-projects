var numsquares =9;
var colors = generaterandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickcolor = pick();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset =document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numsquares =3;
    colors= generaterandomColors(numsquares);
    pickcolor = pick();
    colordisplay.textContent = pickcolor;
    for(var i =0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display = "none";

        }
        
    }
})
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numsquares =9;
    colors= generaterandomColors(numsquares);
    pickcolor = pick();
    colordisplay.textContent = pickcolor;
    for(var i =0; i<squares.length; i++)
    {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";        
    }
})

reset.addEventListener("click", function()
{
    colors = generaterandomColors(numsquares);
    pickcolor = pick();
    colordisplay.textContent = pickcolor;

    messagedisplay.textContent ="";
    this.textContent = "New Colors"

    for(var i = 0; i< squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
} )
colordisplay.textContent = pickcolor;


for(var i = 0; i < squares.length; i++)
{
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function()
    {
        var clickedcolor = this.style.background;
        // compare to the color
        if(clickedcolor === pickcolor)
        {
            messagedisplay.textContent = "You Win !";
            reset.textContent = "Play Again ?";
            changecolors(clickedcolor);
            h1.style.background = clickedcolor;
        }
        else
        {
            this.style.background = "black";
            messagedisplay.textContent = "Try Again !";
        }
    });
}

function changecolors(color){
    //loop to change color
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.background = color;
    }
}
function pick()
{
   var random = Math.floor(Math.random()* colors.length);
   return colors[random];
}
function generaterandomColors(num)
{
    var arr = []
    for(var i = 0; i<num; i++)
    {
        //push new ranodm
        arr.push(randomcolor())
    }
    return arr 
}
function randomcolor()
{
    // random number based on largest possible
    var red =Math.floor(Math.random()*256);
    var green =Math.floor(Math.random()*256);
    var blue =Math.floor(Math.random()*256);
    return "rgb("+ red + ", " + green + ", " + blue + ")";
}
