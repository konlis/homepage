const name = "Konrad";
console.log(
  `Cześć mam na imię ${name}! Ty też chesz wkroczyć na drogę fontendowca ?`
);

const jsText = document.querySelector(".footer__text--js");
console.log("jstext", jsText);
jsText.innerHTML = "Strona stworzona w ramach kursu WTF Maćka Korsana.";

const headerTitle = document.querySelector(".header__title");
console.log(headerTitle)

headerTitle.innerText = "Ścieżka Frontendowca"