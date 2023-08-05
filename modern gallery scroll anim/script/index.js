
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true
  }
})
.to('.img', {
  stagger: .5,
  y: -500,
  scale: 1,
  scrub: true
})



// Get the div element
const header = document.querySelector('h1');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
// Get the viewport height
const viewportHeight = window.innerHeight;

// Get the current scroll position
const scrollPosition = window.scrollY;

// Calculate the scroll position for 50% of the viewport
const scrollThreshold = viewportHeight / 2;

// Check if the scroll position is greater than or equal to the threshold
if (scrollPosition >= scrollThreshold) {
    // Add the 'scroll' class to change the text color
    header.classList.add('active');
  } else {
    // Remove the 'scroll' class if the scroll position is less than the threshold
    header.classList.remove('active');
  }
});

