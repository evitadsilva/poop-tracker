import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let recordHTML = "";

recordHTML = `
  <div class="hours">
    <img src="images/capy2.png"/>
    <div class="time-container">
      <div>last</div>
      <div class="time js-time">0</div>
      <div>mins</div>
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

    const totalMinutes = Math.floor(elapsedSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60

    const displayHours = String(hours).padStart(2,'0');
    const displayMinutes = String(minutes).padStart(2,'0');

    const displayTime = `${displayHours}:${displayMinutes}`;

    timerDisplay.textContent = displayTime;

  }, 1000);

}

function addMarkToToday(){
  const todayContainer = document.querySelector('.date-container.today .js-mark');

  if(todayContainer){
    const img = document.createElement("img");
    img.src = "images/capy3.png";
    todayContainer.appendChild(img);
  }
};

recordButton.addEventListener("click", () => {
  startTimer();
  addMarkToToday();
});
