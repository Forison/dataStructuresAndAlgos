const practice = () => {
	const twoD = [
		['a', 'b', '1', '1', '0'],
		['d', 'c', '0', '1', '0'],
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '0', '0'],
		['1', '0', '0', '0', '0'],
	];
	const len = twoD.length;
	let i = 0; j = 4; k = 0; l = 0;
	while (i < len) {
		const row = twoD[i];
		const diagonal = row[i]
		const botUpDia = row[len - 1 - i]
		const col = row[0]
		const secCol = row[j]
		const thiCol = row[j]
		const fouCol = row[j]
		const fifCol = row[j - 1];
		console.log(twoD[0][i + 1])
		console.log(twoD[0][i + 1])
		console.log(twoD[1][1])
		i += 1
	}
}
practice();