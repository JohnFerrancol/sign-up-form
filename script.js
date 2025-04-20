function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  const oppositeTheme = newTheme === "light" ? "dark" : "light";
  root.className = newTheme;

  document.querySelector(".theme-label").textContent = oppositeTheme;
  document.querySelector(
    ".sign-up-logo"
  ).src = `assets/img/user-${newTheme}.png`;
  document.querySelector(
    ".theme-logo"
  ).src = `assets/img/${oppositeTheme}-mode.png`;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);

function keepFloating() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("keypress", () => {
      if (
        input.value &&
        !input.validity.valid &&
        document.activeElement === input
      ) {
        const label = input.nextElementSibling;
        label.style.top = "5px";
        label.style.fontSize = "12px";
      }
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        const label = input.nextElementSibling;

        label.style.top = "";
        label.style.fontSize = "";
      }
    });
  });
}

keepFloating();

function showErrorMessages() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      if (input.id === "password") {
        const error = input.nextElementSibling.nextElementSibling;
        if (input.validity.tooShort) {
          error.textContent = "Password is too short, make it 8 characters!";
          document.querySelector("div#confirm-password").textContent =
            "Password is too short, make it 8 characters!";
        } else if (input.validity) {
          error.textContent = "";
        }

        if (
          input.value !== document.querySelector("input#confirm-password").value
        ) {
          const label = document.querySelector(
            "input#confirm-password"
          ).nextElementSibling;
          label.style.color = "#ed4337";
          document.querySelector("input#confirm-password").style.borderColor =
            "#ed4337";
          document.querySelector("div#confirm-password").textContent =
            "Passwords do not match!";
        } else if (
          input.validity &&
          !document.querySelector("input#confirm-password").validity.tooShort &&
          input.value &&
          input.value === document.querySelector("input#password").value
        ) {
          const label = document.querySelector(
            "input#confirm-password"
          ).nextElementSibling;
          label.style.color = "#00b14f";
          document.querySelector("input#confirm-password").style.borderColor =
            "#00b14f";
          document.querySelector("div#confirm-password").textContent = "";
        }
      } else if (input.id === "confirm-password") {
        const error = input.nextElementSibling.nextElementSibling;
        if (input.value !== document.querySelector("input#password").value) {
          const label = input.nextElementSibling;
          label.style.color = "#ed4337";
          input.style.borderColor = "#ed4337";
          error.textContent = "Passwords do not match!";
        } else if (
          !input.validity.tooShort &&
          input.value &&
          input.value === document.querySelector("input#password").value
        ) {
          const label = input.nextElementSibling;
          label.style.color = "#00b14f";
          input.style.borderColor = "#00b14f";
          error.textContent = "";
        }
      } else if (input.id === "email") {
        const error = input.nextElementSibling.nextElementSibling;
        console.log(error);

        if (input.validity.typeMismatch) {
          error.textContent = "Invalid Email!";
        } else if (input.validity) {
          error.textContent = "";
        }
      } else if (input.id === "phone") {
        const error = input.nextElementSibling.nextElementSibling;
        console.log(error);

        if (input.validity.patternMismatch) {
          error.textContent = "Enter a valid Singapore number!";
        } else if (input.validity) {
          error.textContent = "";
        }
      }
    });
  });
}

showErrorMessages();
