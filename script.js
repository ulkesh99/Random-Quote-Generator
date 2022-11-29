const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector(".button");
const authorName = document.querySelector(".name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".tweet");

quoteBtn.addEventListener("click", randomQuote);

function randomQuote() {
  quoteBtn.innerHTML = "Loading Quote ....";
  fetch("http://api.quotable.io/random", {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "5a8665e836mshaec58a87c461492p115765jsn20b0e24c123c",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
      quoteBtn.innerHTML = "New Quote";
    });
}

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} BY ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

tweetBtn.addEventListener("click", () => {
  let tweetURL = `http://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetURL, "_blank");
});
