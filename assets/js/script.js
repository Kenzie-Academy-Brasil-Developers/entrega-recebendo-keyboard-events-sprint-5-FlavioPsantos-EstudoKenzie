let boxTop = 200;
let boxLeft = 200;
'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (event.key === 'ArrowDown') {
        boxTop += 10
    } else if (event.key === 'ArrowUp') {
        boxTop -= 10;
    } else if (event.key === 'ArrowRight') {
        boxLeft += 10;
    } else if (event.key === 'ArrowLeft') {
        boxLeft -= 10;
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
});