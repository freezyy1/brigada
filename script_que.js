document.addEventListener("DOMContentLoaded", function () {
    const healthSurveyForm = document.getElementById("health-survey-form");

    healthSurveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const health_condition = document.getElementById("health_condition").value;
        const symptoms = document.getElementById("symptoms").value;
        const pulse = document.getElementById("pulse").value;
        const sugar = document.getElementById("sugar").value;

        const healthData = {
            health_condition: health_condition,
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

            // Save the combined data to localStorage
            localStorage.setItem("combinedData", JSON.stringify(combinedData));

            window.location.href = "metrics.html";
        }

        healthSurveyForm.reset();
    });
});
