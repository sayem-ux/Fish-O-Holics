// NOTE:
// The first pause is used for the marquee effect that starts with the page
// The second pause is used when the marquee effect was manually re-started after the first pause. This causes a loop :)
// The Un-Pause is used for both first and second pause.

 
// Create a marquee effect : DONE

const para1 = document.getElementById("para1");
animate(para1);

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
    element.parentElement.addEventListener("mouseover", function(e) {
        clearInterval(intervalID);
    })

    // Un-Pause marque effect when hovering over away from text : DONE
    element.parentElement.addEventListener("mouseout", function() {
        var intervalID2 = setInterval(() => {
             element.style.marginLeft = --flag + "px";
     
             if (elementWidth == -flag) {
                 flag = parentWidth;
             }
         }, 7);

        // Pause(2) marque effect when hovering over text : DONE
        element.parentElement.addEventListener("mouseover", function() {
        clearInterval(intervalID2);
    })
     })
}






