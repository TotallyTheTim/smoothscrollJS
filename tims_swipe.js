document.addEventListener("mousedown", function (event) {
    clickDown(event);
});
document.addEventListener("mouseup", function (event) {
    clickUp(event);
});


let oldPosition;
function clickDown(event) {
    oldPosition = event.clientY;
}

function clickUp(event) {

    if (event.clientY < oldPosition-100){
        TryUp();
    }
    else if (event.clientY > oldPosition+100){
        TryDown();
    }
}
