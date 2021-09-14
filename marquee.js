
// Create a marquee effect : DONE

function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    var intervalID = setInterval(() => {
            element.style.marginLeft = --flag + "px";
    
            if (elementWidth == -flag) {
                flag = parentWidth;
            }
        }, 7);

// Pause marque effect when hovering over text : DONE
// Un-Pause marque effect when hovering over text : DONE
    element.addEventListener("mouseover", function(e) {
        clearInterval(intervalID);
    })
}



const para1 = document.getElementById("para1");
animate(para1);

