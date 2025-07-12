window.onload = function () {
  const form = document.querySelector("form"); // Selects the first <form> element
  const passwordInput = document.getElementById("password");

  // Create and insert message containers dynamically
  const passwordMsg = document.createElement("div");
  const loginMsg = document.createElement("div");

  passwordMsg.style.color = "red";
  loginMsg.style.color = "green";

  // Insert after password input
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

  // Show live feedback
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const issues = checkPasswordStrength(password);

    if (issues.length > 0) {
      passwordMsg.textContent = "Weak password. Add: " + issues.join(", ");
      loginMsg.textContent = "";
    } else {
      passwordMsg.textContent = "✅ Strong password";
      loginMsg.textContent = "";
    }
  });

  // On form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const password = passwordInput.value;
    const issues = checkPasswordStrength(password);

    if (issues.length > 0) {
      passwordMsg.textContent = "Password not strong enough. Add: " + issues.join(", ");
      loginMsg.textContent = "";
    } else {
      passwordMsg.textContent = "";
      loginMsg.textContent = "✅ You are logged in!";
      form.reset();
    }
  });
};
