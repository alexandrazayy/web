// Выбираем кнопку
const btn = document.querySelector(".Theme-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
    // Если текущий адрес содержит "light-theme.css"
    theme.getAttribute("href") == "./styles/light.css"? theme.href = "./styles/dark.css" : theme.href = "./styles/light.css";

});