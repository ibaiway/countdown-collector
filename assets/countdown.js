function calculateCountdown(millis) {
  const now = new Date();
  const difference = millis > now ? millis - now : now - millis;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const mins = Math.floor(difference / (1000 * 60));
  const secs = Math.floor(difference / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  const string = d + "d " + h + "h " + m + "m " + s + "s";
  return string;
}

function updateCountdowns() {
  const countdowns = document.querySelectorAll(".countdown");
  countdowns.forEach((element) => {
    element.innerText = calculateCountdown(
      element.getAttribute("data-countdown")
    );
  });
}
