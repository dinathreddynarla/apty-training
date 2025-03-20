function deepClone(obj) {
	let clone = {};

	Object.keys(obj).map((key) => {
		if (typeof obj[key] === "object") {
			clone[key] = deepClone(obj[key]);
		} else {
			clone[key] = obj[key];
		}
	});

	return clone;
}

let obj = { a: 1, b: { c: 2 } };

let clone = deepClone(obj);

clone.b.c = 3;

document.getElementById("output").innerHTML = `<b>Clone:</b> ${JSON.stringify(clone)} <br><br> <b>Original Object:</b> ${JSON.stringify(obj)}`;
