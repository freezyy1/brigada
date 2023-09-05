document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Собираем данные из формы
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Создаем объект данных о пользователе
        const userData = {
            username: username,
            password: password,
        };

        // Сохраняем данные о пользователе в localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Перенаправляем на страницу success.html
        window.location.href = "success.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const healthSurveyForm = document.getElementById("health-survey-form");

    healthSurveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Собираем данные из формы
        const feeling = document.getElementById("feeling").value;
        const symptoms = document.getElementById("symptoms").value;

        // Создаем объект данных, который вы можете отправить на сервер
        const formData = {
            feeling: feeling,
            symptoms: symptoms,
        };

        // Отправляем данные на сервер (здесь просто выводим их в консоль)
        console.log("Отправка данных на сервер:", formData);

        // Очистка формы после отправки (замените эту часть на реальную отправку на сервер)
        healthSurveyForm.reset();
    });
});
