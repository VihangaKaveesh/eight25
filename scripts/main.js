// ICON SETUP & STYLKIN ELEMENTS:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// Left-side icons
const leftIcons = [
  { src: 'assets/icons/aws.ico', link: 'https://aws.amazon.com/', position: { top: '52%', left: '75%' } },
  { src: 'assets/icons/blackberry.ico', link: 'https://www.blackberry.com/us/en', position: { top: '8%', left: '75%' } },
  { src: 'assets/icons/checkpoint.ico', link: 'https://www.checkpoint.com/', position: { top: '48%', left: '5%' } },
  { src: 'assets/icons/cyfirma.ico', link: 'https://www.cyfirma.com/', position: { top: '75%', left: '44%' } },
  { src: 'assets/icons/windows.ico', link: 'https://www.microsoft.com/en-us/windows?r=1', position: { top: '28%', left: '44%' } },
];

// Right-side icons
const rightIcons = [
  { src: 'assets/icons/dataminr.ico', link: 'https://www.dataminr.com/', position: { top: '28%', left: '10%' } },
  { src: 'assets/icons/firemon.ico', link: 'https://www.firemon.com/', position: { top: '48%', left: '44%' } },
  { src: 'assets/icons/principa.ico', link: 'https://principa.co.za/', position: { top: '9%', left: '44%' } },
  { src: 'assets/icons/cisco.ico', link: 'https://www.cisco.com/', position: { top: '48%', left: '75%' } },
  { src: 'assets/icons/cybersixgill.ico', link: 'https://cybersixgill.com/', position: { top: '75%', left: '75%' } },
];

// Containers
const leftContainer = document.getElementById('leftLogos');
const rightContainer = document.getElementById('rightLogos');
const phoneAnim = document.querySelector('.phone-animation');

// Create a clickable icon with a position
function createTechIcon({ src, link, position }) {
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.rel = 'noopener'; // for security

  const img = document.createElement('img');
  img.src = src;
  img.className = 'tech-icon';
  img.style.position = 'absolute';
  img.style.top = position.top;
  img.style.left = position.left;

  a.appendChild(img);
  return a;
}

// Add icons to a container
function placeIcons(container, icons) {
  icons.forEach(icon => {
    container.appendChild(createTechIcon(icon));
  });
}

placeIcons(leftContainer, leftIcons);
placeIcons(rightContainer, rightIcons);






// INTERSECTION ANIMATION :
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://web.dev/articles/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// Elements that should animate on scroll
const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .phone-animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.4 // 40% visibility triggers the effect
});

animatedElements.forEach(el => observer.observe(el));







// SLIDESHOW LOGIC:
//https://www.w3schools.com/howto/howto_js_slideshow.asp 

let slideIndex = 1;
showSlides(slideIndex);

// Button click to move slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot click to jump to a slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Core slideshow logic
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}
