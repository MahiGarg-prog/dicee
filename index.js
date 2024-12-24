let t1=0;
let t2=0;
function start()              {
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var btnText= document.querySelector('.btn');

btnText.innerHTML="NEXT ROLL";
var p1= document.querySelector('.p1');
var p2= document.querySelector('.p2');
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  p1.innerHTML+="<br> 1 ";
  p2.innerHTML+="<br> 0";
  t1+=1
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  p2.innerHTML+=" <br> 1" ;
  p1.innerHTML+="<br> 0 ";
  t2+=1
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
  p2.innerHTML+=" <br> 0" ;
  p1.innerHTML+="<br> 0 ";
}
var tt1=document.querySelector(".t1");
var tt2=document.querySelector(".t2");
tt1.textContent=`total: ${t1}`;
tt2.textContent=`total: ${t2}`;
}
