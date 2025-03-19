function callback(text) {
	const li = document.createElement("li");
	li.innerHTML = text;
	return li;
}
//calling repeat action , that will call the callback repeatedly based on lengthb of items
function repeatAction(cb,items) {
	const ul = document.createElement("ul");

	for (let i = 0; i < items.length; i++) {
		let temp = cb(items[i]);

		ul.appendChild(temp);
	}
	document.getElementById("result").appendChild(ul);
}

function generateList(){
    let items = document.getElementById("items").value.split(',');
    repeatAction(callback , items)
}