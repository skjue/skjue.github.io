let tempura = document.getElementById("tempura");
tempura.onclick = goTempura;
function goTempura() {
    location.href = 'tempura.html';
	document.getElementById("tempura").classList.add("hidden");
}

let egg = document.getElementById("egg");
egg.onclick = goEgg;
function goEgg() {
    location.href = 'egg.html';
}

let shrimp = document.getElementById("shrimp");
shrimp.onclick = goShrimp;
function goShrimp() {
    location.href = 'shrimp.html';
}

let roe = document.getElementById("roe");
roe.onclick = goRoe;
function goRoe() {
    location.href = 'roe.html';
}

let sushi = document.getElementById("sushi");
sushi.onclick = goSushi;
function goSushi() {
    location.href = 'sushi.html';
}

let sushibutton = document.getElementById("sushibutton");
let plate1 = document.getElementById("plate1");
sushibutton.onclick = hideSushi;

function hideSushi() {
	if (plate1.classList.contains("hidden")) {
		plate1.classList.remove("hidden");
		sushi.classList.add("hidden");
	} 
	else {
		plate1.classList.add("hidden");
		sushi.classList.remove("hidden");

	}
}

let roebutton = document.getElementById("roebutton");
let plate3 = document.getElementById("plate3");
roebutton.onclick = hideRoe;

function hideRoe() {
	if (plate3.classList.contains("hidden")) {
		plate3.classList.remove("hidden");
		roe.classList.add("hidden");
	} 
	else {
		plate3.classList.add("hidden");
		roe.classList.remove("hidden");

	}
}

let shrimpbutton = document.getElementById("shrimpbutton");
let plate2 = document.getElementById("plate2");
shrimpbutton.onclick = hideShrimp;

function hideShrimp() {
	if (plate2.classList.contains("hidden")) {
		plate2.classList.remove("hidden");
		shrimp.classList.add("hidden");
	} 
	else {
		plate2.classList.add("hidden");
		shrimp.classList.remove("hidden");

	}
}

let eggbutton = document.getElementById("eggbutton");
let plate4 = document.getElementById("plate4");
eggbutton.onclick = hideEgg;

function hideEgg() {
	if (plate4.classList.contains("hidden")) {
		plate4.classList.remove("hidden");
		egg.classList.add("hidden");
	} 
	else {
		plate4.classList.add("hidden");
		egg.classList.remove("hidden");

	}
}

let tempurabutton = document.getElementById("tempurabutton");
let plate5 = document.getElementById("plate5");
tempurabutton.onclick = hideTempura;

function hideTempura() {
	if (plate5.classList.contains("hidden")) {
		plate5.classList.remove("hidden");
		tempura.classList.add("hidden");
	} 
	else {
		plate5.classList.add("hidden");
		tempura.classList.remove("hidden");

	}
}


let carouselWidth = 250; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;

function showNextImage() {
	imageNum = imageNum - 1;
	checkControls();
	let pix = carouselWidth * imageNum;
	imageRow.style.left = pix;

}

nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum = imageNum + 1;
	checkControls();
	let pix = carouselWidth * imageNum;
	imageRow.style.left = pix;

}

prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-image").length;


function checkControls() {

	if (imageNum === 0) {
		prevButton.classList.add("hidden");

	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
		
	}

	if (imageNum === -1 * totalImages + 1) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");

	}
}

