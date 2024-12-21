window.addEventListener("load", () => {
	math = document.getElementById("math");
	eng = document.getElementById("eng");
	tbody = document.getElementById("tbody");
	mathAvg = document.getElementById("mathAvg");
	engAvg = document.getElementById("engAvg");
	totalAvg = document.getElementById("totalAvg");
})

const mathGrades = [];
const engGrades = [];
const avgGrades = [];
var submitCounts = 0;

function submit() {
	if (math.value != "" && eng.value != "") {
		submitCounts++;
		let mathTotal=0, engTotal=0, avgTotal=0;
		mathGrades.push(parseInt(math.value));
		engGrades.push(parseInt(eng.value));
		avgGrades.push((parseInt(math.value)+parseInt(eng.value))/2);
		for (let i=0; i<submitCounts; i++) {
			mathTotal += mathGrades[i];
			engTotal += engGrades[i];
		}
		tbody.innerHTML += `<tr><td>${submitCounts}</td><td>${mathGrades[submitCounts-1]}</td><td>${engGrades[submitCounts-1]}</td><td>${avgGrades[submitCounts-1].toFixed(2)}</td></tr>`
		mathAvg.innerHTML = (mathTotal/submitCounts).toFixed(2);
		engAvg.innerHTML = (engTotal/submitCounts).toFixed(2);
		totalAvg.innerHTML = (((mathTotal/submitCounts)+(engTotal/submitCounts))/2).toFixed(2);
	} else {
		alert("Please enter number");
	}
}		