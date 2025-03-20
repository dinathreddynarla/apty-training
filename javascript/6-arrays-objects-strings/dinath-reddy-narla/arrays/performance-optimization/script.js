const largeArray = Array(1000000)
	.fill(0)
	.map((_, index) => index);

function measurePerformance(method) {
	const start = performance.now();
	if (method === "for") {
		for (let i = 0; i < largeArray.length; i++) {}
	} else if (method === "forOf") {
		for (const element of largeArray) {
		}
	} else if (method === "forEach") {
		largeArray.forEach(() => {});
	}
	const end = performance.now();
	return end - start;
}

document.getElementById("run-comparison").addEventListener("click", () => {
	const forTime = measurePerformance("for");
	const forOfTime = measurePerformance("forOf");
	const forEachTime = measurePerformance("forEach");

	const results = `
                <p>For Loop: ${forTime.toFixed(4)} ms</p>
                <p>For...Of Loop: ${forOfTime.toFixed(4)} ms</p>
                <p>forEach Method: ${forEachTime.toFixed(4)} ms</p>
            `;
	document.getElementById("results").innerHTML = results;
});
