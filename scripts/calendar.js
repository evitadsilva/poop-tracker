const header = document.querySelector('.calendar h2');
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
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end =  new Date(year, month, endDate).getDay();
  const endDatePrev =  new Date(year, month, 0).getDate();

  let datesHTML = "";

  for(let i = start; i > 0; i--) {
    datesHTML += `
      <li class="inactive">
      ${endDatePrev - i + 1}
      </li>
    `;
  }

  for(let i = 1; i <= endDate; i++){
    let className = 
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
     ? ' class="today"'
    : "";
    datesHTML += `<li${className}>${i}</li>`;
  }

  for(let i = end; i < 6; i++){
    datesHTML += `
      <li class="inactive">
      ${i - end + 1}
      </li>
    `;
  }

  dates.innerHTML = datesHTML;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach(nav => {
  nav.addEventListener('click', (e) => {
    const btnId = e.target.id;

    if(btnId === 'prev' && month === 0) {
      year--;
      month=11;
    } else if(btnId === 'next' && month === 11) {
      year++;
      month=0;
    } else {
      month = (btnId === 'next') ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();