import { setCookie, getCookie } from './util.js';

let alerted = getCookie("epilepsy") ? parseInt(getCookie("epilepsy")) : 0;

if (alerted != 1) {
    alert("This website may contain epilepsy inducing visual content. Browse at your own risk!");
    setCookie("epilepsy", 1, 7);
}