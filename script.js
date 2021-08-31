// Light/Dark selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_Data_report_re_p4so_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_Lost_online_re_upmy_${color}.svg`;
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

function setTenseSlider() {
	// Slider Selectors
	const pastSliderPrev = document.getElementById('btnPastPrev');
	const pastSliderNext = document.getElementById('btnPastNext');
	const presentSliderPrev = document.getElementById('btnPresentPrev');
	const presentSliderNext = document.getElementById('btnPresentNext');
	const futureSliderPrev = document.getElementById('btnFuturePrev');
	const futureSliderNext = document.getElementById('btnFutureNext');

	// Slider buttons array

	const sliderBtnsArray = [
		pastSliderPrev,
		pastSliderNext,
		presentSliderPrev,
		presentSliderNext,
		futureSliderPrev,
		futureSliderNext,
	];

	// Listen for click on each button

	sliderBtnsArray.forEach((sliderBtn) => {
		sliderBtn.addEventListener('click', () => {
			console.log(`${sliderBtn.id} was clicked`);
		});
	});

	// Create object to hold images
	// example (object containing arrays with images for slides)
	let times = {
		past: ['past-slide-one', 'past-slide-two', 'past-slide-three'],
		present: ['present-slide-one', 'present-slide-two', 'present-slide-three'],
		future: ['future-slide-one', 'future-slide-two', 'future-slide-three'],
	};
	// NOTES
	// 1. Create an array of all btn<tense> button ids
	// 2. Figure out how to have event listener for all those next/prev buttons

	// Logic needed
	/*
    // 1. By clicking any of those 6 slider buttons this function should be triggered
      - - They can be set into selectors via their id 
  */
}

setTenseSlider();
