import { setCookie, getCookie } from './util.js';

let luv_counter = document.querySelectorAll("#luvcounter");
let counter = getCookie("counter") ? parseInt(getCookie("counter")) : 0;

document.querySelector("#result").innerHTML = counter;

luv_counter.forEach(function(button) {
    button.addEventListener('click', function() {
        counter++;
        document.querySelector("#result").innerHTML = counter;
        setCookie("counter", counter, 7);
    });
});
