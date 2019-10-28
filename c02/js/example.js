//creating variables with expressions assign

var gretting = 'Hello ';
var name = 'Molly';
var message = ', please check your Items';
//concatanete the message using sttring operator

var welcome = gretting + name + message;

var sign = 'Montague house';
var tiles = sign.length;
console.log(tiles);
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Assigments of variables using the DOM

var el = document.getElementById('greet');
el.textContent = welcome;


var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;    

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elSubTotal =document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

var elGt = document.getElementById('grandTotal');
elGt.textContent = grandTotal;
elGt.style.color = "red"; 
