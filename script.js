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
