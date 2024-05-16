const drop_down_btn = document.getElementById("drop_down_btn");
const navUlHidden = document.querySelector(".nav_ul_hidden");

drop_down_btn.addEventListener("click", function () {
  navUlHidden.classList.toggle("active");
});

const darkModeBtn = document.getElementById("darkMode_btn");

const local = JSON.parse(localStorage.getItem("value"))
  ? document.body.classList.add("dark_mode")
  : null;

darkModeBtn.addEventListener("click", function () {
  const dark = document.body.classList.toggle("dark_mode");
dark?localStorage.setItem("value",dark):localStorage.setItem("value",false)
  if (dark) {
    darkModeBtn.textContent = "dark";
  } else {
    darkModeBtn.textContent = "light";
  }
});
