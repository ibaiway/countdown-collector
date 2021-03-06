//EventListener
document
  .getElementById("modalAddButton")
  .addEventListener("click", addCountdown);

//Variables
let countdowns = getCountdowns(); //global variable of countdown objects, filled during loading of webpage from localStorage.

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

// Recieves a title(string) and a date(Date). Returns an object with title, date(in milliseconds) and uid(current milliseconds)
function createCountdown(title, date) {
  return {
    title: title,
    date: date.getTime(),
    uid: Date.now(),
  };
}

// Push the countdown to global array and then save the array to localStorage
function insertCountdown(countdown) {
  countdowns.push(countdown);
  setCountdowns(countdowns);
}

// Receives input values, unifies date and time
function addCountdown() {
  let title = document.getElementById("inputTitle").value;
  let date = new Date(document.getElementById("inputDate").value);
  const checkbox = document.getElementById("inputTimeCheck").checked;
  console.log(date);

  if (checkbox) {
    const time = document.getElementById("inputTime").value.split(":");
    date.setHours(time[0]);
    date.setMinutes(time[1]);
  }

  let countdown = createCountdown(title, date);
  insertCountdown(countdown);
  console.log(createCard(countdown));
  const card = createCard(countdown);
  insertCard(card);
}

//Loads and inserts all the card on the global variable countdowns
function loadCards() {
  countdowns.forEach((countdown) => {
    const card = createCard(countdown);
    insertCard(card);
  });
}

loadCards();
setInterval(updateCountdowns, 1000);
