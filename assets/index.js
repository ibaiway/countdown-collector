//Toggle the visibility of the Time input in New Countdown Modal
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
console.log(getCountdowns());
