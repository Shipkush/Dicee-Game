var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6

var randomDiceImage ="dice" +randomNumber1 +".png";//dice1.png-dice6.png

var randoImageSource ="images/" + randomDiceImage; //images/dice1.png-images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randoImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randoImageSource2 ="images/dice" +randomNumber2 + ".png";

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src", randoImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML =" 🥇PLayer 1 Wins!!!";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML =" Player 2 Wins!!!🏆";
}
else
{
   document.querySelector("h1").innerHTML ="Match Draw!!!🤖";
}
