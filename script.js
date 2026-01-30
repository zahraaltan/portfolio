
 const mask = document.querySelector('.cont1Mask');
const container = document.querySelector('.container1');
const maskSizeSmall = 20;
const maskSizeLarge = 250;
let currentSize = maskSizeSmall;
        
document.addEventListener('mousemove', (e) => {
gsap.to(mask, {
    '--mask-x': `${e.clientX - currentSize / 2}px`,
    '--mask-y': `${e.clientY - currentSize / 2}px`,
    '--mask-size': `${currentSize}px`,
    duration: 0.6,
    ease: 'back.out(1.7)'
});
});
        
container.addEventListener('mouseenter', () => {
    currentSize = maskSizeLarge;
});
        
container.addEventListener('mouseleave', () => {
    currentSize = maskSizeSmall;
});


//letter animation
  document.addEventListener('DOMContentLoaded', function() {
  // Split heading into words
  const heading = document.querySelector('.fade-in');
  if (heading) {
    heading.innerHTML = heading.textContent
      .split(' ')
      .map(word => `<span>${word}</span>`)
      .join(' ');
  }
  
  // Split paragraph into characters
  const paragraph = document.querySelector('.about');
  if (paragraph) {
    paragraph.innerHTML = paragraph.textContent
      .split('')
      .map((char, index) => `<span style="--char-index: ${index}">${char}</span>`)
      .join('');
  }
});

gsap.from(".bar abbr",{
  scrollTrigger: ".bar",
  left: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1
})
gsap.from(".bar span",{
  scrollTrigger: ".bar",
  width: "0px",
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1
})