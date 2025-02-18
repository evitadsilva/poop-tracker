import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let recordHTML = `
  <div class="hours">
    <img src="images/capy2.png"/>
    <div class="time-container">
      <div>last</div>
      <div class="time js-time">0</div>
      <div>ago</div>
    </div>
  </div>
  <button class="js-record-button">Record</button>
`;

document.querySelector(".js-record-container").innerHTML = recordHTML;

const timerDisplay = document.querySelector('.js-time');
const recordButton = document.querySelector(".js-record-button");

let timer = null;

function loadTimer() {
  const savedStartTime = localStorage.getItem("startTime");

  if (savedStartTime) {
    startTimer(dayjs(savedStartTime));
  }
}

function startTimer(savedStartTime = null) {
  if (timer) clearInterval(timer);

  let startTime = savedStartTime || dayjs();
  localStorage.setItem("startTime", startTime.toISOString()); // Save to localStorage

  timer = setInterval(() => {
    const currentTime = dayjs();
    const elapsedSeconds = currentTime.diff(startTime, 'second');

    const totalMinutes = Math.floor(elapsedSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
      timerDisplay.textContent = `${totalMinutes} mins`;
    } else if (minutes === 0) {
      timerDisplay.textContent = `${hours} hr`;
    } else {
      timerDisplay.textContent = `${hours} hr ${minutes} mins`;
    }
  }, 1000);
}

function addMarkToToday() {
  const todayContainer = document.querySelector('.date-container.today .js-mark');

  if (todayContainer) {
    let markCount = parseInt(localStorage.getItem("markedTodayCount") || "0", 10);

    markCount++;
    
    const img = document.createElement("img");
    img.src = "images/capy3.png";
    todayContainer.appendChild(img);

    localStorage.setItem("markedTodayCount", markCount);
    }
  }


function restoreMarks() {
  const todayContainer = document.querySelector('.date-container.today .js-mark');
  
  if (todayContainer) {
    let markCount = parseInt(localStorage.getItem("markedTodayCount") || "0", 10);
    
    for (let i = 0; i < markCount; i++) {
      const img = document.createElement("img");
      img.src = "images/capy3.png";
      todayContainer.appendChild(img);
    }
  }
}

recordButton.addEventListener("click", () => {
  startTimer();
  addMarkToToday();
});

window.addEventListener("load", () => {
  loadTimer();
  restoreMarks();
});
