const form = document.getElementById("form");
const wrapper = document.querySelector(".wrapper");
const showInput = document.querySelector(".showInput");
const formWrapper = document.querySelector(".formWrapper");
const button = document.querySelector(".button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  wrapper.style.height = form.height.value;
  wrapper.style.width = form.width.value;
  wrapper.style.borderColor = form.borderColor.value;
  wrapper.style.backgroundColor = form.background.value;
  wrapper.style.borderRadius = form.borderRadius.value;
  formWrapper.classList.toggle("hidden");
});

showInput.addEventListener("click", () => {
  formWrapper.classList.toggle("hidden");
  showInput.classList.toggle("hidden");
});

wrapper.addEventListener("click", () => {
  formWrapper.classList.toggle("hidden");
  wrapper.classList.toggle("hidden");
});
