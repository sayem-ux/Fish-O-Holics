
function myFunction() 
{
    const name = document.getElementsByTagName("input");
    const nameVal = name[2].value;
    document.getElementById("result").innerHTML= nameVal + ", you will be notified in 7-12 business days.";
    
} 