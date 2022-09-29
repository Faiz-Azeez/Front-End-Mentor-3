let RATING = null;

const RATING_ARRAY = ["one", "two", "three", "four", "five"];

const RATING_OBJECT = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

const submitButton = document.querySelector(".submit-btn");

const beforeRatingComponent = document.querySelector(".before-rating");

const afterRatingComponent = document.querySelector(".after-rating");

const rateButtons = document.getElementsByClassName("rate-btn");

const ratedText = document.querySelector(".rated-text");

function resetRateButtonStyles() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].style.background = " hsl(217, 12%, 63%)";
  }
}

for (let i = 0; i < rateButtons.length; i++) {
  rateButtons[i].addEventListener(
    "click",
    function (event) {
      const rateValue = event.target.className.split(" ")[1];
      resetRateButtonStyles();
      event.target.style.background = " hsl(25, 97%, 53%)";
      RATING = RATING_OBJECT[rateValue];
    },
    false
  );
}

submitButton.addEventListener("click", function () {
  if (!RATING) return;
  ratedText.innerText = "You selected " + RATING + " out of 5";
  beforeRatingComponent.style.display = "none";
  afterRatingComponent.style.display = "block";
});

