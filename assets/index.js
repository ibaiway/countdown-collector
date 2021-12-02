document.getElementById("inputTimeCheck").addEventListener("click", (e) => {
  const timeInput = document.getElementById("inputTimeDiv");

  if (e.target.checked == true) {
    timeInput.classList.toggle("invisible");
    timeInput.classList.toggle("visible");
  } else {
    timeInput.classList.toggle("invisible");
    timeInput.classList.toggle("visible");
  }
});
