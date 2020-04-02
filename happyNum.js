let tracker = [];
let isH = false
const isHappy = (n) => {
	if (n - 0 < 0) {
		isH = false;
		tracker = [];
		return isH;
	} else if (n === 1) {
		isH = true;
		tracker = [];
		return isH;
	}
	let sum = 0
	const distNum = n.toString().split('').map(val => {
		return sum += parseInt(val) * parseInt(val);
	});
	if (tracker.includes(distNum[distNum.length - 1])) {
		console.log(tracker)
		console.log('false')
		isH = false;
		tracker = [];
		return isH;
	}
	tracker.push(distNum[distNum.length - 1]);
	console.log(tracker)
	if (distNum[distNum.length - 1] === 1) {
		console.log("true")
		isH = true;
		tracker = [];
		return isH;
	} else {
		isHappy(distNum[distNum.length - 1]);
	}
	return isH;
};
