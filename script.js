// Light/Dark selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');

const imgLastClonePast = document.querySelector('.pastLastClone');
const imgFirstClonePast = document.querySelector('.pastFirstClone');
const imgLastClonePresent = document.querySelector('.presentLastClone');
const imgFirstClonePresent = document.querySelector('.presentFirstClone');
const imgLastCloneFuture = document.querySelector('.futureLastClone');
const imgFirstCloneFuture = document.querySelector('.futureFirstClone');

const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_Data_report_re_p4so_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_Lost_online_re_upmy_${color}.svg`;
	image4.src = `img/tense-slider-images/past/1.past-story_${color}.svg`;
	image5.src = `img/tense-slider-images/past/2.past-story_${color}.svg`;
	image6.src = `img/tense-slider-images/present/1.present-story_${color}.svg`;
	image7.src = `img/tense-slider-images/present/2.present-story_${color}.svg`;
	image8.src = `img/tense-slider-images/future/1.future-story_${color}.svg`;
	image9.src = `img/tense-slider-images/future/2.future-story_${color}.svg`;
	imgLastClonePast.src = `img/tense-slider-images/past/2.past-story_${color}.svg`;
	imgFirstClonePast.src = `img/undraw_Data_report_re_p4so_${color}.svg`;
	imgLastClonePresent.src = `img/tense-slider-images/present/2.present-story_${color}.svg`;
	imgFirstClonePresent.src = `img/undraw_feeling_proud_${color}.svg`;
	imgLastCloneFuture.src = `img/tense-slider-images/future/2.future-story_${color}.svg`;
	imgFirstCloneFuture.src = `img/undraw_Lost_online_re_upmy_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
	nav.style.backgroundColor = 'rgba(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)';
	toggleIcon.children[0].textContent = 'Dark Mode';
	toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
	imageMode('dark');
}

// Light Mode Styles
function lightMode() {
	nav.style.backgroundColor = 'rgba(255 255 255 / 50%)';
	textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
	toggleIcon.children[0].textContent = 'Light Mode';
	toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
	// if true, switch to dark mode, else light mode
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		darkMode();
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		lightMode();
	}
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		darkMode();
	}
}

//////////////////////////////////////////////////////////////////////////

// Hero section animation logic
// Heading Selectors
const heading = document.querySelector('.hero-section__headings__h1');

// Take each char of heading and place in array (incl all chars)
const characters = heading.textContent.match(/[\w\W]/g);

// Empty the contents of heading
heading.textContent = '';

// Loop through each character and push it inside heading element as a new span element.
characters.forEach((char) => {
	const span = document.createElement('span');
	span.textContent = char;
	heading.appendChild(span);
});

// Create charcter count variable and set timer with new function called setChar().
let char = 0;
let timer = setInterval(setChar, 100);

//Stop the interval when all characters are rendered else set character span class to fade.
function setChar() {
	// Grab first element of all spans (idx 0)
	const spanChar = document.querySelectorAll(
		'.hero-section__headings__h1 > span'
	)[char];
	// apply the fade classname
	spanChar.setAttribute('id', 'fade');
	//   spanChar.className = 'fade';
	// Increment char variable
	char++;
	// Clear timer when incremented to end of characters array
	char === characters.length && clearInterval(timer);
}

//////////////////////////////////////////////////////////////////////////

// About section sliders (past, present, future) logic

/* ---

const pastSlider = document.querySelector('.images-past');
const pastSliderImages = document.querySelectorAll('.images-past img');

const prevPastBtn = document.querySelector('#btnPastPrev');
const nextPastBtn = document.querySelector('#btnPastNext');

let counter = 1;

const size = pastSliderImages[0].offsetParent.clientWidth + 34;

*/

// Set default image to be idx 1 of image node
// ---
// pastSlider.style.transform = 'translateX(' + -size * counter + 'px)';

// ---
// nextPastBtn.addEventListener('click', () => {
// 	if (counter >= pastSliderImages.length - 1) return;
// 	pastSlider.style.transition = 'transform 0.2s ease-in-out';
// 	counter++;
// 	pastSlider.style.transform = 'translateX(' + -size * counter + 'px)';
// });

// ---
// prevPastBtn.addEventListener('click', () => {
// 	if (counter <= 0) return;
// 	pastSlider.style.transition = 'transform 0.2s ease-in-out';
// 	counter--;
// 	pastSlider.style.transform = 'translateX(' + -size * counter + 'px)';
// });

// ---
// pastSlider.addEventListener('transitionend', () => {
// 	if (pastSliderImages[counter].id === 'lastClone') {
// 		pastSlider.style.transition = 'none';
// 		counter = pastSliderImages.length - 2;
// 		pastSlider.style.transform = 'translateX(' + -size * counter + 'px)';
// 	}

// 	if (pastSliderImages[counter].id === 'firstClone') {
// 		pastSlider.style.transition = 'none';
// 		counter = pastSliderImages.length - counter;
// 		pastSlider.style.transform = 'translateX(' + -size * counter + 'px)';
// 	}
// });

/*
	My class implementation of slider for reusability 
*/

function initializeSlides() {
	// All Slide divs
	const pastSlider = document.querySelector('.images-past');
	const presentSlider = document.querySelector('.images-present');
	const futureSlider = document.querySelector('.images-future');

	// All Slide array images
	const pastSliderImages = document.querySelectorAll('.images-past img');
	const presentSliderImages = document.querySelectorAll('.images-present img');
	const futureSliderImages = document.querySelectorAll('.images-future img');

	// All slide buttons
	/* Previous */
	const prevPastBtn = document.querySelector('#btnPastPrev');
	const prevPresentBtn = document.querySelector('#btnPresentPrev');
	const prevFutureBtn = document.querySelector('#btnFuturePrev');

	/* Next */
	const nextPastBtn = document.querySelector('#btnPastNext');
	const nextPresentBtn = document.querySelector('#btnPresentNext');
	const nextFutureBtn = document.querySelector('#btnFutureNext');

	class Slider {
		constructor(sliderDiv, sliderImages, prevBtn, nextBtn) {
			this.sliderDiv = sliderDiv;
			this.sliderImages = sliderImages;
			this.prevBtn = prevBtn;
			this.nextBtn = nextBtn;
		}

		counter = 1;

		getFirstImgWidth() {
			return this.sliderImages[0].offsetParent.clientWidth + 27;
		}

		setDefaultImg() {
			return 'translateX(' + -this.getFirstImgWidth() * this.counter + 'px)';
		}

		enableSlide() {
			// Set the default image
			this.sliderDiv.style.transform = this.setDefaultImg();

			this.nextBtn.addEventListener('click', () => {
				if (this.counter >= this.sliderImages.length - 1) return;
				this.sliderDiv.style.transition = 'transform 0.2s ease-in-out';
				this.counter++;
				// console.log(this.counter);
				this.sliderDiv.style.transform = this.setDefaultImg();
			});

			this.prevBtn.addEventListener('click', () => {
				if (this.counter <= 0) return;
				this.sliderDiv.style.transition = 'transform 0.2s ease-in-out';
				this.counter--;
				this.sliderDiv.style.transform = this.setDefaultImg();
			});

			this.sliderDiv.addEventListener('transitionend', () => {
				if (this.sliderImages[this.counter].id === 'lastClone') {
					this.sliderDiv.style.transition = 'none';
					this.counter = this.sliderImages.length - 2;
					this.sliderDiv.style.transform = this.setDefaultImg();
				}

				if (this.sliderImages[this.counter].id === 'firstClone') {
					this.sliderDiv.style.transition = 'none';
					this.counter = this.sliderImages.length - this.counter;
					this.sliderDiv.style.transform = this.setDefaultImg();
				}
			});
		}
	}

	const sliderPast = new Slider(
		pastSlider,
		pastSliderImages,
		prevPastBtn,
		nextPastBtn
	);

	const sliderPresent = new Slider(
		presentSlider,
		presentSliderImages,
		prevPresentBtn,
		nextPresentBtn
	);

	const sliderFuture = new Slider(
		futureSlider,
		futureSliderImages,
		prevFutureBtn,
		nextFutureBtn
	);

	sliderPast.enableSlide();
	sliderPresent.enableSlide();
	sliderFuture.enableSlide();
}

const aboutContainer = document.querySelector('.about-container');
aboutContainer.addEventListener('onload', initializeSlides());

/*
-----------------------------------------------------------------------------
Hamburger menu - Mobile 
-----------------------------------------------------------------------------	
*/

/*
	To implement on side slide mobile menu 

	1. When this div is out prevent scroll 
		- - This can be triggered by the active class set when the div is open 
	2. Apply light/dark colors to side nav
	3. Remove style of nav nav top-bar 
*/

const toggleMobileMenu = document.querySelector('.fa-bars');

toggleMobileMenu.addEventListener('click', () => {
	console.log('clicked');
});
