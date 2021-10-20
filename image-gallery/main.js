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
function modifyFullImage() {
    let btnClass = btn.getAttribute("class");
    btn.textContent = (btnClass == "dark") ? "Lighten" : "Darken";
    btn.setAttribute('class', (btnClass == "dark") ? "light" : "dark");
    overlay.style.backgroundColor = (btnClass == "dark") ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)";
}

btn.addEventListener('click', modifyFullImage);
