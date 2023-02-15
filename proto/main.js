
// -----------------------------------------------------------

let cards = document.getElementsByClassName("card");
let buttons = document.getElementsByTagName("button");

function cardleft() {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card1") {
		cards[3].classList.add("card-prev");
		cards[4].classList.add("card-focus");
		cards[0].classList.add("card-next");
		cards[1].classList.add("card-none");
		cards[2].classList.add("card-none");
	} else if (currentN == "card2") {
		cards[4].classList.add("card-prev");
		cards[0].classList.add("card-focus");
		cards[1].classList.add("card-next");
		cards[2].classList.add("card-none");
		cards[3].classList.add("card-none");
	} else if (currentN == "card3") {
		cards[0].classList.add("card-prev");
		cards[1].classList.add("card-focus");
		cards[2].classList.add("card-next");
		cards[3].classList.add("card-none");
		cards[4].classList.add("card-none");
	} else if (currentN == "card4") {
		cards[1].classList.add("card-prev");
		cards[2].classList.add("card-focus");
		cards[3].classList.add("card-next");
		cards[4].classList.add("card-none");
		cards[0].classList.add("card-none");
	} else if (currentN == "card5") {
		cards[2].classList.add("card-prev");
		cards[3].classList.add("card-focus");
		cards[4].classList.add("card-next");
		cards[0].classList.add("card-none");
		cards[1].classList.add("card-none");
	}
}

function cardright() {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card1") {
		cards[0].classList.add("card-prev");
		cards[1].classList.add("card-focus");
		cards[2].classList.add("card-next");
		cards[3].classList.add("card-none");
		cards[4].classList.add("card-none");
	} else if (currentN == "card2") {
		cards[1].classList.add("card-prev");
		cards[2].classList.add("card-focus");
		cards[3].classList.add("card-next");
		cards[4].classList.add("card-none");
		cards[0].classList.add("card-none");
	} else if (currentN == "card3") {
		cards[2].classList.add("card-prev");
		cards[3].classList.add("card-focus");
		cards[4].classList.add("card-next");
		cards[0].classList.add("card-none");
		cards[1].classList.add("card-none");
	} else if (currentN == "card4") {
		cards[3].classList.add("card-prev");
		cards[4].classList.add("card-focus");
		cards[0].classList.add("card-next");
		cards[1].classList.add("card-none");
		cards[2].classList.add("card-none");
	} else if (currentN == "card5") {
		cards[4].classList.add("card-prev");
		cards[0].classList.add("card-focus");
		cards[1].classList.add("card-next");
		cards[2].classList.add("card-none");
		cards[3].classList.add("card-none");
	}
}

cards[0].addEventListener("click", () => {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card2") {
		cards[4].classList.add("card-prev");
		cards[0].classList.add("card-focus");
		cards[1].classList.add("card-next");
		cards[2].classList.add("card-none");
		cards[3].classList.add("card-none");
	} else if (currentN == "card5" || currentN == "card1") {
		cards[4].classList.add("card-prev");
		cards[0].classList.add("card-focus");
		cards[1].classList.add("card-next");
		cards[2].classList.add("card-none");
		cards[3].classList.add("card-none");
	}
});

cards[1].addEventListener("click", () => {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card1") {
		cards[0].classList.add("card-prev");
		cards[1].classList.add("card-focus");
		cards[2].classList.add("card-next");
		cards[3].classList.add("card-none");
		cards[4].classList.add("card-none");
	} else if (currentN == "card3" || currentN == "card2") {
		cards[0].classList.add("card-prev");
		cards[1].classList.add("card-focus");
		cards[2].classList.add("card-next");
		cards[3].classList.add("card-none");
		cards[4].classList.add("card-none");
	}
});

cards[2].addEventListener("click", () => {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card2") {
		cards[1].classList.add("card-prev");
		cards[2].classList.add("card-focus");
		cards[3].classList.add("card-next");
		cards[4].classList.add("card-none");
		cards[0].classList.add("card-none");
	} else if (currentN == "card4" || currentN == "card3") {
		cards[1].classList.add("card-prev");
		cards[2].classList.add("card-focus");
		cards[3].classList.add("card-next");
		cards[4].classList.add("card-none");
		cards[0].classList.add("card-none");
	}
});

cards[3].addEventListener("click", () => {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card3") {
		cards[2].classList.add("card-prev");
		cards[3].classList.add("card-focus");
		cards[4].classList.add("card-next");
		cards[0].classList.add("card-none");
		cards[1].classList.add("card-none");
	} else if (currentN == "card5" || currentN == "card4") {
		cards[2].classList.add("card-prev");
		cards[3].classList.add("card-focus");
		cards[4].classList.add("card-next");
		cards[0].classList.add("card-none");
		cards[1].classList.add("card-none");
	}
});

cards[4].addEventListener("click", () => {
	let current = document.getElementsByClassName("card-focus")[0];
	let prev = document.getElementsByClassName("card-prev")[0];
	let next = document.getElementsByClassName("card-next")[0];
	let none = document.getElementsByClassName("card-none")[0];
	let none2 = document.getElementsByClassName("card-none")[1];
	let currentN = current.classList[1];
	console.log(currentN);

	current.classList.remove("card-focus");
	prev.classList.remove("card-prev");
	next.classList.remove("card-next");
	none.classList.remove("card-none");
	none2.classList.remove("card-none");

	if (currentN == "card4") {
		cards[3].classList.add("card-prev");
		cards[4].classList.add("card-focus");
		cards[0].classList.add("card-next");
		cards[1].classList.add("card-none");
		cards[2].classList.add("card-none");
	} else if (currentN == "card1" || currentN == "card5") {
		cards[3].classList.add("card-prev");
		cards[4].classList.add("card-focus");
		cards[0].classList.add("card-next");
		cards[1].classList.add("card-none");
		cards[2].classList.add("card-none");
	}
});

// -----------------------------------------------------------

// -----------------------------------------------------------

let link = document.querySelector(".link");
let pink = document.querySelector(".pink");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, { width: "calc(100% + 1.3em)", ease: "Elastic.easeOut(0.25)", duration: 0.4 });
hoverTL.to(pink, { width: "2em", left: "calc(100% - 1.45em)", ease: "Elastic.easeOut(0.4)", duration: 0.6 });

link.addEventListener("mouseenter", () => {
	hoverTL.play();
});

link.addEventListener("mouseleave", () => {
	hoverTL.reverse();
});
