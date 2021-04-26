const fs = require('fs/promises');

const x_bound = { min: 125.06666667, max: 131.87222222 };
const y_bound = { min: 33.1, max: 38.45 };

function getNumber(min, max) {
	return (Math.random() * (max - min + 1) + min).toFixed(8);
}

async function getLanLngData() {
	let array = new Array(0);

	for (let i = 0; i < 60000; i++) {
		const lan = getNumber(x_bound.min, x_bound.max);
		const lng = getNumber(y_bound.min, y_bound.max);

		array.push({ x: lan, y: lng });
	}

	const result = await fs.writeFile('./test_map.json', JSON.stringify(array));
	console.log(result);
}

getLanLngData();
