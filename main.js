let header = document.querySelector("header");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let h1 = document.getElementById('h1')

btn1.addEventListener("click", () => {
    h1.innerHTML = "Pizza";
    header.classList.add("no1");
});

btn2.addEventListener("click", () => {
    h1.innerHTML = "Sendwich";
    header.classList.add("no2");
});

btn3.addEventListener("click", () => {
    h1.innerHTML = "Osh";
    header.classList.add("no3");
});

btn4.addEventListener("click", () => {
    h1.innerHTML = "Donar";
    header.classList.add("no4");
});

btn5.addEventListener("click", () => {
    h1.innerHTML = "Lavash";
    header.classList.add("no5");
});

btn6.addEventListener("click", () => {
    h1.innerHTML = "Beshbarmoq";
    header.classList.add("no6");
});

btn1.addEventListener("click", () => {
    h1.innerHTML = "Pizza";
    header.classList.add("no1");
});