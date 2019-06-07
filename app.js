const btn = document.querySelector(".speak");
const content = document.querySelector(".content");

//
const greeting = ["I'm good fam you?", "Doing well homeboi", "leave me alone you punk!"];

const weather = ["Weather is bad", "it's raining out here", "hope a bee stings you"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log("voice is activated, say it with your chest!");
};

recognition.onresult = function(event) {
	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener("click", () => {
	recognition.start();
});

function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();

	speech.text = "i dont know what you said";

	if (message.includes("how are you today")) {
		const finalText = greeting[Math.floor(Math.random() * greeting.length)];
		speech.text = finalText;
	}
	if (message.includes("what is the weather today")) {
		const finalText = weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}
