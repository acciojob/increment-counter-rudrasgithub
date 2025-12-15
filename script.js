//your JS code here. If required.
let counter = document.getElementById("counter");
function Increment() {
	let value = Number(counter.textContent);
	alert(value)
	value += 1
	counter.textContent = value;
}
