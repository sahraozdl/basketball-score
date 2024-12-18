let homeScor = 0;
let guestScor = 0;
document.getElementById("sumHome").innerText = homeScor;
document.getElementById("sumGuest").innerText = guestScor;
let sumHome=document.getElementById("sumHome");
let sumGuest=document.getElementById("sumGuest");

let homePlus1 = document.getElementById("homePlus1");
let homePlus2 = document.getElementById("homePlus2");
let homePlus3 = document.getElementById("homePlus3");
homePlus1.addEventListener("click", homeAddOne);
homePlus2.addEventListener("click", homeAddTwo);
homePlus3.addEventListener("click", homeAddThree);

function homeAddOne(){
 homeScor = homeScor + 1;
 sumHome.innerText= homeScor;
}
function homeAddTwo(){
  homeScor = homeScor + 2;
  sumHome.innerText= homeScor;
 }
function homeAddThree(){
  homeScor = homeScor + 3;
  sumHome.innerText= homeScor;
}

let guestPlus1 = document.getElementById("guestPlus1");
let guestPlus2 = document.getElementById("guestPlus2");
let guestPlus3 = document.getElementById("guestPlus3");
guestPlus1.addEventListener("click", guestAddOne);
guestPlus2.addEventListener("click", guestAddTwo);
guestPlus3.addEventListener("click", guestAddThree);

function guestAddOne(){
 guestScor = guestScor + 1;
 sumGuest.innerText= guestScor;
}
function guestAddTwo(){
  guestScor = guestScor + 2;
  sumGuest.innerText= guestScor;
 }
function guestAddThree(){
  guestScor = guestScor + 3;
  sumGuest.innerText= guestScor;
}