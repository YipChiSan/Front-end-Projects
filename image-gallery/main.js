const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

function replaceFullImage(e) {
    displayedImage.setAttribute('src', e.target.src);
}

let url;
for (let i = 1; i < 6; i++) {
    url = "images/pic" + i + ".jpg";
    const newImage = document.createElement('img');
    newImage.setAttribute('src', url);
    newImage.addEventListener('click', replaceFullImage);
    thumbBar.appendChild(newImage);
}




/* Wiring up the Darken/Lighten button */
