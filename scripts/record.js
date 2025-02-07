import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let recordHTML = "";

recordHTML = `
  <div class="hours">
    <img src="images/capy2.png"/>
    <div class="time-container">
      <div>last</div>
      <div class="time js-time"> 0 </div>
      <div>mins.</div>
    </div>
  </div>
  <button class="js-record-button">Record</button>
`;

document.querySelector(".js-record-container")
  .innerHTML = recordHTML;

const timerDisplay = document.querySelector('.js-time');
const recordButton = document.querySelector(".js-record-button");

let timer = null;

function startTimer(){
  if (timer) clearInterval(timer);

  timerDisplay.textContent = "0";

  let startTime = dayjs();

  timer = setInterval(() => {
    const currentTime = dayjs();
    const elapsedSeconds = currentTime.diff(startTime, 'second');
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);

    const displayTime = `${elapsedMinutes}`.padStart(2,"0");

    timerDisplay.textContent = displayTime;

  }, 1000);

}

recordButton.addEventListener("click", () => {
  startTimer();
});
