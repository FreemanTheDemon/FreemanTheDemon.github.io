const title = document.querySelector('#title');
let blink = false;

let blinkInterval = setInterval(() => {
    if (blink) {
        title.textContent = 'Benjamin Freeman Bird II'
        blink = false;
    } else {
        title.textContent = 'Benjamin Freeman Bird II_' 
        blink = true;
    }
}, 700);

