// filter
const sliderEl = document.querySelector("#full-alpha")
const sliderValue = document.querySelector("#fa")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
// }

// progressScript()
