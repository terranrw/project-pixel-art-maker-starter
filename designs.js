// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const width = document.querySelector('#inputWidth');

const height = document.querySelector('#inputHeight');
// When size is submitted by the user, call makeGrid()
const submitBtn = document.querySelector('input[type=submit]');
submitBtn.addEventListener('click', makeGrid);

const table = document.getElementById('pixelCanvas');
const tableBody = document.createElement('tbody');

function makeGrid(evt) {
  evt.preventDefault();

  for (var row = 0; row < height.value; row++) {
    const addTr = document.createElement('tr');
    for (var col = 0; col < width.value; col++) {
      const addTd = document.createElement('td');
      addTr.appendChild(addTd);
    }
    tableBody.appendChild(addTr);
  }
  table.appendChild(tableBody);
}

document.querySelector('#pixelCanvas').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {
        evt.target.style.background = colorPicker.value;
    }
});
