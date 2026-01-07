const clock = document.getElementsByTagName("h2")[0];
const theme = document.getElementById("theme");
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];
const clockTitle = document.querySelector("#title");

// function for the time

function times() {
  const time = new Date();
  const hour = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  clock.innerText = hour + ":" + minutes + ":" + seconds;
  requestAnimationFrame(times);
}
times();

// listener change theme

theme.addEventListener("click", () => {
  if (theme.innerText === "☀️") theme.innerText = "🌙";
  else theme.innerText = "☀️";
  main.classList.toggle("themeBlackMain");
  main.classList.toggle("themeLightMain");
  header.classList.toggle("themeBlackHeader");
  header.classList.toggle("themeLightHeader");
  clock.classList.toggle("themeH2White");
  clock.classList.toggle("themeH2Black");
  theme.classList.toggle("themeH2White");
  theme.classList.toggle("themeH2Black");
});
