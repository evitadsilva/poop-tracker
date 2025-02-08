import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function generateWeek() {
  let today = dayjs();
  let dayIndex = today.day();
  let startOfWeek = today.subtract(dayIndex, "day");

  let weekHTML ="";

  for(let i=0; i<7; i++){
    const date = startOfWeek.add(i, "day");
    const isToday = date.isSame(today, "day");

    weekHTML += `
      <div class="date-container ${isToday ? "today" : ""}">
        <div class="day">${date.format('ddd')}</div>
        <div class="date">${date.format('D')}</div>
        <div class="mark js-mark">
        </div>
      </div>
    `;

    localStorage.setItem('weekHTML', weekHTML)
  }

  document.querySelector('.js-week').innerHTML = weekHTML;

}

generateWeek();


