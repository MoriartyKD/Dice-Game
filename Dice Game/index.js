var p1= Math.floor(Math.random()*6 ) + 1;
var p2= Math.floor(Math.random()*6 ) + 1;

var src1= "images/dice" + p1 + ".png";
var src2= "images/dice" + p2 + ".png";

document.querySelector(".img1").setAttribute("src" , src1);
document.querySelector(".img2").setAttribute("src" , src2);

/*
if(p1 === 1)
  document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
else
if(p1 === 2)
  document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
else
if(p1 === 3)
  document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
else
if(p1 === 4)
  document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
else
if(p1 === 5)
  document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
else
  document.querySelector(".img1").setAttribute("src" , "images/dice6.png");




  if(p2 === 1)
    document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
  else
  if(p2 === 2)
    document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
  else
  if(p2 === 3)
    document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
  else
  if(p2 === 4)
    document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
  else
  if(p2 === 5)
    document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
  else
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png");

*/

  if(p1>p2)
    document.querySelector("h1").textContent = "🎈PLAYER 1 WINS";
  else
  if(p2>p1)
    document.querySelector("h1").textContent = "PLAYER 2 WINS🎈";
  else
    document.querySelector("h1").textContent = "!!DRAW!!";
