const items = ["разработки"]

const text = document.querySelector("[data-typing-text]")

let textIndex = 0
let charIndex = 0

const generateRandomSecond = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const typing = () => {
	text.textContent = items[textIndex].slice(0, charIndex++)

	if (charIndex <= items[textIndex].length) {
		text.classList.add("no-animate")

		setTimeout(() => {
			typing()
		}, generateRandomSecond(50, 500))
	} else {
		text.classList.remove("no-animate")

		setTimeout(() => {
			deleteText()
		}, generateRandomSecond(1000, 1300))
	}
}

const deleteText = () => {
	text.textContent = items[textIndex].slice(0, charIndex--)

	if (charIndex >= 0) {
		text.classList.add("no-animate")

		setTimeout(() => {
			deleteText()
		}, generateRandomSecond(50, 500))
	} else {
		text.classList.remove("no-animate")
		charIndex = 0
		textIndex = (textIndex + 1) % items.length

		setTimeout(() => {
			typing()
		}, generateRandomSecond(1000, 1300))
	}
}

typing()
