// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const width = document.querySelector('#inputWeight');

const height = document.querySelector('#inputHeight');
// When size is submitted by the user, call makeGrid()
const submitBtn = document.querySelector('input[type=submit]');
submitBtn.addEventListener('click', makeGrid);

function makeGrid(evt) {
  evt.preventDefault();
  let m = height.valueAsNumber;
  let n = width.valueAsNumber;
  const table = document.querySelector('#pixelCanvas');
  const tableBody = document.createElement('tbody');
//  const addTd = document.createElement('td');
//  console.log(`${m} and ${n}`);
// Your code goes here!
  for (var row = 0; row < m; row++) {
    const addTr = document.createElement('tr');

    for (var col = 0; col < n; col++) {
      const addTd = document.createElement('td');
      addTr.appendChild(addTd);
    }
    tableBody.appendChild(addTr);
  }
  table.appendChild(tableBody);
}
