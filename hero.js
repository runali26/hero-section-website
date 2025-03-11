gsap.to(".container h1", {opacity: 1, y: 0, duration: 1});
gsap.to(".container p", {opacity: 1, y: 0, duration: 1.5});

const images = document.querySelectorAll('.image img');

images.forEach(image => {
  image.addEventListener('mousemove', (e) => {
    const {offsetX, offsetY} = e;
    const {offsetWidth, offsetHeight} = image;
    const moveX = (offsetX / offsetWidth - 0.5) * 20;
    const moveY = (offsetY / offsetHeight - 0.5) * 20;
    image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'translate(0, 0) scale(1)';
  });
});
