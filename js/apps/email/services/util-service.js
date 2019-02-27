

export default {
  getTodayForDateInput,
  getFromStorage,
  saveToStorage,
  getRandomIntInclusive
 
}


function getTodayForDateInput() {
  var currTime = new Date()
  var year = currTime.getFullYear()
  var day = currTime.getDate()
  var month = currTime.getMonth() + 1
  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month
  return `${year}-${month}-${day}`
}


function getFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val)
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


export function makeId() {
  var length = 6;
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

