function calculateCountdown(millis) {
  const now = new Date();
  let past = false;
  let difference = null;

  if (millis > now) {
    difference = millis - now;
  } else {
    difference = now - millis;
    past = true;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const mins = Math.floor(difference / (1000 * 60));
  const secs = Math.floor(difference / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  const string = d + "d " + h + "h " + m + "m " + s + "s";
  const blink = difference > 60000 ? false : true;
  const soon = difference > 60000 ? false : true;

  return {
    coundownString: string,
    blink: blink,
    past: past,
    soon: soon,
  };
}

function updateCountdowns() {
  const countdowns = document.querySelectorAll(".countdown");
  countdowns.forEach((element) => {
    const countdown = calculateCountdown(
      element.getAttribute("data-countdown")
    );
    element.innerText = countdown.coundownString;
    countdown.blink
      ? element.classList.add("blink")
      : element.classList.remove("blink");
    if (countdown.past) {
      //set card style to danger and button to dark
      element.parentElement.parentElement.classList.remove("bg-warning");
      element.parentElement.parentElement.classList.add("bg-danger");
      element.nextElementSibling.classList.remove("btn-primary");
      element.nextElementSibling.classList.add("btn-dark");
    } else if (countdown.soon) {
      //set card style to warning and button to dark
      element.parentElement.parentElement.classList.add("bg-warning");
      element.nextElementSibling.classList.remove("btn-primary");
      element.nextElementSibling.classList.add("btn-dark");
    }
  });
}
