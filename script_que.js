document.addEventListener("DOMContentLoaded", function () {
    const healthSurveyForm = document.getElementById("health-survey-form");

    healthSurveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const feeling = document.querySelector('input[name="feeling"]:checked').value;
        const symptoms = document.getElementById("symptoms").value;
        const pulse = document.getElementById("pulse").value;
        const sugar = document.getElementById("sugar").value;

        const healthData = {
            feeling: feeling,
            symptoms: symptoms,
            pulse: pulse,
            sugar: sugar,
        };

        const userData = localStorage.getItem("userData");

        if (!userData) {
            window.location.href = "index.html";
        } else {
            const userInfo = JSON.parse(userData);
            const combinedData = {
                user: userInfo,
                health: healthData,
            };

            // Сохраняем объединенные данные в localStorage
            localStorage.setItem("combinedData", JSON.stringify(combinedData));

            window.location.href = "metrics.html";
        }

        healthSurveyForm.reset();
    });
});
