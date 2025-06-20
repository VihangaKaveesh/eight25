// Icon configurations for the left container
const leftIcons = [
  {
    src: 'assets/icons/aws.ico',
    link: 'https://aws.amazon.com/',
    position: { top: '52%', left: '75%' },
  },
  {
    src: 'assets/icons/blackberry.ico',
    link: 'https://www.blackberry.com/us/en',
    position: { top: '8%', left: '75%' },
  },
  {
    src: 'assets/icons/checkpoint.ico',
    link: 'https://www.checkpoint.com/',
    position: { top: '48%', left: '5%' },
  },
  {
    src: 'assets/icons/cyfirma.ico',
    link: 'https://www.cyfirma.com/',
    position: { top: '75%', left: '44%' },
  },
  {
    src: 'assets/icons/windows.ico',
    link: 'https://www.microsoft.com/en-us/windows?r=1',
    position: { top: '28%', left: '44%' },
  },
];

// Icon configurations for the right container
const rightIcons = [
  {
    src: 'assets/icons/dataminr.ico',
    link: 'https://www.dataminr.com/',
    position: { top: '28%', left: '10%' },
  },
  {
    src: 'assets/icons/firemon.ico',
    link: 'https://www.firemon.com/',
    position: { top: '48%', left: '44%' },
  },
  {
    src: 'assets/icons/principa.ico',
    link: 'https://principa.co.za/',
    position: { top: '9%', left: '44%' },
  },
  {
    src: 'assets/icons/cisco.ico',
    link: 'https://www.cisco.com/',
    position: { top: '48%', left: '75%' },
  },
  {
    src: 'assets/icons/cybersixgill.ico',
    link: 'https://cybersixgill.com/',
    position: { top: '75%', left: '75%' },
  },
];

// Get references 
const leftContainer = document.getElementById('leftLogos');
const rightContainer = document.getElementById('rightLogos');
const phoneAnim = document.querySelector('.phone-animation');

// Create a tech icon element with a link and style
function createTechIcon({ src, link, position }) {
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.rel = 'noopener';// Ensures security when opening in a new tab since when clicked it redirects

  const img = document.createElement('img');
  img.src = src;
  img.className = 'tech-icon';


   // Position the icon absolutely using the provided top/left (for accuracy)
  img.style.position = 'absolute';
  img.style.top = position.top;
  img.style.left = position.left;

  a.appendChild(img);
  return a;
}

// Inject icons into the specified container
function placeIcons(container, icons) {
  icons.forEach(icon => {
    const el = createTechIcon(icon);
    container.appendChild(el);
  });
}

// Place icons in the correct containers
placeIcons(leftContainer, leftIcons);
placeIcons(rightContainer, rightIcons);








// All elements you want to animate on scroll
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
  threshold: 0.4
});

// Observe each element
animatedElements.forEach(el => observer.observe(el));






//to the hero section
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


