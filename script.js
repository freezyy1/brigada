// #TODO перенести этот код в index.html
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    console.log(12321);
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Correctly access the username and password fields
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Create the user data object
      const userData = {
        username: username,
        password: password,
      };
  
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
  
      // Redirect to the success.html page
      window.location.href = "success.html";
    });
  });