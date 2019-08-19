/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


// the image list
const images = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
];


// generate a tab div element given a topic
const makeImg = (image, idx) => {
    const img = document.createElement('img');
    img.src = image;
    img.className = `carousel-img${idx}`;
    return img;
};


// generate the carousel and attach to the DOM
const attach = document.querySelector('.carousel-container');

const carousel = document.createElement('div');
carousel.className = 'carousel';

const leftButton = document.createElement('div');
leftButton.className = 'left-button';
leftButton.textContent = '<';
carousel.appendChild(leftButton);

images.forEach((image, idx) => {
    carousel.appendChild(makeImg(image, idx));
});


const rightButton = document.createElement('div');
rightButton.className = 'right-button';
rightButton.textContent = '>';
carousel.appendChild(rightButton);

attach.appendChild(carousel);


// set up button functionality
// Initialize number of images and start with image 0
let carouselImage = 0;
const numImages = images.length;

let currentImage = document.querySelector(`.carousel-img${carouselImage}`);
currentImage.classList.toggle('display-image');

// left button click handler
const shiftLeft = () => {
    currentImage.classList.toggle('display-image');
    carouselImage -= 1;
    if (carouselImage < 0) {
        carouselImage = numImages - 1;
    };
    currentImage = document.querySelector(`.carousel-img${carouselImage}`);
    currentImage.classList.toggle('display-image');
};

// right button click handler
const shiftRight = () => {
    currentImage.classList.toggle('display-image');
    carouselImage += 1;
    if (carouselImage >= numImages) {
        carouselImage = 0;
    };
    currentImage = document.querySelector(`.carousel-img${carouselImage}`);
    currentImage.classList.toggle('display-image');
};

// add handlers to the buttons
rightButton.addEventListener('click', shiftRight);
leftButton.addEventListener('click', shiftLeft);

