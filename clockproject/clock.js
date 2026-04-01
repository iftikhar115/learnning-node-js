const clock = document.querySelector('#box');
function newtime() {
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = time;
    clock.style.fontSize = '50px';
}
newtime();
setInterval(newtime, 1000)