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
theme.addEventListener("input", () => {
  main.classList.remove("themeBlackMain", "themeLightMain");
  header.classList.remove("themeBlackHeader", "themeLightHeader");
  clock.classList.remove("themeH2White", "themeH2Black");
  theme.classList.remove("themeH2White", "themeH2Black");

  if (theme.value === "dark") {
    main.classList.add("themeBlackMain");
    header.classList.add("themeBlackHeader");
    clock.classList.add("themeH2Black");
    theme.classList.add("themeH2White");
  } else {
    main.classList.add("themeLightMain");
    header.classList.add("themeLightHeader");
    clock.classList.add("themeH2White");
    theme.classList.add("themeH2Black");
  }
});
