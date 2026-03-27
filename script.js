const toggle = document.getElementById("langToggle");
const ruLabel = document.getElementById("langRu");
const enLabel = document.getElementById("langEn");
const projectLink = document.getElementById("projectLink");
const translatable = document.querySelectorAll("[data-ru][data-en]");

let currentLang = "ru";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  translatable.forEach((element) => {
    element.innerHTML = element.getAttribute(`data-${lang}`);
  });

  if (lang === "ru") {
    projectLink.setAttribute(
      "href",
      "mailto:eevee.krol@gmail.com?subject=%D0%9E%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82"
    );
    ruLabel.classList.add("active");
    enLabel.classList.remove("active");
  } else {
    projectLink.setAttribute(
      "href",
      "mailto:eevee.krol@gmail.com?subject=Start%20a%20project"
    );
    ruLabel.classList.remove("active");
    enLabel.classList.add("active");
  }
}

toggle.addEventListener("click", function () {
  if (currentLang === "ru") {
    setLanguage("en");
  } else {
    setLanguage("ru");
  }
});

setLanguage("ru");