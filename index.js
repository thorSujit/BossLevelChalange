var randomNum1 = Math.floor(Math.random()*6)+1;

var randomDice = "dice"+ randomNum1 +".png"; //dice1.png to  dice6.png

var randomImages = "images/" + randomDice; //Images/dice1.png to dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImages)

// console.log(randomNum);


var randomNum2 = Math.floor(Math.random()*6)+1;

var imageRandom ="dice"+randomNum2+".png";

var imageSource2 = "images/"+imageRandom;

var image2 = document.querySelectorAll("img")[1];


image2.setAttribute("src",imageSource2);


if(randomNum1>randomNum2){
    document.querySelector('h1').innerHTML="Palyer 1 Win !"
}else if(randomNum1<randomNum2){
    document.querySelector('h1').innerHTML =" Playeer 2 win !"
}else{
    document.querySelector('h1').innerHTML = " Drop !"
}