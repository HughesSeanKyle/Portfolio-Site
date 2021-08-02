const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
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

////////////////////////////////////////////////////////////////////////////////////////

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
  console.log(spanChar);
  // apply the fade classname
  spanChar.setAttribute('id', 'fade');
  //   spanChar.className = 'fade';
  // Increment char variable
  char++;
  // Clear timer when incremented to end of characters array
  char === characters.length && clearInterval(timer);
}
