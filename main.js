function myFunction() 
{
    const name = document.getElementsByTagName("input");
    const nameVal = name[2].value;
    
    if (nameVal != "") 
    document.getElementById("result").innerHTML= nameVal + ", you will be notified in 7-12 business days.";
    
} 

// function for generating random numbers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var sales = document.getElementsByClassName("item-sale");

for(let i=0; i<getRandomInt(20); i++)
{
    sales[getRandomInt(sales.length)].style.backgroundColor = "yellow";
}

var quoteBorder = document.getElementsByClassName("dark");
quoteBorder[0].addEventListener("mouseenter", ON);
quoteBorder[0].addEventListener("mouseleave", OFF);

function ON(e) {quoteBorder[0].style.border="#e8491d solid 6px";}
function OFF(e) {quoteBorder[0].style.border="";}

var tipsBorder = document.querySelector(".light");
tipsBorder.addEventListener("mouseenter", () => 
    {tipsBorder.style.border= "#35424a solid 6px"});
tipsBorder.addEventListener("mouseleave", () => 
    {tipsBorder.style.border= ""});



