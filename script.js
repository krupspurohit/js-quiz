const correctAnswer = [
	"var myVar;",
	"console.log()",
	"function myFunction()",
	"var myArray = [];",
	"To check if a value is not a number",
];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const btn = document.querySelector(".reload");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let score = 0;
	const userAns = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
		form.q5.value,
	];

	userAns.forEach((answer, index) => {
		if (answer === correctAnswer[index]) {
			score = score + 1;
			questions[index].classList.add("correct");
		} else {
			questions[index].classList.add("wrong");
		}
	});
	console.log(score);

	scrollTo(0, 0);
	result.classList.remove("hide");
	result.querySelector("p").textContent = `You scored ${score}/5!`;
});

btn.addEventListener("click", () => {
	location.reload();
});
