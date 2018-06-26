// the currently selectec color is stored here
var selectedColor;

// attach events
document.querySelector("#sizePicker").addEventListener("submit", makeGrid);
document.querySelector("#colorPicker").addEventListener("change", onColorChange);

// this creates the grid based on the height and width provided by the user
function makeGrid(e) {
	e.preventDefault();
	var height = document.getElementById('inputHeight').value;
	var width = document.getElementById('inputWeight').value;
	var table = document.getElementById('pixelCanvas');
	table.innerHTML = '';

	var tbody = document.createElement('tbody');
	for(let i = 0; i < height; i++) {
		var tr = document.createElement('tr');
		for(let j = 0; j < width; j++) {
			var td = document.createElement('td');
			td.addEventListener("click", fillColor);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

// saves the color chosen by the user
function onColorChange(e) {
	selectedColor = e.target.value;
}

// fills the clicked square with the chosen color
function fillColor(e) {
	var box = e.target;
	box.style.backgroundColor = selectedColor;
}
