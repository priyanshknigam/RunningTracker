// Created By: Priyansh Kumar Nigam
const goal = 40;
let entries = [];
document.querySelector('#target').innerText = goal;


const entriesWrapper = document.querySelector('#entriesstore');

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  const listItem = document.createElement('li');
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.appendChild(listValue);
  entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
  return total + currentValue;
}

function findTotal() {
  const totalValue = (entries.reduce(reducer)).toFixed(1);
  document.getElementById('total').innerText = totalValue;
  document.getElementById('totalprogress').innerText = totalValue;
}

function findAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.getElementById('average').innerText = average;
}

function findHigh() {
  const high = Math.max(...entries);
  document.getElementById('high').innerText = high.toFixed(1);
}

function findGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  const completionPercent = totalValue / (goal / 100);
  const progresscircle = document.querySelector('#progresscircle');
  if(completionPercent >= 100) progresscircle.style.background = 'conic-gradient(#70db70 100%, #2d3740 0%)';
  else progresscircle.style.background = 'conic-gradient(#70db70 '+completionPercent+'%, #2d3740 '+completionPercent+'% 100%)';
  if(entries.length === 7) alert("Thank you for using this week, click OK to see stats, refresh this page to enter new weeks details");
}

function handleSubmit(event) {
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value);
  if(!entry) return;
  document.querySelector("form").reset();
  entries.push(entry);
  addNewEntry(entry);
  findTotal();
  findAverage();
  findHigh();
  findGoal();
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);
