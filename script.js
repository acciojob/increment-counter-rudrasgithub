//your JS code here. If required.
let counter = document.getElementById("counter");
function Increment() {
	alert(counter.textContent)
	let value = Number(counter.textContent);
	value += 1
	counter.textContent = value;
}
