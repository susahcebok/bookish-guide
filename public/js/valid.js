let clickButton = document.getElementById("click");
let fileInput = document.getElementById("full-img");
// let output = document.getElementById("output");
fileInput.addEventListener("change", function () {

// menampilkan output ke elemen hasil
// output.innerHTML = "<p>Aku suka Javascript</p>";
    
// check if the file is selected or not
if (fileInput.files.length == 0) {
clickButton.disabled = true;
clickButton.opacity = 0.3;
} else {
clickButton.disabled = false;
clickButton.style.opacity = 1;
}
});
