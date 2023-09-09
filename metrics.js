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
        const healthContainer_symptoms = document.getElementById("health_symptoms-info");
        const healthContainer_health_condition = document.getElementById("health_condition-info");
        const healthContainer_pulse = document.getElementById("health_pulse-info");
        const healthContainer_sugar = document.getElementById("health_sugar");

        // Отображаем данные о пользователе
        userContainer.innerHTML = `<p>${userData.username}</p>`;


        healthContainer_health_condition.innerHTML = `
            <p><strong>чувства:</strong> ${healthData.health_condition}</p>          
        `;

        healthContainer_symptoms.innerHTML = `
            <p><strong>Симптомы болезни:</strong> ${healthData.symptoms}</p>            
        `;

        healthContainer_pulse.innerHTML = `
            <p><strong>Пульс:</strong> ${healthData.pulse}</p>         
        `;

        healthContainer_sugar.innerHTML = `
            <p><strong>Сахар в крови:</strong> ${healthData.sugar}</p>       
        `;
    }
});
