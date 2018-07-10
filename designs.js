// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const width = document.querySelector('#inputWeight');

const height = document.querySelector('#inputHeight');
// When size is submitted by the user, call makeGrid()
let submitBtn = document.querySelector('input[type=submit]');
submitBtn.addEventListener('click', makeGrid);

function makeGrid(evt) {
  evt.preventDefault();
  let m = height.valueAsNumber;
  let n = width.valueAsNumber;
  const table = document.querySelector('#pixelCanvas');
  
}
