const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailLogin").value.trim();
  const password = document.querySelector("#passwordLogin").value.trim();
  console.log("email" + email + password + "password");
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".collapsible");
//   var instances = M.Collapsible.init(elems, options);
//   instances.open(3);
//   console.log(instances);
// });

var signUpSubmit = document.querySelector(".signup-form");
signUpSubmit.addEventListener("submit", signupFormHandler);
