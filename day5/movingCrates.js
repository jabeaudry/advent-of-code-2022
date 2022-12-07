const fs = require('fs')
const readline = require('readline');
var file = './input.txt';

function movingCrates() {

	let output = {
		'1': ['B', 'Z', 'T'],
		'2': ['V', 'H', 'T', 'D', 'N'],
		'3': ['B', 'F', 'M', 'D'],
		'4': ['T', 'J', 'G', 'W', 'V', 'Q', 'L'],
		'5': ['W', 'D', 'G', 'P', 'V', 'F', 'Q', 'M'],
		'6': ['V', 'Z', 'Q', 'G', 'H', 'F', 'S'],
		'7': ['Z', 'S', 'N', 'R', 'L', 'T', 'C', 'W'],
		'8': ['Z', 'H', 'W', 'D', 'J', 'N', 'R', 'M'],
		'9': ['M', 'Q', 'L', 'F', 'D', 'S']
	}

	const rl = readline.createInterface({
		input: fs.createReadStream(file),
		crlfDelay: Infinity
	});

	rl.on('line', async (line) => {
		let quantity = line.substring(line.indexOf('move') + 5, line.indexOf(' from'));
		let source = line.substring(line.indexOf('from') + 5, line.indexOf(' to'));
		let destination = line.substring(line.indexOf('to') + 3, line.length);


		if (output.hasOwnProperty(destination) && output.hasOwnProperty(source)) {
			for (let i = 0; i < quantity; i++) {
				if (output[source].length != 0) {
					let end = output[source].pop();
					let temp = output[destination].push(end)
				}
			}
		}
		console.log(output);
	});
}

//movingCrates();



function movingCrates2() {

	let output = {
		'1': ['B', 'Z', 'T'],
		'2': ['V', 'H', 'T', 'D', 'N'],
		'3': ['B', 'F', 'M', 'D'],
		'4': ['T', 'J', 'G', 'W', 'V', 'Q', 'L'],
		'5': ['W', 'D', 'G', 'P', 'V', 'F', 'Q', 'M'],
		'6': ['V', 'Z', 'Q', 'G', 'H', 'F', 'S'],
		'7': ['Z', 'S', 'N', 'R', 'L', 'T', 'C', 'W'],
		'8': ['Z', 'H', 'W', 'D', 'J', 'N', 'R', 'M'],
		'9': ['M', 'Q', 'L', 'F', 'D', 'S']
	}

	const rl = readline.createInterface({
		input: fs.createReadStream(file),
		crlfDelay: Infinity
	});

	rl.on('line', async (line) => {
		let quantity = line.substring(line.indexOf('move') + 5, line.indexOf(' from'));
		let source = line.substring(line.indexOf('from') + 5, line.indexOf(' to'));
		let destination = line.substring(line.indexOf('to') + 3, line.length);


		if (output.hasOwnProperty(destination) && output.hasOwnProperty(source)) {
			let temp = [];
			for (let i = 0; i < quantity; i++) {
				if (output[source].length != 0) {
					let end = output[source].pop();
					temp.push(end);
				}
			}
			for (let j = 0; j < temp.length; j++) {
				let out = output[destination].push(temp[temp.length-j-1]);
			}

		}
		console.log(output);
	});
}

movingCrates2();
