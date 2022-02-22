import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function showDate() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const div = document.querySelector('.date');
  div.innerHTML = now;
}
