window.onload = function () {
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("password");

  const passwordMsg = document.createElement("div");
  const loginMsg = document.createElement("div");

  passwordMsg.style.color = "red";
  loginMsg.style.color = "green";

  passwordInput.parentNode.insertBefore(passwordMsg, passwordInput.nextSibling);
  passwordInput.parentNode.insertBefore(loginMsg, passwordMsg.nextSibling);

  function checkPasswordStrength(password) {
    const issues = [];

    if (password.length < 8) {
      issues.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      issues.push("an uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      issues.push("a lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      issues.push("a number");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      issues.push("a special character (!@#$%^&*)");
    }

    return issues;
  }

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const issues = checkPasswordStrength(password);

    if (issues.length > 0) {
      passwordMsg.textContent = "Weak password. Add: " + issues.join(", ");
      loginMsg.textContent = "";
    } else {
      passwordMsg.textContent = "Strong password";
      loginMsg.textContent = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const password = passwordInput.value;
    const issues = checkPasswordStrength(password);

    if (issues.length > 0) {
      passwordMsg.textContent = "Password not strong enough. Add: " + issues.join(", ");
      loginMsg.textContent = "";
    } else {
      // Redirect to home.html
      window.location.href = "home.html";
    }
  });
};