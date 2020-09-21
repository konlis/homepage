
const jsText = document.querySelector(".footer__text--js");
console.log("jstext", jsText);
jsText.innerHTML = "Strona stworzona w ramach kursu WTF Maćka Korsana.";

const headerTitle = document.querySelector(".header__title");
console.log(headerTitle)

headerTitle.innerText = "Ścieżka Frontendowca"

const greetings = (name, age) => {
  console.log (`Cześć mam na imię ${name} i jestem szczęśliwym ${age} latkiem !`);
}

greetings ('Konrad', 40);