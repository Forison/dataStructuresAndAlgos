const twoSum = (num, target) => {
	const tracker = {}
	let currentNum;
	let complement;
	for (let index = 0; index < num.length; index++) {
		currentNum = num[index];
		complement = target - currentNum
		const index2 = tracker[complement]
		if (index2 != null) {
			return [index2, index]
		} else {
			tracker[currentNum] = index
		}
	}
}