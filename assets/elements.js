//Creates a card element with child elements and attributes
function createCard(countdown) {
  const divCard = document.createElement("div");
  divCard.classList = "card my-2";
  const divBody = document.createElement("div");
  divBody.classList = "card-body";
  const title = document.createElement("h5");
  title.classList = "card-title";
  title.innerText = countdown.title;
  const date = document.createElement("h6");
  date.classList = "card-subtitle mb-2 text-muted";
  date.innerText = dateToString(new Date(countdown.date));
  const countdownElement = document.createElement("h2");
  countdownElement.classList = "card-text text-center countdown";
  countdownElement.setAttribute("data-countdown", countdown.date);
  const button = document.createElement("button");
  button.classList = "btn btn-primary btn-sm float-end";
  button.innerText = "Button";

  divBody.appendChild(title);
  divBody.appendChild(date);
  divBody.appendChild(countdownElement);
  divBody.appendChild(button);
  divCard.appendChild(divBody);

  return divCard;
}

//Recieves a card element which appends to a div
function insertCard(card) {
  const cardHolder = document.getElementById("cardHolder");
  cardHolder.appendChild(card);
}

function dateToString(dateObject) {
  const date = dateObject.toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const time = dateObject.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let stringDate = date + " " + time;

  return stringDate;
}
