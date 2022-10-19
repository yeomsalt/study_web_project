// const image = document.getElementById("background");

const images = [
   "pink1.jpeg",
   "dark1.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);
const image = document.createElement("img");
const bg = image.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bg})`;
// document.body.appendChild(image);


