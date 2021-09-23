// Light/Dark selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

const imageLastClone = document.getElementById('lastClone');
const imageFirstClone = document.getElementById('firstClone');

const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_Data_report_re_p4so_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_Lost_online_re_upmy_${color}.svg`;
	image4.src = `img/tense-slider-images/past/1.undraw_Lost_online_re_upmy_${color}.svg`;
	imageLastClone.src = `img/undraw_Lost_online_re_upmy_${color}.svg`;
	imageFirstClone.src = `img/undraw_Data_report_re_p4so_${color}.svg`;
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

	// All Slide array images
	const pastSliderImages = document.querySelectorAll('.images-past img');
	const presentSliderImages = document.querySelectorAll('.images-present img');

	// All slide buttons
	/* Previous */
	const prevPastBtn = document.querySelector('#btnPastPrev');
	const prevPresentBtn = document.querySelector('#btnPresentPrev');

	/* Next */
	const nextPastBtn = document.querySelector('#btnPastNext');
	const nextPresentBtn = document.querySelector('#btnPresentNext');

	class Slider {
		constructor(sliderDiv, sliderImages, prevBtn, nextBtn) {
			this.sliderDiv = sliderDiv;
			this.sliderImages = sliderImages;
			this.prevBtn = prevBtn;
			this.nextBtn = nextBtn;
		}

		counter = 1;
		/*
			This function must still be called inside your interface function. 
			- - At this moment in time it is 
				- - logMsg();  
		*/
		getFirstImgWidth() {
			return this.sliderImages[0].offsetParent.clientWidth + 30;
		}

		/*
			At this momement this function returns only the translate(-244px).
			- - Somehow this will need a function of it's own. 
				- - The transform prop will have to 	
		*/

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

	sliderPast.enableSlide();
	sliderPresent.enableSlide();
}

const aboutContainer = document.querySelector('.about-container');
aboutContainer.addEventListener('onload', initializeSlides());
