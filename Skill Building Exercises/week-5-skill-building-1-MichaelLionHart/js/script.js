// script.js

function getImage(personsName, imageSource) {
    let image = document.querySelector('img');
    image.classList.add('fade');
    image.classList.add('img');
    image.src = imageSource;
    image.alt = personsName;
}
