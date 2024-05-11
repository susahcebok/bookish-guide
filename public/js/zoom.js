// zoom
const value = document.querySelector("#fz");
const input = document.querySelector("#full-zoom");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
