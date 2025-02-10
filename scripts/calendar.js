const header = document.querySelector('.calendar h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev, #next');

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  let datesHTML = ``;

  datesHTML += "test";

  dates.innerHTML = datesHTML;
  header.textContent = `${months[month]} ${year}`;
}

renderCalendar();