const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

/* Looping through images */
for (const img of imageArray) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + img);
  newImage.onclick = function() {
    const nowsrc = 'images/' + img;
    displayedImage.src = nowsrc;
  }
  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */


btn.onclick = function() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}