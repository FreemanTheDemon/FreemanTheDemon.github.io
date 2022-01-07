const title = document.querySelector('#title');

let count = 0;
let blinkInterval = setInterval(() => {
    if (count === 0) {
        title.textContent = 'Benjamin Freeman Bird II >'
        count++;
    } else if (count === 1) {
        title.textContent = 'Benjamin Freeman Bird II >>' 
        count++;
    } else if (count === 2) {
        title.textContent = 'Benjamin Freeman Bird II >>>' 
        count++;
    } else {
        title.textContent = 'Benjamin Freeman Bird II' 
        count = 0;
    }
}, 700);

