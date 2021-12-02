function getCountdowns() {
  return localStorage.countdowns ? JSON.parse(localStorage.countdowns) : [];
}
function setCountdowns(array) {
  localStorage.countdowns = JSON.stringify(array);
}
