document.addEventListener("DOMContentLoaded", function () {
    // Извлекаем данные о пользователе и опросе из localStorage
    const combinedData = localStorage.getItem("combinedData");

    if (!combinedData) {
        // Если данных нет, перенаправляем пользователя на страницу с опросом
        window.location.href = "index.html";
    } else {
        // Если есть данные, отображаем их на странице
        const userData = JSON.parse(combinedData).user;
        const healthData = JSON.parse(combinedData).health;

        const userContainer = document.getElementById("user-info");
        const healthContainer = document.getElementById("health-info");

        // Отображаем данные о пользователе
        userContainer.innerHTML = `<p><strong>Имя пользователя:</strong> ${userData.username}</p>`;

        // Отображаем данные об опросе
        healthContainer.innerHTML = `
            <p><strong>Как вы себя чувствуете сегодня:</strong> ${healthData.feeling}</p>
            <p><strong>Симптомы болезни:</strong> ${healthData.symptoms}</p>
            <p><strong>Пульс:</strong> ${healthData.pulse}</p>
            <p><strong>Сахар в крови:</strong> ${healthData.sugar}</p>
            
        `;
    }
});
