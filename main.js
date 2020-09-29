
const jsText = document.querySelector(".footer__text--js");
console.log("jstext", jsText);
jsText.innerHTML = "Strona stworzona w ramach kursu WTF Maćka Korsana.";

const greetings = (name, age) => {
  console.log (`Cześć mam na imię ${name} i jestem szczęśliwym ${age} latkiem !`);
}

greetings ('Konrad', 40);

const hamburger = document.querySelector('.hamburger--js');
console.log('hamburger', hamburger)
hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
console.log("nav", nav);
nav.classList.toggle('navigation--open')
})