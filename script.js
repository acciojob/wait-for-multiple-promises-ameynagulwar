//your JS code here. If required.
//your JS c
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function getRandomTime() {
  return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
}

function addRow(table, data) {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = data[0];
  cell2.textContent = data[1];
}

const table = document.getElementById('output');
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.textContent = 'Loading...';
loadingCell.colSpan = 2;

const promises = [];
for (let i = 0; i < 3; i++) {
  const time = getRandomTime();
  promises.push(wait(time).then(() => [`Promise ${i + 1}`, (time / 1000).toFixed(3)]));
}

Promise.all(promises)
  .then((results) => {
    table.deleteRow(loadingRow.rowIndex);
    results.forEach((data) => {
      addRow(table, data);
    });
    const totalTime = results.reduce((total, data) => total + parseFloat(data[1]), 0);
    addRow(table, ['Total', totalTime.toFixed(3)]);
  })
  .catch((error) => {
    console.error(error);
  });

	